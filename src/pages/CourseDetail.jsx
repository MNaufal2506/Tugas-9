import { useParams } from "react-router";
import courses from "../data/courses";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-2xl p-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

      <p className="text-gray-600 mb-6">{course.description}</p>

      <h3 className="text-xl font-semibold mb-3">Course Lessons:</h3>

      <ul className="space-y-2">
        {course.lessons.map((lesson, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded-lg">
            {lesson}
          </li>
        ))}
      </ul>
    </div>
  );
}
