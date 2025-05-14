import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 text-gray-800 p-4">
      <h1 className="text-6xl sm:text-9xl font-extrabold tracking-widest text-blue-600">404</h1>
      
      <div className="bg-blue-500 px-4 text-sm sm:text-lg rounded rotate-12 absolute text-white mt-10 sm:mt-20">
        Page Not Found
      </div>

      <NavLink
        to="/"
        className="mt-16 sm:mt-24 inline-block px-6 py-3 text-sm sm:text-base font-semibold bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go back home
      </NavLink>
    </div>
  );
}

export default NotFound;