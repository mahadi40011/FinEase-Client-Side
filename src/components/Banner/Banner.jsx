import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
      <section className="bg-app-200 text-natural font-poppins rounded-2xl py-10 md:py-20 text-center px-4 ">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Take Control of Your Finances Today 
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Plan smart, spend wisely, and build a secure financial future.
        </p>
        <Link
          to="/add-transaction"
          className="bg-sky-900 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-md transition"
        >
          Get Started
        </Link>
      </section>
  );
};

export default Banner;
