import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(true); // 🔥 Default to dark mode

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen">
      {/* Magical Glow Background Only for Light Mode */}
      {!darkMode && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-[60vw] h-[60vw] bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse top-[-10%] left-[-10%]"></div>
          <div className="absolute w-[50vw] h-[50vw] bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse bottom-[-10%] right-[-10%]"></div>
        </div>
      )}

      <div
        className={`flex flex-col justify-center items-center py-8 px-4 transition-all duration-300 ${
          darkMode ? "bg-gray-900" : "bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]"
        }`}
      >
        {/* Toggle Button */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="text-sm text-gray-700 dark:text-gray-300">Light</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
          </label>
          <span className="text-sm text-gray-700 dark:text-gray-300">Dark</span>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-300 mb-2">
            AI Image Enhancer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
            Welcome Champs ✨
          </p>
        </div>

        <Home />

        {/* Footer */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-6">
          powered by <span className="font-semibold">KrishnaDevotee ⚡</span>
        </div>
      </div>
    </div>
  );
}

export default App;



