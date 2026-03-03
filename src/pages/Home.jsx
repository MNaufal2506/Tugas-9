import { Link } from "react-router";
import courses from "../data/courses";

export default function Home() {
  return (
    <div className="space-y-20">

      {/* HERO SECTION */}
      <section className="text-center py-20 bg-linear-to-r from-yellow-300 to-yellow-400 text-white rounded-3xl shadow-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Upgrade Your Skills 🚀
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Belajar React, Tailwind, dan teknologi modern lainnya
          dengan metode yang mudah dipahami dan terstruktur.
        </p>

        <Link
          to="/courses"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl shadow hover:scale-105 transition"
        >
          Explore Courses
        </Link>
      </section>

      {/* COURSE PREVIEW SECTION */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Popular Courses
          </h2>

          <Link
            to="/courses"
            className="text-yellow-400 font-semibold hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
            >
              <h3 className="text-xl font-semibold mb-2">
                {course.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {course.description}
              </p>

              <Link
                to={`/courses/${course.id}`}
                className="inline-block bg-yellow-300 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}