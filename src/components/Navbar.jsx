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
// import { useDarkMode } from "../context/ThemeContext";

// const Navbar = () => {
//   const { darkMode,setDarkMode } = useDarkMode();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);

//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setHovered(false), 400);
//   };

//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }, []);

//   // Fetch latest events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 10) || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60s
//     return () => clearInterval(interval);
//   }, []);

//   // Apply dark mode by default
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-700 bg-gray-900 text-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold text-white">CryptoNews</h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-white text-sm relative">
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
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-800 text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold text-white mb-3">Latest Events</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {events.slice(0, 4).map((event, idx) => (
//                     <div
//                       key={idx}
//                       className="p-3 bg-gray-700 rounded-md hover:shadow-md transition"
//                     >
//                       <Link
//                         to="/events"
//                         className="font-semibold text-white hover:text-yellow-400 block"
//                       >
//                         {event.title?.length > 60
//                           ? event.title.slice(0, 60) + "..."
//                           : event.title || "No Title"}
//                       </Link>
//                       <p className="text-gray-300 mt-1 text-xs">
//                         {event.description?.length > 80
//                           ? event.description.slice(0, 80) + "..."
//                           : event.description || "No description available"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-right mt-3">
//                   <Link
//                     to="/events"
//                     className="text-yellow-400 font-medium hover:underline"
//                   >
//                     View more →
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 text-white cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-700 text-yellow-400 cursor-pointer"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           <button className="p-2 rounded bg-gray-800 text-white cursor-pointer">
//             <FaBell />
//           </button>

//           <button className="px-3 py-1 rounded bg-gray-800 text-white cursor-pointer">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white p-2 ml-4"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-800 transition-colors duration-300">
//           <Link to="/home" className="block text-white">
//             Home
//           </Link>
//           <Link to="/news" className="block text-white">
//             News
//           </Link>
//           <Link to="/markets" className="block text-white">
//             Markets
//           </Link>
//           <Link to="/prices" className="block text-white">
//             Prices
//           </Link>
//           <Link to="/analysis" className="block text-white">
//             Analysis
//           </Link>
//           <Link to="/events" className="block text-white">
//             Events
//           </Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 text-white cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             <button className="p-2 rounded bg-gray-700 text-white">
//               <FaBell />
//             </button>

//             <button className="px-3 py-1 rounded bg-gray-700 text-white cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-700 text-yellow-400"
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


// dark mode with context

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
// import { useDarkMode } from "../context/ThemeContext";

// const Navbar = () => {
//   const { darkMode, setDarkMode } = useDarkMode();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);

//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setHovered(false), 400);
//   };

//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }, []);

//   // Fetch latest events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 10) || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60s
//     return () => clearInterval(interval);
//   }, []);

//   // Default dark mode (already handled by ThemeContext)
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-300 bg-white text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold">CryptoNews</h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-sm relative">
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
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-100 text-black dark:bg-gray-800 dark:text-white text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold mb-3">Latest Events</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {events.slice(0, 4).map((event, idx) => (
//                     <div
//                       key={idx}
//                       className="p-3 bg-gray-200 dark:bg-gray-700 rounded-md hover:shadow-md transition"
//                     >
//                       <Link
//                         to="/events"
//                         className="font-semibold hover:text-yellow-500 block"
//                       >
//                         {event.title?.length > 60
//                           ? event.title.slice(0, 60) + "..."
//                           : event.title || "No Title"}
//                       </Link>
//                       <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
//                         {event.description?.length > 80
//                           ? event.description.slice(0, 80) + "..."
//                           : event.description || "No description available"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-right mt-3">
//                   <Link
//                     to="/events"
//                     className="text-yellow-500 font-medium hover:underline"
//                   >
//                     View more →
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400 cursor-pointer"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           <button className="p-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             <FaBell />
//           </button>

//           <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="p-2 ml-4 text-black dark:text-white"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
//           <Link to="/home" className="block">
//             Home
//           </Link>
//           <Link to="/news" className="block">
//             News
//           </Link>
//           <Link to="/markets" className="block">
//             Markets
//           </Link>
//           <Link to="/prices" className="block">
//             Prices
//           </Link>
//           <Link to="/analysis" className="block">
//             Analysis
//           </Link>
//           <Link to="/events" className="block">
//             Events
//           </Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             <button className="p-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white">
//               <FaBell />
//             </button>

//             <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400"
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
// import { useDarkMode } from "../context/ThemeContext";

// const Navbar = () => {
//   const { darkMode, setDarkMode } = useDarkMode();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);
//   const [notifications, setNotifications] = useState(0); // 🔹 notification count

//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setHovered(false), 400);
//   };

//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }, []);

//   // 🔹 Fetch latest events and compare
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       const latestEvents = data.events?.slice(0, 10) || [];

//       // Compare with old events → set notification count
//       if (events.length > 0) {
//         const newOnes = latestEvents.filter(
//           (e) => !events.some((old) => old.id === e.id)
//         );
//         if (newOnes.length > 0) {
//           setNotifications((prev) => prev + newOnes.length);
//         }
//       }

//       setEvents(latestEvents);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60s
//     return () => clearInterval(interval);
//   }, []);

//   // Default dark mode (already handled by ThemeContext)
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-300 bg-white text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold">CryptoNews</h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-sm relative">
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
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-100 text-black dark:bg-gray-800 dark:text-white text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold mb-3">Latest Events</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {events.slice(0, 4).map((event, idx) => (
//                     <div
//                       key={idx}
//                       className="p-3 bg-gray-200 dark:bg-gray-700 rounded-md hover:shadow-md transition"
//                     >
//                       <Link
//                         to="/events"
//                         className="font-semibold hover:text-yellow-500 block"
//                       >
//                         {event.title?.length > 60
//                           ? event.title.slice(0, 60) + "..."
//                           : event.title || "No Title"}
//                       </Link>
//                       <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
//                         {event.description?.length > 80
//                           ? event.description.slice(0, 80) + "..."
//                           : event.description || "No description available"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-right mt-3">
//                   <Link
//                     to="/events"
//                     className="text-yellow-500 font-medium hover:underline"
//                   >
//                     View more →
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400 cursor-pointer"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           {/* 🔹 Bell Icon with Notification Badge */}
//           <div className="relative">
//             <button
//               onClick={() => setNotifications(0)} // reset notifications
//               className="p-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer"
//             >
//               <FaBell />
//             </button>
//             {notifications > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {notifications > 9 ? "9+" : notifications}
//               </span>
//             )}
//           </div>

//           <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="p-2 ml-4 text-black dark:text-white"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
//           <Link to="/home" className="block">
//             Home
//           </Link>
//           <Link to="/news" className="block">
//             News
//           </Link>
//           <Link to="/markets" className="block">
//             Markets
//           </Link>
//           <Link to="/prices" className="block">
//             Prices
//           </Link>
//           <Link to="/analysis" className="block">
//             Analysis
//           </Link>
//           <Link to="/events" className="block">
//             Events
//           </Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             {/* 🔹 Mobile Bell Icon with Badge */}
//             <div className="relative">
//               <button
//                 onClick={() => setNotifications(0)}
//                 className="p-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
//               >
//                 <FaBell />
//               </button>
//               {notifications > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {notifications > 9 ? "9+" : notifications}
//                 </span>
//               )}
//             </div>

//             <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400"
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
// import { useDarkMode } from "../context/ThemeContext";

// const Navbar = () => {
//   const { darkMode, setDarkMode } = useDarkMode();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);
//   const [unreadCount, setUnreadCount] = useState(0); // notifications count
//   const [initialLoaded, setInitialLoaded] = useState(false); // track first load

//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setHovered(false), 400);
//   };

//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }, []);

//   // Fetch latest events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       const latestEvents = data.events?.slice(0, 10) || [];

//       // First load → set unread count equal to latest events
//       if (!initialLoaded && latestEvents.length > 0) {
//         setUnreadCount(latestEvents.length);
//         setInitialLoaded(true);
//       } else {
//         // On subsequent fetches → increment only if new events come
//         if (latestEvents.length > events.length) {
//           setUnreadCount((prev) => prev + (latestEvents.length - events.length));
//         }
//       }

//       setEvents(latestEvents);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60s
//     return () => clearInterval(interval);
//   }, []);

//   // Default dark mode (already handled by ThemeContext)
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   // Clear notifications on bell click
//   const handleBellClick = () => {
//     setUnreadCount(0);
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-300 bg-white text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold">CryptoNews</h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-sm relative">
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
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-100 text-black dark:bg-gray-800 dark:text-white text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold mb-3">Latest Events</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {events.slice(0, 4).map((event, idx) => (
//                     <div
//                       key={idx}
//                       className="p-3 bg-gray-200 dark:bg-gray-700 rounded-md hover:shadow-md transition"
//                     >
//                       <Link
//                         to="/events"
//                         className="font-semibold hover:text-yellow-500 block"
//                       >
//                         {event.title?.length > 60
//                           ? event.title.slice(0, 60) + "..."
//                           : event.title || "No Title"}
//                       </Link>
//                       <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
//                         {event.description?.length > 80
//                           ? event.description.slice(0, 80) + "..."
//                           : event.description || "No description available"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-right mt-3">
//                   <Link
//                     to="/events"
//                     className="text-yellow-500 font-medium hover:underline"
//                   >
//                     View more →
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400 cursor-pointer"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           {/* Bell with Notification Badge */}
//           <button
//             onClick={handleBellClick}
//             className="relative p-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer"
//           >
//             <FaBell />
//             {unreadCount > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {unreadCount}
//               </span>
//             )}
//           </button>

//           <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="p-2 ml-4 text-black dark:text-white"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
//           <Link to="/home" className="block">
//             Home
//           </Link>
//           <Link to="/news" className="block">
//             News
//           </Link>
//           <Link to="/markets" className="block">
//             Markets
//           </Link>
//           <Link to="/prices" className="block">
//             Prices
//           </Link>
//           <Link to="/analysis" className="block">
//             Analysis
//           </Link>
//           <Link to="/events" className="block">
//             Events
//           </Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             {/* Mobile Bell with Notification Badge */}
//             <button
//               onClick={handleBellClick}
//               className="relative p-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
//             >
//               <FaBell />
//               {unreadCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {unreadCount}
//                 </span>
//               )}
//             </button>

//             <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400"
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
// import { useDarkMode } from "../context/ThemeContext";

// const Navbar = () => {
//   const { darkMode, setDarkMode } = useDarkMode();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);
//   const [unreadCount, setUnreadCount] = useState(0); // notifications count
//   const [initialLoaded, setInitialLoaded] = useState(false); // track first load
//   const [showPopup, setShowPopup] = useState(false); // bell popup

//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setHovered(false), 400);
//   };

//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }, []);

//   // Fetch latest events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       const latestEvents = data.events?.slice(0, 10) || [];

//       // First load → set unread count equal to latest events
//       if (!initialLoaded && latestEvents.length > 0) {
//         setUnreadCount(latestEvents.length);
//         setInitialLoaded(true);
//       } else {
//         // On subsequent fetches → increment only if new events come
//         const newOnes = latestEvents.filter(
//           (e) => !events.some((old) => old.id === e.id)
//         );
//         if (newOnes.length > 0) {
//           setUnreadCount((prev) => prev + newOnes.length);
//         }
//       }

//       setEvents(latestEvents);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60s
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   // Clear notifications on bell click
//   const handleBellClick = () => {
//     setUnreadCount(0);
//     setShowPopup(!showPopup);
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-300 bg-white text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold">CryptoNews</h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-sm relative">
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

//           {/* Events Hover Popup */}
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link to="/events" className="hover:underline hover:scale-105">
//               Events
//             </Link>

//             {hovered && events.length > 0 && (
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-100 text-black dark:bg-gray-800 dark:text-white text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold mb-3">Latest Events</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {events.slice(0, 4).map((event, idx) => (
//                     <div
//                       key={idx}
//                       className="p-3 bg-gray-200 dark:bg-gray-700 rounded-md hover:shadow-md transition"
//                     >
//                       <Link
//                         to="/events"
//                         className="font-semibold hover:text-yellow-500 block"
//                       >
//                         {event.title?.length > 60
//                           ? event.title.slice(0, 60) + "..."
//                           : event.title || "No Title"}
//                       </Link>
//                       <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
//                         {event.description?.length > 80
//                           ? event.description.slice(0, 80) + "..."
//                           : event.description || "No description available"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-right mt-3">
//                   <Link
//                     to="/events"
//                     className="text-yellow-500 font-medium hover:underline"
//                   >
//                     View more →
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400 cursor-pointer"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           {/* Bell with notification */}
//           <button
//             onClick={handleBellClick}
//             className="relative p-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer"
//           >
//             <FaBell />
//             {unreadCount > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {unreadCount > 9 ? "9+" : unreadCount}
//               </span>
//             )}
//           </button>

//           <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="p-2 ml-4 text-black dark:text-white"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
//           <Link to="/home" className="block">
//             Home
//           </Link>
//           <Link to="/news" className="block">
//             News
//           </Link>
//           <Link to="/markets" className="block">
//             Markets
//           </Link>
//           <Link to="/prices" className="block">
//             Prices
//           </Link>
//           <Link to="/analysis" className="block">
//             Analysis
//           </Link>
//           <Link to="/events" className="block">
//             Events
//           </Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             {/* Mobile Bell */}
//             <button
//               onClick={handleBellClick}
//               className="relative p-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
//             >
//               <FaBell />
//               {unreadCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {unreadCount}
//                 </span>
//               )}
//             </button>

//             <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400"
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* 🔹 Bell Popup for notifications */}
//       {showPopup && (
//         <div className="absolute right-4 top-16 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 z-50">
//           <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//               Latest Events
//             </h3>
//             <button
//               onClick={() => setShowPopup(false)}
//               className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//             >
//               ✖
//             </button>
//           </div>
//           <div className="max-h-60 overflow-y-auto">
//             {events.length > 0 ? (
//               events.map((event) => (
//                 <div
//                   key={event.id}
//                   className="px-4 py-2 border-b border-gray-200 dark:border-gray-700"
//                 >
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {new Date(event.date).toLocaleString()}
//                   </p>
//                   <p className="text-md font-medium text-gray-900 dark:text-white">
//                     {event.headline}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p className="p-4 text-gray-500 dark:text-gray-400 text-center">
//                 No events available
//               </p>
//             )}
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
import { useDarkMode } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [initialLoaded, setInitialLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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
      const latestEvents = data.events?.slice(0, 10) || [];

      if (!initialLoaded && latestEvents.length > 0) {
        setUnreadCount(latestEvents.length);
        setInitialLoaded(true);
      } else {
        const newEvents = latestEvents.filter(
          (e) => !events.some((old) => old.id === e.id)
        );
        if (newEvents.length > 0) {
          setUnreadCount((prev) => prev + newEvents.length);
        }
      }

      // Map event fields for consistent usage
      const mappedEvents = latestEvents.map((e) => ({
        id: e.id,
        title: e.title || "No Title",
        description: e.description || "No description available",
        date: e.date_event || e.date || new Date().toISOString(),
      }));

      setEvents(mappedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const handleBellClick = () => {
    setUnreadCount(0);
    setShowPopup(!showPopup);
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-300 bg-white text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <h1 className="text-xl font-bold">CryptoNews</h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm relative">
          <Link to="/home" className="hover:underline hover:scale-105">Home</Link>
          <Link to="/news" className="hover:underline hover:scale-105">News</Link>
          <Link to="/markets" className="hover:underline hover:scale-105">Markets</Link>
          <Link to="/prices" className="hover:underline hover:scale-105">Prices</Link>
          <Link to="/analysis" className="hover:underline hover:scale-105">Analysis</Link>

          {/* Events Hover Popup */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/events" className="hover:underline hover:scale-105">Events</Link>

            {hovered && events.length > 0 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-100 text-black dark:bg-gray-800 dark:text-white text-sm rounded-lg shadow-lg p-4 z-50">
                <h3 className="font-semibold mb-3">Latest Events</h3>
                <div className="grid grid-cols-2 gap-4">
                  {events.slice(0, 4).map((event) => (
                    <div
                      key={event.id}
                      className="p-3 bg-gray-200 dark:bg-gray-700 rounded-md hover:shadow-md transition"
                    >
                      <Link
                        to="/events"
                        className="font-semibold hover:text-yellow-500 block"
                      >
                        {event.title.length > 60
                          ? event.title.slice(0, 60) + "..."
                          : event.title}
                      </Link>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                        {event.description.length > 80
                          ? event.description.slice(0, 80) + "..."
                          : event.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-right mt-3">
                  <Link
                    to="/events"
                    className="text-yellow-500 font-medium hover:underline"
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
          <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
            <FaSearch /> Search
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400 cursor-pointer"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Bell with notification */}
          <button
            onClick={handleBellClick}
            className="relative p-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer"
          >
            <FaBell />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>

          <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 ml-4 text-black dark:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden p-4 space-y-3 bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition-colors duration-300">
          <Link to="/home" className="block">Home</Link>
          <Link to="/news" className="block">News</Link>
          <Link to="/markets" className="block">Markets</Link>
          <Link to="/prices" className="block">Prices</Link>
          <Link to="/analysis" className="block">Analysis</Link>
          <Link to="/events" className="block">Events</Link>

          <div className="flex flex-wrap gap-3 mt-2">
            <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white cursor-pointer">
              <FaSearch /> Search
            </button>

            <button
              onClick={handleBellClick}
              className="relative p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            >
              <FaBell />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </button>

            <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white cursor-pointer">
              Login
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      )}

      {/* Bell Popup */}
      {showPopup && (
        <div className="absolute right-4 top-16 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 z-50">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Events</h3>
            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              ✖
            </button>
          </div>
          <div className="max-h-60 overflow-y-auto scrollbar-hide">
            {events.length > 0 ? (
              events.map((event) => (
                <div
                  key={event.id}
                  className="px-4 py-2 border-b border-gray-200 dark:border-gray-700"
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(event.date).toLocaleString()}
                  </p>
                  <p className="text-md font-medium text-gray-900 dark:text-white">
                    {event.title}
                  </p>
                </div>
              ))
            ) : (
              <p className="p-4 text-gray-500 dark:text-gray-400 text-center">No events available</p>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes, FaSun, FaMoon, FaSearch, FaBell } from "react-icons/fa";
// import { useDarkMode } from "../context/ThemeContext";

// const Navbar = () => {
//   const { darkMode, setDarkMode } = useDarkMode();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);
//   const [unreadCount, setUnreadCount] = useState(0); // notifications count
//   const [initialLoaded, setInitialLoaded] = useState(false); // track first load
//   const [showPopup, setShowPopup] = useState(false); // bell popup

//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setHovered(false), 400);
//   };

//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }, []);

//   // Fetch latest events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       const latestEvents = data.events?.slice(0, 10) || [];

//       if (!initialLoaded && latestEvents.length > 0) {
//         setUnreadCount(latestEvents.length);
//         setInitialLoaded(true);
//       } else {
//         const newOnes = latestEvents.filter(
//           (e) => !events.some((old) => old.id === e.id)
//         );
//         if (newOnes.length > 0) {
//           setUnreadCount((prev) => prev + newOnes.length);
//         }
//       }

//       setEvents(latestEvents);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   // Clear notifications on bell click
//   const handleBellClick = () => {
//     setUnreadCount(0);
//     setShowPopup(!showPopup);
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-300 bg-white text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold">CryptoNews</h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-sm relative">
//           <Link to="/home" className="hover:underline hover:scale-105">Home</Link>
//           <Link to="/news" className="hover:underline hover:scale-105">News</Link>
//           <Link to="/markets" className="hover:underline hover:scale-105">Markets</Link>
//           <Link to="/prices" className="hover:underline hover:scale-105">Prices</Link>
//           <Link to="/analysis" className="hover:underline hover:scale-105">Analysis</Link>

//           {/* Events Hover Popup */}
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link to="/events" className="hover:underline hover:scale-105">Events</Link>

//             {hovered && events.length > 0 && (
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-100 text-black dark:bg-gray-800 dark:text-white text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold mb-3">Latest Events</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {events.slice(0, 4).map((event, idx) => (
//                     <div
//                       key={idx}
//                       className="p-3 bg-gray-200 dark:bg-gray-700 rounded-md hover:shadow-md transition"
//                     >
//                       <Link
//                         to="/events"
//                         className="font-semibold hover:text-yellow-500 block"
//                       >
//                         {event.title?.length > 60
//                           ? event.title.slice(0, 60) + "..."
//                           : event.title || "No Title"}
//                       </Link>
//                       <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
//                         {event.description?.length > 80
//                           ? event.description.slice(0, 80) + "..."
//                           : event.description || "No description available"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-right mt-3">
//                   <Link
//                     to="/events"
//                     className="text-yellow-500 font-medium hover:underline"
//                   >
//                     View more →
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400 cursor-pointer"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           {/* Bell with notification */}
//           <div className="relative">
//             <button
//               onClick={handleBellClick}
//               className="p-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer"
//             >
//               <FaBell />
//               {unreadCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {unreadCount > 9 ? "9+" : unreadCount}
//                 </span>
//               )}
//             </button>

//             {/* Bell Popup */}
//             {showPopup && (
//               <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 z-50">
//                 <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Events</h3>
//                   <button
//                     onClick={() => setShowPopup(false)}
//                     className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//                   >
//                     ✖
//                   </button>
//                 </div>
//                 <div className="max-h-60 overflow-y-auto">
//                   {events.length > 0 ? events.map(event => (
//                     <div key={event.id} className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
//                       <p className="text-sm text-gray-600 dark:text-gray-400">
//                         {event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}
//                       </p>
//                       <p className="text-md font-medium text-gray-900 dark:text-white">
//                         {event.title || "No Title"}
//                       </p>
//                     </div>
//                   )) : (
//                     <p className="p-4 text-gray-500 dark:text-gray-400 text-center">
//                       No events available
//                     </p>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="p-2 ml-4 text-black dark:text-white"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
//           <Link to="/home" className="block">Home</Link>
//           <Link to="/news" className="block">News</Link>
//           <Link to="/markets" className="block">Markets</Link>
//           <Link to="/prices" className="block">Prices</Link>
//           <Link to="/analysis" className="block">Analysis</Link>
//           <Link to="/events" className="block">Events</Link>

//           <div className="flex flex-wrap gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             {/* Mobile Bell */}
//             <button
//               onClick={handleBellClick}
//               className="relative p-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer"
//             >
//               <FaBell />
//               {unreadCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {unreadCount > 9 ? "9+" : unreadCount}
//                 </span>
//               )}
//             </button>

//             <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400"
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
// import { useDarkMode } from "../context/ThemeContext";

// const Navbar = () => {
//   const { darkMode, setDarkMode } = useDarkMode();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const [initialLoaded, setInitialLoaded] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setHovered(false), 400);
//   };

//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("https://cryptonewsbackend.up.railway.app/api/events");
//       const data = await res.json();
//       const latestEvents = data.events?.slice(0, 10) || [];

//       if (!initialLoaded && latestEvents.length > 0) {
//         setUnreadCount(latestEvents.length);
//         setInitialLoaded(true);
//       } else {
//         const newOnes = latestEvents.filter((e) => !events.some((old) => old.id === e.id));
//         if (newOnes.length > 0) {
//           setUnreadCount((prev) => prev + newOnes.length);
//         }
//       }

//       setEvents(latestEvents);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   const handleBellClick = () => {
//     setUnreadCount(0);
//     setShowPopup(!showPopup);
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-300 bg-white text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold">CryptoNews</h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-sm relative">
//           <Link to="/home" className="hover:underline hover:scale-105">Home</Link>
//           <Link to="/news" className="hover:underline hover:scale-105">News</Link>
//           <Link to="/markets" className="hover:underline hover:scale-105">Markets</Link>
//           <Link to="/prices" className="hover:underline hover:scale-105">Prices</Link>
//           <Link to="/analysis" className="hover:underline hover:scale-105">Analysis</Link>

//           {/* Events Hover Popup */}
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link to="/events" className="hover:underline hover:scale-105">Events</Link>

//             {hovered && events.length > 0 && (
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-100 text-black dark:bg-gray-800 dark:text-white text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold mb-3">Latest Events</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {events.slice(0, 4).map((event, idx) => (
//                     <div
//                       key={idx}
//                       className="p-3 bg-gray-200 dark:bg-gray-700 rounded-md hover:shadow-md transition"
//                     >
//                       <Link
//                         to="/events"
//                         className="font-semibold hover:text-yellow-500 block"
//                       >
//                         {event.title?.length > 60
//                           ? event.title.slice(0, 60) + "..."
//                           : event.title || "No Title"}
//                       </Link>
//                       <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
//                         {event.description?.length > 80
//                           ? event.description.slice(0, 80) + "..."
//                           : event.description || "No description available"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-right mt-3">
//                   <Link
//                     to="/events"
//                     className="text-yellow-500 font-medium hover:underline"
//                   >
//                     View more →
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             <FaSearch /> Search
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400 cursor-pointer"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           {/* Desktop Bell */}
//           <div className="relative">
//             <button
//               onClick={handleBellClick}
//               className="p-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer"
//             >
//               <FaBell />
//               {unreadCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {unreadCount > 9 ? "9+" : unreadCount}
//                 </span>
//               )}
//             </button>

//             {showPopup && (
//               <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 z-50">
//                 <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Events</h3>
//                   <button
//                     onClick={() => setShowPopup(false)}
//                     className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//                   >
//                     ✖
//                   </button>
//                 </div>
//                 <div className="max-h-60 overflow-y-auto">
//                   {events.length > 0 ? events.map(event => (
//                     <div key={event.id} className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
//                       <p className="text-sm text-gray-600 dark:text-gray-400">
//                         {event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}
//                       </p>
//                       <p className="text-md font-medium text-gray-900 dark:text-white">
//                         {event.title || "No Title"}
//                       </p>
//                     </div>
//                   )) : (
//                     <p className="p-4 text-gray-500 dark:text-gray-400 text-center">
//                       No events available
//                     </p>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="p-2 ml-4 text-black dark:text-white"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 space-y-3 bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
//           <Link to="/home" className="block">Home</Link>
//           <Link to="/news" className="block">News</Link>
//           <Link to="/markets" className="block">Markets</Link>
//           <Link to="/prices" className="block">Prices</Link>
//           <Link to="/analysis" className="block">Analysis</Link>
//           <Link to="/events" className="block">Events</Link>

//           <div className="flex flex-col gap-3 mt-2">
//             <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             {/* Mobile Bell */}
//             <div className="relative w-full">
//               <button
//                 onClick={handleBellClick}
//                 className="relative p-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white w-full flex justify-between items-center"
//               >
//                 <span className="flex items-center gap-2">
//                   <FaBell /> Notifications
//                 </span>
//                 {unreadCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     {unreadCount > 9 ? "9+" : unreadCount}
//                   </span>
//                 )}
//               </button>

//               {/* Mobile Bell Popup */}
//               {showPopup && (
//                 <div className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 z-50">
//                   <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Events</h3>
//                     <button
//                       onClick={() => setShowPopup(false)}
//                       className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//                     >
//                       ✖
//                     </button>
//                   </div>
//                   <div className="max-h-60 overflow-y-auto">
//                     {events.length > 0 ? events.map(event => (
//                       <div key={event.id} className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
//                         <p className="text-sm text-gray-600 dark:text-gray-400">
//                           {event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}
//                         </p>
//                         <p className="text-md font-medium text-gray-900 dark:text-white">
//                           {event.title || "No Title"}
//                         </p>
//                       </div>
//                     )) : (
//                       <p className="p-4 text-gray-500 dark:text-gray-400 text-center">
//                         No events available
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white cursor-pointer">
//               Login
//             </button>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400"
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
// import { useDarkMode } from "../context/ThemeContext";

// const Navbar = () => {
//   const { darkMode, setDarkMode } = useDarkMode();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [hovered, setHovered] = useState(false);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const [initialLoaded, setInitialLoaded] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setHovered(false), 400);
//   };

//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("https://cryptonewsbackend.up.railway.app/api/events");
//       const data = await res.json();
//       const latestEvents = data.events?.slice(0, 10) || [];

//       if (!initialLoaded && latestEvents.length > 0) {
//         setUnreadCount(latestEvents.length);
//         setInitialLoaded(true);
//       } else {
//         const newOnes = latestEvents.filter((e) => !events.some((old) => old.id === e.id));
//         if (newOnes.length > 0) {
//           setUnreadCount((prev) => prev + newOnes.length);
//         }
//       }

//       setEvents(latestEvents);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   const handleBellClick = () => {
//     setUnreadCount(0);
//     setShowPopup(!showPopup);
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 border-b border-gray-300 bg-white text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white transition-colors duration-300">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/">
//             <h1 className="text-xl font-bold">CryptoNews</h1>
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-sm relative">
//           <Link to="/home" className="hover:underline hover:scale-105">Home</Link>
//           <Link to="/news" className="hover:underline hover:scale-105">News</Link>
//           <Link to="/markets" className="hover:underline hover:scale-105">Markets</Link>
//           <Link to="/prices" className="hover:underline hover:scale-105">Prices</Link>
//           <Link to="/analysis" className="hover:underline hover:scale-105">Analysis</Link>

//           {/* Events Hover Popup */}
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link to="/events" className="hover:underline hover:scale-105">Events</Link>

//             {hovered && events.length > 0 && (
//               <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[32rem] bg-gray-100 text-black dark:bg-gray-800 dark:text-white text-sm rounded-lg shadow-lg p-4 z-50">
//                 <h3 className="font-semibold mb-3">Latest Events</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {events.slice(0, 4).map((event, idx) => (
//                     <div
//                       key={idx}
//                       className="p-3 bg-gray-200 dark:bg-gray-700 rounded-md hover:shadow-md transition"
//                     >
//                       <Link
//                         to="/events"
//                         className="font-semibold hover:text-yellow-500 block"
//                       >
//                         {event.title?.length > 60
//                           ? event.title.slice(0, 60) + "..."
//                           : event.title || "No Title"}
//                       </Link>
//                       <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
//                         {event.description?.length > 80
//                           ? event.description.slice(0, 80) + "..."
//                           : event.description || "No description available"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-right mt-3">
//                   <Link
//                     to="/events"
//                     className="text-yellow-500 font-medium hover:underline"
//                   >
//                     View more →
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Desktop Right Icons */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             <FaSearch /> Search
//           </button>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400 cursor-pointer"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           <div className="relative">
//             <button
//               onClick={handleBellClick}
//               className="p-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer"
//             >
//               <FaBell />
//               {unreadCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {unreadCount > 9 ? "9+" : unreadCount}
//                 </span>
//               )}
//             </button>

//             {showPopup && (
//               <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 z-50">
//                 <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Events</h3>
//                   <button
//                     onClick={() => setShowPopup(false)}
//                     className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//                   >
//                     ✖
//                   </button>
//                 </div>
//                 <div className="max-h-60 overflow-y-auto">
//                   {events.length > 0 ? events.map(event => (
//                     <div key={event.id} className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
//                       <p className="text-sm text-gray-600 dark:text-gray-400">
//                         {event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}
//                       </p>
//                       <p className="text-md font-medium text-gray-900 dark:text-white">
//                         {event.title || "No Title"}
//                       </p>
//                     </div>
//                   )) : (
//                     <p className="p-4 text-gray-500 dark:text-gray-400 text-center">
//                       No events available
//                     </p>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           <button className="px-3 py-1 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white cursor-pointer">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="p-2 ml-4 text-black dark:text-white"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden p-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition-colors duration-300">
//           <div className="flex flex-col gap-2">
//             <Link to="/home" className="block">Home</Link>
//             <Link to="/news" className="block">News</Link>
//             <Link to="/markets" className="block">Markets</Link>
//             <Link to="/prices" className="block">Prices</Link>
//             <Link to="/analysis" className="block">Analysis</Link>
//             <Link to="/events" className="block">Events</Link>
//           </div>

//           {/* Horizontal Mobile Buttons */}
//           <div className="flex items-center justify-between mt-4 gap-2">
//             <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white cursor-pointer">
//               <FaSearch /> Search
//             </button>

//             <div className="relative flex-1">
//               <button
//                 onClick={handleBellClick}
//                 className="flex-1 flex items-center justify-center gap-1 p-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
//               >
//                 <FaBell /> {unreadCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     {unreadCount > 9 ? "9+" : unreadCount}
//                   </span>
//                 )}
//               </button>

//               {showPopup && (
//                 <div className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 z-50">
//                   <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Events</h3>
//                     <button
//                       onClick={() => setShowPopup(false)}
//                       className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//                     >
//                       ✖
//                     </button>
//                   </div>
//                   <div className="max-h-60 overflow-y-auto">
//                     {events.length > 0 ? events.map(event => (
//                       <div key={event.id} className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
//                         <p className="text-sm text-gray-600 dark:text-gray-400">
//                           {event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}
//                         </p>
//                         <p className="text-md font-medium text-gray-900 dark:text-white">
//                           {event.title || "No Title"}
//                         </p>
//                       </div>
//                     )) : (
//                       <p className="p-4 text-gray-500 dark:text-gray-400 text-center">
//                         No events available
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="flex-1 flex items-center justify-center gap-1 p-2 rounded bg-gray-300 text-yellow-500 dark:bg-gray-700 dark:text-yellow-400"
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>

//             <button className="flex-1 flex items-center justify-center px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white">
//               Login
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
