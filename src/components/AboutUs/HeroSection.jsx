import React from 'react';
import logo from "../../assets/FinEase-logo.png"

const HeroSection = () => {
  return (
    <section className="container py-20 px-4">
      <div className="responsive-container  text-center">
        <img
          src={logo}
          alt="FinEase"
          className="w-20 h-20 mx-auto mb-6 animate-bounce"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-sky-900 to-blue-600 bg-clip-text text-transparent">
          Empowering Your Financial Future
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-7xl mx-auto leading-relaxed">
          FinEase is more than just an expense tracker. We are building a
          companion that helps you make smarter financial decisions, achieve
          your goals, and live a stress-free life.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;