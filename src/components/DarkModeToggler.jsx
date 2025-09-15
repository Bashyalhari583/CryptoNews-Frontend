import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
import { useDarkMode } from '../context/ThemeContext';
const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();


  return (
    <>
      <button onClick={()=> setDarkMode(!darkMode)} className="p-3 rounded bg-gray-700 text-yellow-400 transition-all duration-300 fixed bottom-4 right-4 z-50 shadow-lg hover:scale-110">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </>
  )
}

export default DarkModeToggler



