import { Outlet, NavLink } from "react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-linear-to-r from-yellow-300 to-yellow-500 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Edukasi</h1>

          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Courses
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="grow max-w-6xl mx-auto w-full px-6 py-10">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-gray-300 text-center py-4">
        © 2026 EduCourse Hub • Built with React & Tailwind
      </footer>
    </div>
  );
}
