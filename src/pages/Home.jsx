export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
        Upgrade Your Skills 🚀
      </h1>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
        Platform belajar modern dengan kursus React, Tailwind, dan teknologi
        terbaru.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/courses"
          className="bg-yellow-600 text-white px-6 py-3 rounded-xl shadow hover:bg-yellow-700 transition"
        >
          Explore Courses
        </a>
      </div>
    </div>
  );
}
