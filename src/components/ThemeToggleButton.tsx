"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed top-20 right-4 md:right-6 z-40 p-2 w-[40px] h-[40px] rounded-full border border-blue-300 dark:border-yellow-400 bg-white dark:bg-gray-800 text-blue-600 dark:text-yellow-300 shadow-md hover:scale-105 transition-all flex items-center justify-center"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
