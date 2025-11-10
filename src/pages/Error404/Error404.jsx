import React from "react";
import error_image from "../../assets/404.png";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center bg-white">
      <img
        src={error_image}
        alt="404 Not Found"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl mb-8"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-sky-800 mb-2">
        Page Not Found
      </h1>
      <p className="text-sky-900 mb-6 text-sm md:text-base">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn bg-sky-900 hover:bg-sky-800 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error404;
