// import React from 'react'

// const NewsCard = ({ img, title, desc }) => {
//   return (
//     <>
//       {/* <div className="bg-gray-100 text-black rounded-lg overflow-hidden dark:bg-gray-700 p-2"> */}
//        <div className="bg-gray-800 rounded-lg overflow-hidden dark:bg-gray-800 p-2">
//       <img src={img} alt={title} className="w-full h-40 object-cover rounded" />
//       <div className="p-4 dark:text-white">
//         <h3 className="font-semibold">{title}</h3>
//         <p className="text-gray-400 text-sm mt-1">{desc}</p>
//         <button className="text-sm text-blue-400 mt-2">READ MORE</button>
//       </div>
//     </div>
//     </>
//   )
// }

// export default NewsCard

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
