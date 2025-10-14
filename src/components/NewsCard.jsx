import React from "react";
import { useDarkMode } from "../context/ThemeContext"; // ⬅️ import darkMode

const NewsCard = ({ img, title, desc }) => {
  const { darkMode } = useDarkMode(); // ⬅️ get dark mode state

  return (
    <div
      className={`rounded-lg overflow-auto scrollbar-hide p-2 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-gray-900"
      }`}
    >
      <img
        src={img || "/images/default-news.jpeg"}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {desc}
        </p>
        <button
          className={`text-sm mt-2 font-medium transition-colors ${
            darkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-500"
          }`}
        >
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
