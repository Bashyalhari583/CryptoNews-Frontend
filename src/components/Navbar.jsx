// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaSun, FaMoon, FaSearch } from 'react-icons/fa';

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-700 dark:border-gray-600 bg-gray-900 dark:bg-gray-900 ">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
//         <h1 className="text-xl font-bold text-white">CryptoNews</h1>

//         <nav className="hidden md:flex gap-6 text-white text-sm dark:text-white">
//           <a href="#" className="hover:underline hover:scale-105">Home</a>
//           <a href="#" className="hover:underline hover:scale-105">News</a>
//           <a href="#" className="hover:underline hover:scale-105">Markets</a>
//           <a href="#" className="hover:underline hover:scale-105">Prices</a>
//           <a href="#" className="hover:underline hover:scale-105">Analysis</a>
//           <a href="#" className="hover:underline hover:scale-105">Events</a>
//         </nav>

//         <div className="hidden md:flex items-center gap-3">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 dark:bg-gray-700 cursor-pointer">
//             <FaSearch /> Search
//           </button>
//           <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded bg-gray-700 cursor-pointer text-yellow-400">
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>
//           <button className="px-3 py-1 rounded bg-gray-800 dark:bg-gray-700 cursor-pointer">Login</button>
//         </div>

//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2 cursor-pointer">
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//       </div>

//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-800 dark:bg-gray-700 cursor-pointer">
//           <a href="#" className="text-white block">Home</a>
//           <a href="#" className="text-white block">News</a>
//           <a href="#" className="text-white block">Markets</a>
//           <a href="#" className="text-white block">Prices</a>
//           <a href="#" className="text-white block">Analysis</a>
//           <a href="#" className="text-white block">Events</a>

//           <div className="flex gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 dark:bg-gray-600 cursor-pointer">
//               <FaSearch /> Search
//             </button>
//             <button className="px-3 py-1 rounded bg-gray-700 dark:bg-gray-600 cursor-pointer">Login</button>
//             <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded bg-gray-700 text-yellow-400">
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaSun, FaMoon, FaSearch, FaBell } from 'react-icons/fa';

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-700 dark:border-gray-600 bg-gray-900 dark:bg-gray-900">
//       <div className="max-w-9xl mx-full flex justify-between items-center px-18 py-4">

//         {/* Logo with space from left */}
//         <a href='/'><h1 className="text-xl font-bold text-white">CryptoNews</h1></a>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-white text-sm dark:text-white">
//           <a href="/home" className="hover:underline hover:scale-105">Home</a>
//           <a href="/news" className="hover:underline hover:scale-105">News</a>
//           <a href="/markets" className="hover:underline hover:scale-105">Markets</a>
//           <a href="/prices" className="hover:underline hover:scale-105">Prices</a>
//           <a href="/analysis" className="hover:underline hover:scale-105">Analysis</a>
//           <a href="/events" className="hover:underline hover:scale-105">Events</a>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 dark:bg-gray-700 cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded bg-gray-700 cursor-pointer text-yellow-400">
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           {/* Notification Icon */}
//           <button className="p-2 rounded bg-gray-800 dark:bg-gray-700 cursor-pointer text-white">
//             <FaBell />
//           </button>

//           {/* Login Button */}
//           <button className="px-3 py-1 rounded bg-gray-800 dark:bg-gray-700 cursor-pointer">Login</button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2 cursor-pointer">
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-800 dark:bg-gray-700 cursor-pointer">
//           <a href="#" className="text-white block">Home</a>
//           <a href="#" className="text-white block">News</a>
//           <a href="#" className="text-white block">Markets</a>
//           <a href="#" className="text-white block">Prices</a>
//           <a href="#" className="text-white block">Analysis</a>
//           <a href="#" className="text-white block">Events</a>

//           <div className="flex gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 dark:bg-gray-600 cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             <button className="p-2 rounded bg-gray-700 text-white">
//               <FaBell />
//             </button>

//             <button className="px-3 py-1 rounded bg-gray-700 dark:bg-gray-600 cursor-pointer">Login</button>

//             <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded bg-gray-700 text-yellow-400">
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes, FaSun, FaMoon, FaSearch, FaBell } from 'react-icons/fa';

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Apply dark/light mode globally
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-20 flex justify-between items-center py-4">

//         {/* Logo */}
//         <Link to="/">
//           <h1 className="text-xl font-bold text-white dark:text-black">CryptoNews</h1>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-white dark:text-black text-sm">
//           <Link to="/home" className="hover:underline hover:scale-105">Home</Link>
//           <Link to="/news" className="hover:underline hover:scale-105">News</Link>
//           <Link to="/markets" className="hover:underline hover:scale-105">Markets</Link>
//           <Link to="/prices" className="hover:underline hover:scale-105">Prices</Link>
//           <Link to="/analysis" className="hover:underline hover:scale-105">Analysis</Link>
//           <Link to="/events" className="hover:underline hover:scale-105">Events</Link>
//         </nav>

//         {/* Right Side Icons (Desktop) */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-700 dark:bg-gray-300 cursor-pointer text-yellow-400"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           <button className="p-2 rounded bg-gray-800 dark:bg-gray-200 cursor-pointer text-white dark:text-black">
//             <FaBell />
//           </button>

//           <button className="px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 cursor-pointer text-white dark:text-black">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-white dark:text-black p-2 cursor-pointer"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-800 dark:bg-gray-200 transition-colors duration-300">
//           <Link to="/home" className="block text-white dark:text-black">Home</Link>
//           <Link to="/news" className="block text-white dark:text-black">News</Link>
//           <Link to="/markets" className="block text-white dark:text-black">Markets</Link>
//           <Link to="/prices" className="block text-white dark:text-black">Prices</Link>
//           <Link to="/analysis" className="block text-white dark:text-black">Analysis</Link>
//           <Link to="/events" className="block text-white dark:text-black">Events</Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 dark:bg-white text-white dark:text-black cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             <button className="p-2 rounded bg-gray-700 dark:bg-white text-white dark:text-black">
//               <FaBell />
//             </button>

//             <button className="px-3 py-1 rounded bg-gray-700 dark:bg-white text-white dark:text-black cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-700 dark:bg-white text-yellow-400"
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes, FaSun, FaMoon, FaSearch, FaBell } from 'react-icons/fa';

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Apply dark/light mode globally
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">

//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold text-white dark:text-black">CryptoNews</h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-white dark:text-black text-sm">
//           <Link to="/home" className="hover:underline hover:scale-105">Home</Link>
//           <Link to="/news" className="hover:underline hover:scale-105">News</Link>
//           <Link to="/markets" className="hover:underline hover:scale-105">Markets</Link>
//           <Link to="/prices" className="hover:underline hover:scale-105">Prices</Link>
//           <Link to="/analysis" className="hover:underline hover:scale-105">Analysis</Link>
//           <Link to="/events" className="hover:underline hover:scale-105">Events</Link>
//         </nav>

//         {/* Right Side Icons (Desktop) */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-700 dark:bg-gray-300 cursor-pointer text-yellow-400"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           <button className="p-2 rounded bg-gray-800 dark:bg-gray-200 cursor-pointer text-white dark:text-black">
//             <FaBell />
//           </button>

//           <button className="px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 cursor-pointer text-white dark:text-black">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white dark:text-black p-2 ml-4"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-800 dark:bg-gray-200 transition-colors duration-300">
//           <Link to="/home" className="block text-white dark:text-black">Home</Link>
//           <Link to="/news" className="block text-white dark:text-black">News</Link>
//           <Link to="/markets" className="block text-white dark:text-black">Markets</Link>
//           <Link to="/prices" className="block text-white dark:text-black">Prices</Link>
//           <Link to="/analysis" className="block text-white dark:text-black">Analysis</Link>
//           <Link to="/events" className="block text-white dark:text-black">Events</Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 dark:bg-white text-white dark:text-black cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             <button className="p-2 rounded bg-gray-700 dark:bg-white text-white dark:text-black">
//               <FaBell />
//             </button>

//             <button className="px-3 py-1 rounded bg-gray-700 dark:bg-white text-white dark:text-black cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-700 dark:bg-white text-yellow-400"
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaBars,
//   FaTimes,
//   FaSun,
//   FaMoon,
//   FaSearch,
//   FaBell,
// } from "react-icons/fa";

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);

//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     // Clear any pending close
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     // Add small delay (e.g., 400ms)
//     timeoutRef.current = setTimeout(() => {
//       setHovered(false);
//     }, 400);
//   };
//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   // Fetch events (real-time update)
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();
//       setEvents(data.Data.slice(0, 10)); // store latest 10 events
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // update every 60s
//     return () => clearInterval(interval);
//   }, []);

//   // Apply dark/light mode globally
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold text-white dark:text-black">
//               CryptoNews
//             </h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-white dark:text-black text-sm relative">
//           <Link to="/home" className="hover:underline hover:scale-105">
//             Home
//           </Link>
//           <Link to="/news" className="hover:underline hover:scale-105">
//             News
//           </Link>
//           <Link to="/markets" className="hover:underline hover:scale-105">
//             Markets
//           </Link>
//           <Link to="/prices" className="hover:underline hover:scale-105">
//             Prices
//           </Link>
//           <Link to="/analysis" className="hover:underline hover:scale-105">
//             Analysis
//           </Link>

//           {/* Events with Hover Popup */}
//           {/* Events with popup */}
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link to="/events" className="hover:underline hover:scale-105">
//               Events
//             </Link>

//             {hovered && events.length > 0 && (
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-800 dark:bg-gray-200 text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold text-white dark:text-black mb-3">
//                   Latest Events
//                 </h3>

//                 {/* Grid 2x2 */}
//                 <div className="grid grid-cols-2 gap-4">
//                   {events.slice(0, 4).map((event, idx) => (
//                     <div
//                       key={idx}
//                       className="p-3 bg-gray-700 dark:bg-white rounded-md hover:shadow-md transition"
//                     >
//                       <a
//                         href={event.url}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="font-semibold text-white dark:text-black hover:text-yellow-400 dark:hover:text-blue-600 block"
//                       >
//                         {event.title.length > 60
//                           ? event.title.slice(0, 60) + "..."
//                           : event.title}
//                       </a>
//                       <p className="text-gray-300 dark:text-gray-600 mt-1 text-xs">
//                         {event.body.length > 80
//                           ? event.body.slice(0, 80) + "..."
//                           : event.body}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* View More */}
//                 <div className="text-right mt-3">
//                   <Link
//                     to="/events"
//                     className="text-yellow-400 dark:text-blue-600 font-medium hover:underline"
//                   >
//                     View more →
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Side Icons (Desktop) */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-700 dark:bg-gray-300 cursor-pointer text-yellow-400"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           <button className="p-2 rounded bg-gray-800 dark:bg-gray-200 cursor-pointer text-white dark:text-black">
//             <FaBell />
//           </button>

//           <button className="px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 cursor-pointer text-white dark:text-black">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white dark:text-black p-2 ml-4"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-800 dark:bg-gray-200 transition-colors duration-300">
//           <Link to="/home" className="block text-white dark:text-black">
//             Home
//           </Link>
//           <Link to="/news" className="block text-white dark:text-black">
//             News
//           </Link>
//           <Link to="/markets" className="block text-white dark:text-black">
//             Markets
//           </Link>
//           <Link to="/prices" className="block text-white dark:text-black">
//             Prices
//           </Link>
//           <Link to="/analysis" className="block text-white dark:text-black">
//             Analysis
//           </Link>
//           <Link to="/events" className="block text-white dark:text-black">
//             Events
//           </Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 dark:bg-white text-white dark:text-black cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             <button className="p-2 rounded bg-gray-700 dark:bg-white text-white dark:text-black">
//               <FaBell />
//             </button>

//             <button className="px-3 py-1 rounded bg-gray-700 dark:bg-white text-white dark:text-black cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-700 dark:bg-white text-yellow-400"
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes, FaSun, FaMoon, FaSearch, FaBell } from "react-icons/fa";

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);
//   const timeoutRef = useRef(null);

//   // Hover handlers for events dropdown
//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setHovered(false), 400);
//   };

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   // Fetch events from backend
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/events");
//       const data = await res.json();
//       setEvents(data.events || []); // ensure safe default
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60s
//     return () => clearInterval(interval);
//   }, []);

//   // Apply dark mode globally
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <Link to="/">
//           <h1 className="text-xl font-bold text-white dark:text-black">CryptoNews</h1>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-6 text-white dark:text-black text-sm relative">
//           <Link to="/home" className="hover:underline hover:scale-105">Home</Link>
//           <Link to="/news" className="hover:underline hover:scale-105">News</Link>
//           <Link to="/markets" className="hover:underline hover:scale-105">Markets</Link>
//           <Link to="/prices" className="hover:underline hover:scale-105">Prices</Link>
//           <Link to="/analysis" className="hover:underline hover:scale-105">Analysis</Link>

//           {/* Events Dropdown */}
//           <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
//             <Link to="/events" className="hover:underline hover:scale-105">Events</Link>
//             {hovered && events.length > 0 && (
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-gray-800 dark:bg-gray-200 text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold text-white dark:text-black mb-3">Latest Events</h3>
//                 <div className="grid grid-cols-1 gap-3">
//                   {events.slice(0, 4).map((event) => (
//                     <div key={event.id} className="p-3 bg-gray-700 dark:bg-white rounded-md hover:shadow-md transition">
//                       <a href={event.url} target="_blank" rel="noreferrer" className="font-semibold text-white dark:text-black hover:text-yellow-400 dark:hover:text-blue-600 block">
//                         {event.title?.length > 60 ? event.title.slice(0, 60) + "..." : event.title}
//                       </a>
//                       <p className="text-gray-300 dark:text-gray-600 mt-1 text-xs">
//                         {event.description?.length > 80 ? event.description.slice(0, 80) + "..." : event.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-right mt-3">
//                   <Link to="/events" className="text-yellow-400 dark:text-blue-600 font-medium hover:underline">View more →</Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Icons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black cursor-pointer">
//             <FaSearch /> Search
//           </button>
//           <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded bg-gray-700 dark:bg-gray-300 cursor-pointer text-yellow-400">
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>
//           <button className="p-2 rounded bg-gray-800 dark:bg-gray-200 cursor-pointer text-white dark:text-black">
//             <FaBell />
//           </button>
//           <button className="px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 cursor-pointer text-white dark:text-black">Login</button>
//         </div>

//         {/* Mobile Menu */}
//         <div className="flex items-center md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-white dark:text-black p-2 ml-4">
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-800 dark:bg-gray-200 transition-colors duration-300">
//           <Link to="/home" className="block text-white dark:text-black">Home</Link>
//           <Link to="/news" className="block text-white dark:text-black">News</Link>
//           <Link to="/markets" className="block text-white dark:text-black">Markets</Link>
//           <Link to="/prices" className="block text-white dark:text-black">Prices</Link>
//           <Link to="/analysis" className="block text-white dark:text-black">Analysis</Link>
//           <Link to="/events" className="block text-white dark:text-black">Events</Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 dark:bg-white text-white dark:text-black cursor-pointer">
//               <FaSearch /> Search
//             </button>
//             <button className="p-2 rounded bg-gray-700 dark:bg-white text-white dark:text-black"><FaBell /></button>
//             <button className="px-3 py-1 rounded bg-gray-700 dark:bg-white text-white dark:text-black cursor-pointer">Login</button>
//             <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded bg-gray-700 dark:bg-white text-yellow-400">
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaBars,
//   FaTimes,
//   FaSun,
//   FaMoon,
//   FaSearch,
//   FaBell,
// } from "react-icons/fa";

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);

//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setHovered(false);
//     }, 400);
//   };

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   // ✅ Fetch events from your backend
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("https://cryptonewsbackend.up.railway.app/api/events");
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 10) || []); // latest 10
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60s
//     return () => clearInterval(interval);
//   }, []);

//   // Dark / Light Mode toggle
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-700 dark:border-gray-300 bg-gray-900  text-white dark:bg-gray-200 transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold text-white dark:text-black">
//               CryptoNews
//             </h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-white dark:text-black text-sm relative">
//           <Link to="/home" className="hover:underline hover:scale-105">
//             Home
//           </Link>
//           <Link to="/news" className="hover:underline hover:scale-105">
//             News
//           </Link>
//           <Link to="/markets" className="hover:underline hover:scale-105">
//             Markets
//           </Link>
//           <Link to="/prices" className="hover:underline hover:scale-105">
//             Prices
//           </Link>
//           <Link to="/analysis" className="hover:underline hover:scale-105">
//             Analysis
//           </Link>

//           {/* Events with Hover Popup */}
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link to="/events" className="hover:underline hover:scale-105">
//               Events
//             </Link>

//             {hovered && events.length > 0 && (
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-800 dark:bg-gray-200 text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold text-white dark:text-black mb-3">
//                   Latest Events
//                 </h3>

//                 {/* Grid 2x2 */}
//                 <div className="grid grid-cols-2 gap-4">
//                   {events.slice(0, 4).map((event, idx) => (
//                     <div
//                       key={idx}
//                       className="p-3 bg-gray-700 dark:bg-white rounded-md hover:shadow-md transition"
//                     >
//                       <Link
//                         to="/events"
//                         className="font-semibold text-white dark:text-black hover:text-yellow-400 dark:hover:text-blue-600 block"
//                       >
//                         {event.title?.length > 60
//                           ? event.title.slice(0, 60) + "..."
//                           : event.title || "No Title"}
//                       </Link>
//                       <p className="text-gray-300 dark:text-gray-600 mt-1 text-xs">
//                         {event.description?.length > 80
//                           ? event.description.slice(0, 80) + "..."
//                           : event.description || "No description available"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* View More */}
//                 <div className="text-right mt-3">
//                   <Link
//                     to="/events"
//                     className="text-yellow-400 dark:text-blue-600 font-medium hover:underline"
//                   >
//                     View more →
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Side Icons (Desktop) */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-700 dark:bg-gray-300 cursor-pointer text-yellow-400"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           <button className="p-2 rounded bg-gray-800 dark:bg-gray-200 cursor-pointer text-white dark:text-black">
//             <FaBell />
//           </button>

//           <button className="px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 cursor-pointer text-white dark:text-black">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white dark:text-black p-2 ml-4"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-800 dark:bg-gray-200 transition-colors duration-300">
//           <Link to="/home" className="block text-white dark:text-black">
//             Home
//           </Link>
//           <Link to="/news" className="block text-white dark:text-black">
//             News
//           </Link>
//           <Link to="/markets" className="block text-white dark:text-black">
//             Markets
//           </Link>
//           <Link to="/prices" className="block text-white dark:text-black">
//             Prices
//           </Link>
//           <Link to="/analysis" className="block text-white dark:text-black">
//             Analysis
//           </Link>
//           <Link to="/events" className="block text-white dark:text-black">
//             Events
//           </Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 dark:bg-white text-white dark:text-black cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             <button className="p-2 rounded bg-gray-700 dark:bg-white text-white dark:text-black">
//               <FaBell />
//             </button>

//             <button className="px-3 py-1 rounded bg-gray-700 dark:bg-white text-white dark:text-black cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-700 dark:bg-white text-yellow-400"
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaSearch,
  FaBell,
} from "react-icons/fa";

const Navbar = ({ darkMode = true, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [hovered, setHovered] = useState(false);

  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(false), 400);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  // Fetch latest events
  const fetchEvents = async () => {
    try {
      const res = await fetch(
        "https://cryptonewsbackend.up.railway.app/api/events"
      );
      const data = await res.json();
      setEvents(data.events?.slice(0, 10) || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  // Apply dark mode by default
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-700 bg-gray-900 text-white transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <h1 className="text-xl font-bold text-white">CryptoNews</h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-white text-sm relative">
          <Link to="/home" className="hover:underline hover:scale-105">
            Home
          </Link>
          <Link to="/news" className="hover:underline hover:scale-105">
            News
          </Link>
          <Link to="/markets" className="hover:underline hover:scale-105">
            Markets
          </Link>
          <Link to="/prices" className="hover:underline hover:scale-105">
            Prices
          </Link>
          <Link to="/analysis" className="hover:underline hover:scale-105">
            Analysis
          </Link>

          {/* Events with Hover Popup */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/events" className="hover:underline hover:scale-105">
              Events
            </Link>

            {hovered && events.length > 0 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-800 text-sm rounded-lg shadow-lg p-4 z-50">
                <h3 className="font-semibold text-white mb-3">Latest Events</h3>
                <div className="grid grid-cols-2 gap-4">
                  {events.slice(0, 4).map((event, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-gray-700 rounded-md hover:shadow-md transition"
                    >
                      <Link
                        to="/events"
                        className="font-semibold text-white hover:text-yellow-400 block"
                      >
                        {event.title?.length > 60
                          ? event.title.slice(0, 60) + "..."
                          : event.title || "No Title"}
                      </Link>
                      <p className="text-gray-300 mt-1 text-xs">
                        {event.description?.length > 80
                          ? event.description.slice(0, 80) + "..."
                          : event.description || "No description available"}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-right mt-3">
                  <Link
                    to="/events"
                    className="text-yellow-400 font-medium hover:underline"
                  >
                    View more →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 text-white cursor-pointer">
            <FaSearch /> Search
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-gray-700 text-yellow-400 cursor-pointer"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button className="p-2 rounded bg-gray-800 text-white cursor-pointer">
            <FaBell />
          </button>

          <button className="px-3 py-1 rounded bg-gray-800 text-white cursor-pointer">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 ml-4"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden p-4 space-y-3 bg-gray-800 transition-colors duration-300">
          <Link to="/home" className="block text-white">
            Home
          </Link>
          <Link to="/news" className="block text-white">
            News
          </Link>
          <Link to="/markets" className="block text-white">
            Markets
          </Link>
          <Link to="/prices" className="block text-white">
            Prices
          </Link>
          <Link to="/analysis" className="block text-white">
            Analysis
          </Link>
          <Link to="/events" className="block text-white">
            Events
          </Link>

          <div className="flex flex-wrap gap-3 mt-2">
            <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 text-white cursor-pointer">
              <FaSearch /> Search
            </button>

            <button className="p-2 rounded bg-gray-700 text-white">
              <FaBell />
            </button>

            <button className="px-3 py-1 rounded bg-gray-700 text-white cursor-pointer">
              Login
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded bg-gray-700 text-yellow-400"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
