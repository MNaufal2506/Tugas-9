import { Link } from "react-router";
import courses from "../data/courses";

export default function Courses() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Our Courses</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>

            <p className="text-gray-600 mb-4">{course.description}</p>

            <Link
              to={`/courses/${course.id}`}
              className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
            >
              View Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
