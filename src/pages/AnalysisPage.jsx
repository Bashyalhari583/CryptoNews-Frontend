// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const AnalysisPage = () => {
//   return (
//     <>
//     <Navbar />
//         <div className='text-3xl font-bold underline text-center mt-20'>
//         Welcome to the Analysis Page!
//       </div>

//     </>
//   )
// }

// export default AnalysisPage


import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDarkMode } from "../context/ThemeContext"; // ⬅️ import your darkMode context

const AnalysisPage = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar darkMode={darkMode} />

      <div className="text-3xl font-bold underline text-center mt-20 transition-colors duration-300">
        Welcome to the Analysis Page!
      </div>

      <Footer />
    </div>
  );
};

export default AnalysisPage;
