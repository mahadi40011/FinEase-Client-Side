import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Kisu na thakle system preference check korbe
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="group relative inline-flex h-9 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300 focus:outline-none border-2 border-transparent hover:border-sky-500/30"
    >
      {/* Moving Circle */}
      <span
        className={`${
          darkMode ? "translate-x-8 bg-gray-900" : "translate-x-1 bg-white"
        } flex h-7 w-7 transform items-center justify-center rounded-full transition duration-500 ease-in-out shadow-lg`}
      >
        {darkMode ? (
          <Moon size={16} className="text-sky-400" />
        ) : (
          <Sun size={16} className="text-amber-500" />
        )}
      </span>

      {/* Static Background Icons */}
      <div className="absolute inset-0 flex h-full w-full items-center justify-between px-2 text-xs">
        <Sun
          size={14}
          className={`${
            darkMode ? "opacity-40 text-gray-400" : "opacity-0"
          } transition-opacity`}
        />
        <Moon
          size={14}
          className={`${
            darkMode ? "opacity-0" : "opacity-40 text-gray-500"
          } transition-opacity`}
        />
      </div>
    </button>
  );
}
