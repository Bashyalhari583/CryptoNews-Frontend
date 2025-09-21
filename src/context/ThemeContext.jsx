// import React, { useState,useEffect,createContext,useContext } from 'react'

// const ThemeContext = createContext('light');

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);
//   return (
//     <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export const useDarkMode = () => useContext(ThemeContext);




import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // default is dark mode
  const [darkMode, setDarkMode] = useState(true);

  // Add/remove "dark" class from <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy access
export const useDarkMode = () => useContext(ThemeContext);
