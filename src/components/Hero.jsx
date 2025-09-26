// import React from 'react'

// const Hero = () => {
//   return (
//     <>
//        <section className="max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
//       <div>
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Dubai positions itself as a crypto hub
//         </h2>
//         <p className="text-gray-300 mt-2">
//           The Emirate is attracting crypto firms and investment
//         </p>
//         <button className="mt-4 bg-gray-100 text-black px-4 py-2 rounded">
//           READ MORE
//         </button>
//       </div>
//       <div className='flex justify-center md:justify-end'>
//         <img
//           src="/images/downtown-dubai.jpeg"
//           alt="Dubai"
//           className="w-full h-auto rounded-xl shadow-lg"
//         />
//       </div>
//     </section>
//     </>
//   )
// }

// export default Hero




// import React, { useState, useEffect } from "react";

// const Hero = () => {
//   const slides = [
//     {
//       image: "/images/downtown-dubai.jpeg",
//       title: "Dubai positions itself as a crypto hub",
//       description: "The Emirate is attracting crypto firms and investment",
//       button: "READ MORE",
//     },
//     {
//       image: "/images/bitcoin1.jpeg",
//       title: "Bitcoin adoption is growing worldwide",
//       description: "More businesses are starting to accept Bitcoin payments",
//       button: "READ MORE",
//     },
//     {
//       image: "/images/bitcoin2.jpeg",
//       title: "Ethereum leads smart contract innovation",
//       description: "Developers are building the future of Web3 on Ethereum",
//       button: "READ MORE",
//     },
//     {
//       image: "/images/bitcoin1.jpeg",
//       title: "Crypto market gains momentum",
//       description: "Investors are optimistic about the future of digital assets",
//       button: "READ MORE",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <>
//       <section className="max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
//         {/* Left Content */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold">
//             {slides[currentIndex].title}
//           </h2>
//           <p className="text-gray-300 mt-2">
//             {slides[currentIndex].description}
//           </p>
//           <button className="mt-4 bg-gray-100 text-black px-4 py-2 rounded">
//             {slides[currentIndex].button}
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center md:justify-end">
//           <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
//             <img
//               src={slides[currentIndex].image}
//               alt="Slide"
//               className="w-full h-full object-cover transition-all duration-700"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Dots Navigation Centered */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-gray-800" : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Hero;


// import React, { useState, useEffect } from "react";

// const Hero = () => {
//   const [slides, setSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Fetch top news from CryptoCompare API
//   const fetchTrendingNews = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();

//       if (data && data.Data) {
//         const now = Math.floor(Date.now() / 1000); // current time in seconds
//         // Filter news from last 1 hour (3600 seconds)
//         const recentNews = data.Data.filter(
//           (news) => now - news.published_on <= 3600
//         );

//         // Sort by latest first
//         const sorted = recentNews.sort((a, b) => b.published_on - a.published_on);

//         // Take top 5 slides
//         setSlides(sorted.slice(0, 5));
//       }
//     } catch (err) {
//       console.error("Error fetching trending news:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingNews();
//     const interval = setInterval(fetchTrendingNews, 120000); // refresh every 2 min
//     return () => clearInterval(interval);
//   }, []);

//   // Auto slide every 2 seconds
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         slides.length ? (prevIndex === slides.length - 1 ? 0 : prevIndex + 1) : 0
//       );
//     }, 2000);

//     return () => clearInterval(slideInterval);
//   }, [slides]);

//   if (slides.length === 0) {
//     return (
//       <section className="max-w-9xl mx-auto px-4 py-8">
//         <p className="text-gray-400 text-center">Loading trending news...</p>
//       </section>
//     );
//   }

//   return (
//     <>
//       <section className="max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
//         {/* Left Content */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold">
//             {slides[currentIndex].title}
//           </h2>
//           <p className="text-gray-300 mt-2">
//             {slides[currentIndex].body.slice(0, 120)}...
//           </p>
//           <a
//             href={slides[currentIndex].url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-4 inline-block bg-gray-100 text-black px-4 py-2 rounded"
//           >
//             READ MORE
//           </a>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center md:justify-end">
//           <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
//             <img
//               src={slides[currentIndex].imageurl || "/images/default-news.jpeg"}
//               alt="Slide"
//               className="w-full h-full object-cover transition-all duration-700"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Dots Navigation Centered */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-gray-800" : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Hero;




// import React, { useState, useEffect } from "react";
// import { useDarkMode } from "../context/ThemeContext"; // Import context

// const Hero = () => {
//   const { darkMode } = useDarkMode(); // Get darkMode state
//   const [slides, setSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Fetch top news
//   const fetchTrendingNews = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();

//       if (data && data.Data) {
//         const now = Math.floor(Date.now() / 1000);
//         const recentNews = data.Data.filter(
//           (news) => now - news.published_on <= 3600
//         );
//         const sorted = recentNews.sort((a, b) => b.published_on - a.published_on);
//         setSlides(sorted.slice(0, 5));
//       }
//     } catch (err) {
//       console.error("Error fetching trending news:", err);
//     }
//   };
//   useEffect(() => {
//     fetchTrendingNews();
//     const interval = setInterval(fetchTrendingNews, 120000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         slides.length ? (prevIndex === slides.length - 1 ? 0 : prevIndex + 1) : 0
//       );
//     }, 2000);

//     return () => clearInterval(slideInterval);
//   }, [slides]);

//   if (slides.length === 0) {
//     return (
//       <section className="max-w-9xl mx-auto px-4 py-8">
//         <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-center`}>
//           Loading trending news...
//         </p>
//       </section>
//     );
//   }

//   return (
//     <>
//       <section className="max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
//         {/* Left Content */}
//         <div>
//           <h2
//             className={`text-3xl md:text-4xl font-bold ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             {slides[currentIndex].title}
//           </h2>
//           <p
//             className={`mt-2 ${
//               darkMode ? "text-gray-300" : "text-gray-700"
//             }`}
//           >
//             {slides[currentIndex].body.slice(0, 120)}...
//           </p>
//           <a
//             href={slides[currentIndex].url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`mt-4 inline-block px-4 py-2 rounded font-medium transition ${
//               darkMode
//                 ? "bg-gray-100 text-black hover:bg-gray-200"
//                 : "bg-gray-900 text-white hover:bg-gray-800"
//             }`}
//           >
//             READ MORE
//           </a>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center md:justify-end">
//           <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
//             <img
//               src={slides[currentIndex].imageurl || "/images/default-news.jpeg"}
//               alt="Slide"
//               className="w-full h-full object-cover transition-all duration-700"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition ${
//               index === currentIndex
//                 ? darkMode
//                   ? "bg-gray-100"
//                   : "bg-gray-900"
//                 : darkMode
//                 ? "bg-gray-500"
//                 : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Hero;


// Animated version with swipe animation using Framer Motion

// import React, { useState, useEffect } from "react";
// import { useDarkMode } from "../context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

// const Hero = () => {
//   const { darkMode } = useDarkMode();
//   const [slides, setSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Fetch top news
//   const fetchTrendingNews = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();

//       if (data && data.Data) {
//         const now = Math.floor(Date.now() / 1000);
//         const recentNews = data.Data.filter(
//           (news) => now - news.published_on <= 3600
//         );
//         const sorted = recentNews.sort((a, b) => b.published_on - a.published_on);
//         setSlides(sorted.slice(0, 5));
//       }
//     } catch (err) {
//       console.error("Error fetching trending news:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingNews();
//     const interval = setInterval(fetchTrendingNews, 120000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       paginate(1);
//     }, 5000);
//     return () => clearInterval(slideInterval);
//   }, [slides]);

//   const paginate = (newDirection) => {
//     if (!slides.length) return;
//     setDirection(newDirection);
//     setCurrentIndex((prev) =>
//       (prev + newDirection + slides.length) % slides.length
//     );
//   };

//   if (slides.length === 0) {
//     return (
//       <section className="max-w-9xl mx-auto px-4 py-8">
//         <p
//           className={`${
//             darkMode ? "text-gray-400" : "text-gray-600"
//           } text-center`}
//         >
//           Loading trending news...
//         </p>
//       </section>
//     );
//   }

//   // Variants for sweet slide
//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.3 },
//       },
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 300 : -300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <>
//       <section className="max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
//         {/* Left Content */}
//         <div>
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={slides[currentIndex].id}
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               dragElastic={1}
//               onDragEnd={(e, { offset, velocity }) => {
//                 const swipe = swipePower(offset.x, velocity.x);

//                 if (swipe < -swipeConfidenceThreshold) {
//                   paginate(1);
//                 } else if (swipe > swipeConfidenceThreshold) {
//                   paginate(-1);
//                 }
//               }}
//             >
//               <h2
//                 className={`text-3xl md:text-4xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 {slides[currentIndex].title}
//               </h2>
//               <p
//                 className={`mt-2 ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 {slides[currentIndex].body.slice(0, 120)}...
//               </p>
//               <a
//                 href={slides[currentIndex].url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`mt-4 inline-block px-4 py-2 rounded font-medium transition ${
//                   darkMode
//                     ? "bg-gray-100 text-black hover:bg-gray-200"
//                     : "bg-gray-900 text-white hover:bg-gray-800"
//                 }`}
//               >
//                 READ MORE
//               </a>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center md:justify-end">
//           <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.img
//                 key={slides[currentIndex].imageurl}
//                 src={
//                   slides[currentIndex].imageurl || "/images/default-news.jpeg"
//                 }
//                 alt="Slide"
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.6 }}
//                 drag="x"
//                 dragConstraints={{ left: 0, right: 0 }}
//                 dragElastic={1}
//                 onDragEnd={(e, { offset, velocity }) => {
//                   const swipe = swipePower(offset.x, velocity.x);

//                   if (swipe < -swipeConfidenceThreshold) {
//                     paginate(1);
//                   } else if (swipe > swipeConfidenceThreshold) {
//                     paginate(-1);
//                   }
//                 }}
//                 className="w-full h-full object-cover"
//               />
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1);
//               setCurrentIndex(index);
//             }}
//             className={`w-3 h-3 rounded-full transition ${
//               index === currentIndex
//                 ? darkMode
//                   ? "bg-gray-100"
//                   : "bg-gray-900"
//                 : darkMode
//                 ? "bg-gray-500"
//                 : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Hero;


// Final Version with swipe animation and auto slide
// import React, { useState, useEffect } from "react";
// import { useDarkMode } from "../context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";

// const Hero = () => {
//   const { darkMode } = useDarkMode();
//   const [slides, setSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1); // for swipe direction

//   // Fetch top news
//   const fetchTrendingNews = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();

//       if (data && data.Data) {
//         const now = Math.floor(Date.now() / 1000);
//         const recentNews = data.Data.filter(
//           (news) => now - news.published_on <= 3600
//         );
//         const sorted = recentNews.sort((a, b) => b.published_on - a.published_on);
//         setSlides(sorted.slice(0, 5));
//       }
//     } catch (err) {
//       console.error("Error fetching trending news:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingNews();
//     const interval = setInterval(fetchTrendingNews, 120000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto slide with swipe animation
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prevIndex) =>
//         slides.length ? (prevIndex === slides.length - 1 ? 0 : prevIndex + 1) : 0
//       );
//     }, 4000);

//     return () => clearInterval(slideInterval);
//   }, [slides]);

//   if (slides.length === 0) {
//     return (
//       <section className="max-w-9xl mx-auto px-4 py-8">
//         <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-center`}>
//           Loading trending news...
//         </p>
//       </section>
//     );
//   }

//   // Variants for swipe effect
//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <>
//       <section className="max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
//         {/* Left Content */}
//         <div>
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={slides[currentIndex].id}
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.6 }}
//             >
//               <h2
//                 className={`text-3xl md:text-4xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 {slides[currentIndex].title}
//               </h2>
//               <p
//                 className={`mt-2 ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 {slides[currentIndex].body.slice(0, 120)}...
//               </p>
//               <a
//                 href={slides[currentIndex].url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`mt-4 inline-block px-4 py-2 rounded font-medium transition ${
//                   darkMode
//                     ? "bg-gray-100 text-black hover:bg-gray-200"
//                     : "bg-gray-900 text-white hover:bg-gray-800"
//                 }`}
//               >
//                 READ MORE
//               </a>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center md:justify-end">
//           <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.img
//                 key={slides[currentIndex].imageurl}
//                 src={slides[currentIndex].imageurl || "/images/default-news.jpeg"}
//                 alt="Slide"
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.6 }}
//                 className="w-full h-full object-cover"
//               />
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1);
//               setCurrentIndex(index);
//             }}
//             className={`w-3 h-3 rounded-full transition ${
//               index === currentIndex
//                 ? darkMode
//                   ? "bg-gray-100"
//                   : "bg-gray-900"
//                 : darkMode
//                 ? "bg-gray-500"
//                 : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Hero;



// import React, { useState, useEffect } from "react";
// import { useDarkMode } from "../context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

// const Hero = () => {
//   const { darkMode } = useDarkMode();
//   const [slides, setSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Fetch top news
//   const fetchTrendingNews = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();

//       if (data && data.Data) {
//         const now = Math.floor(Date.now() / 1000);
//         const recentNews = data.Data.filter(
//           (news) => now - news.published_on <= 3600
//         );
//         const sorted = recentNews.sort((a, b) => b.published_on - a.published_on);
//         setSlides(sorted.slice(0, 5));
//       }
//     } catch (err) {
//       console.error("Error fetching trending news:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingNews();
//     const interval = setInterval(fetchTrendingNews, 120000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       paginate(1);
//     }, 3000);
//     return () => clearInterval(slideInterval);
//   }, [slides]);

//   const paginate = (newDirection) => {
//     if (!slides.length) return;
//     setDirection(newDirection);
//     setCurrentIndex((prev) =>
//       (prev + newDirection + slides.length) % slides.length
//     );
//   };

//   if (slides.length === 0) {
//     return (
//       <section className="max-w-9xl mx-auto px-4 py-8">
//         <p
//           className={`${
//             darkMode ? "text-gray-400" : "text-gray-600"
//           } text-center`}
//         >
//           Loading trending news...
//         </p>
//       </section>
//     );
//   }

//   // Variants for sweet slide
//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.3 },
//       },
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 300 : -300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <>
//       <section className="relative max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
//         {/* Left Arrow */}
//         <button
//           onClick={() => paginate(-1)}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10"
//         >
//           <FaChevronLeft />
//         </button>

//         {/* Left Content */}
//         <div>
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={slides[currentIndex].id}
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               dragElastic={1}
//               onDragEnd={(e, { offset, velocity }) => {
//                 const swipe = swipePower(offset.x, velocity.x);

//                 if (swipe < -swipeConfidenceThreshold) {
//                   paginate(1);
//                 } else if (swipe > swipeConfidenceThreshold) {
//                   paginate(-1);
//                 }
//               }}
//             >
//               <h2
//                 className={`text-3xl md:text-4xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 {slides[currentIndex].title}
//               </h2>
//               <p
//                 className={`mt-2 ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 {slides[currentIndex].body.slice(0, 120)}...
//               </p>
//               <a
//                 href={slides[currentIndex].url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`mt-4 inline-block px-4 py-2 rounded font-medium transition ${
//                   darkMode
//                     ? "bg-gray-100 text-black hover:bg-gray-200"
//                     : "bg-gray-900 text-white hover:bg-gray-800"
//                 }`}
//               >
//                 READ MORE
//               </a>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right Content (Image) */}
//         <div className="flex justify-center md:justify-end relative">
//           <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.img
//                 key={slides[currentIndex].imageurl}
//                 src={
//                   slides[currentIndex].imageurl || "/images/default-news.jpeg"
//                 }
//                 alt="Slide"
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.6 }}
//                 drag="x"
//                 dragConstraints={{ left: 0, right: 0 }}
//                 dragElastic={1}
//                 onDragEnd={(e, { offset, velocity }) => {
//                   const swipe = swipePower(offset.x, velocity.x);

//                   if (swipe < -swipeConfidenceThreshold) {
//                     paginate(1);
//                   } else if (swipe > swipeConfidenceThreshold) {
//                     paginate(-1);
//                   }
//                 }}
//                 className="w-full h-full object-cover"
//               />
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => paginate(1)}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10"
//         >
//           <FaChevronRight />
//         </button>
//       </section>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1);
//               setCurrentIndex(index);
//             }}
//             className={`w-3 h-3 rounded-full transition ${
//               index === currentIndex
//                 ? darkMode
//                   ? "bg-gray-100"
//                   : "bg-gray-900"
//                 : darkMode
//                 ? "bg-gray-500"
//                 : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Hero;


// import React, { useState, useEffect } from "react";
// import { useDarkMode } from "../context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const swipeConfidenceThreshold = 80; // smaller = easier to swipe
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

// const Hero = () => {
//   const { darkMode } = useDarkMode();
//   const [slides, setSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Fetch top news
//   const fetchTrendingNews = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();

//       if (data && data.Data) {
//         const now = Math.floor(Date.now() / 1000);
//         const recentNews = data.Data.filter(
//           (news) => now - news.published_on <= 3600
//         );
//         const sorted = recentNews.sort((a, b) => b.published_on - a.published_on);
//         setSlides(sorted.slice(0, 5));
//       }
//     } catch (err) {
//       console.error("Error fetching trending news:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingNews();
//     const interval = setInterval(fetchTrendingNews, 120000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     if (!slides.length) return;
//     const slideInterval = setInterval(() => {
//       paginate(1);
//     }, 5000);
//     return () => clearInterval(slideInterval);
//   }, [slides]);

//   const paginate = (newDirection) => {
//     if (!slides.length) return;
//     setDirection(newDirection);
//     setCurrentIndex((prev) =>
//       (prev + newDirection + slides.length) % slides.length
//     );
//   };

//   if (slides.length === 0) {
//     return (
//       <section className="max-w-9xl mx-auto px-4 py-8">
//         <p
//           className={`${
//             darkMode ? "text-gray-400" : "text-gray-600"
//           } text-center`}
//         >
//           Loading trending news...
//         </p>
//       </section>
//     );
//   }

//   // Sweet & smooth variants
//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 200 : -200,
//       opacity: 0,
//       scale: 0.95,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         x: { type: "spring", stiffness: 260, damping: 30 },
//         opacity: { duration: 0.3 },
//         scale: { duration: 0.3 },
//       },
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 200 : -200,
//       opacity: 0,
//       scale: 0.95,
//     }),
//   };

//   return (
//     <>
//       <section className="relative max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
//         {/* Left Arrow */}
//         <button
//           onClick={() => paginate(-1)}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10"
//         >
//           <FaChevronLeft />
//         </button>

//         {/* Left Content */}
//         <div>
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={slides[currentIndex].id}
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               dragElastic={0.8} // smoother drag
//               onDragEnd={(e, { offset, velocity }) => {
//                 const swipe = swipePower(offset.x, velocity.x);

//                 if (swipe < -swipeConfidenceThreshold) {
//                   paginate(1);
//                 } else if (swipe > swipeConfidenceThreshold) {
//                   paginate(-1);
//                 }
//               }}
//               className="cursor-grab active:cursor-grabbing"
//             >
//               <h2
//                 className={`text-3xl md:text-4xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 {slides[currentIndex].title}
//               </h2>
//               <p
//                 className={`mt-2 ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 {slides[currentIndex].body.slice(0, 120)}...
//               </p>
//               <a
//                 href={slides[currentIndex].url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`mt-4 inline-block px-4 py-2 rounded font-medium transition ${
//                   darkMode
//                     ? "bg-gray-100 text-black hover:bg-gray-200"
//                     : "bg-gray-900 text-white hover:bg-gray-800"
//                 }`}
//               >
//                 READ MORE
//               </a>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right Content (Image) */}
//         <div className="flex justify-center md:justify-end relative">
//           <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.img
//                 key={slides[currentIndex].imageurl}
//                 src={
//                   slides[currentIndex].imageurl || "/images/default-news.jpeg"
//                 }
//                 alt="Slide"
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.6 }}
//                 drag="x"
//                 dragConstraints={{ left: 0, right: 0 }}
//                 dragElastic={0.8}
//                 onDragEnd={(e, { offset, velocity }) => {
//                   const swipe = swipePower(offset.x, velocity.x);

//                   if (swipe < -swipeConfidenceThreshold) {
//                     paginate(1);
//                   } else if (swipe > swipeConfidenceThreshold) {
//                     paginate(-1);
//                   }
//                 }}
//                 className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
//               />
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => paginate(1)}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10"
//         >
//           <FaChevronRight />
//         </button>
//       </section>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1);
//               setCurrentIndex(index);
//             }}
//             className={`w-3 h-3 rounded-full transition ${
//               index === currentIndex
//                 ? darkMode
//                   ? "bg-gray-100"
//                   : "bg-gray-900"
//                 : darkMode
//                 ? "bg-gray-500"
//                 : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Hero;


// import React, { useState, useEffect } from "react";
// import { useDarkMode } from "../context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const swipeConfidenceThreshold = 8000;
// const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

// const Hero = () => {
//   const { darkMode } = useDarkMode();
//   const [slides, setSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Fetch top news
//   const fetchTrendingNews = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();

//       if (data && data.Data) {
//         const now = Math.floor(Date.now() / 1000);
//         const recentNews = data.Data.filter(
//           (news) => now - news.published_on <= 3600
//         );
//         const sorted = recentNews.sort((a, b) => b.published_on - a.published_on);
//         setSlides(sorted.slice(0, 5));
//       }
//     } catch (err) {
//       console.error("Error fetching trending news:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingNews();
//     const interval = setInterval(fetchTrendingNews, 120000);
//     return () => clearInterval(interval);
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       paginate(1);
//     }, 4000);
//     return () => clearInterval(slideInterval);
//   }, [slides]);

//   const paginate = (newDirection) => {
//     if (!slides.length) return;
//     setDirection(newDirection);
//     setCurrentIndex((prev) =>
//       (prev + newDirection + slides.length) % slides.length
//     );
//   };

//   if (slides.length === 0) {
//     return (
//       <section className="max-w-9xl mx-auto px-4 py-8">
//         <p
//           className={`${
//             darkMode ? "text-gray-400" : "text-gray-600"
//           } text-center`}
//         >
//           Loading trending news...
//         </p>
//       </section>
//     );
//   }

//   // Variants with parallax
//   const textVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 150 : -150,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 250, damping: 25 },
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? 150 : -150,
//       opacity: 0,
//     }),
//   };

//   const imageVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//       scale: 1.05,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: { type: "spring", stiffness: 200, damping: 30 },
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? 300 : -300,
//       opacity: 0,
//       scale: 1.05,
//     }),
//   };

//   return (
//     <>
//       <section className="relative max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
//         {/* Left Arrow */}
//         <button
//           onClick={() => paginate(-1)}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10"
//         >
//           <FaChevronLeft />
//         </button>

//         {/* Left Content (Text with parallax) */}
//         <div>
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={slides[currentIndex].id}
//               custom={direction}
//               variants={textVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               dragElastic={1}
//               onDragEnd={(e, { offset, velocity }) => {
//                 const swipe = swipePower(offset.x, velocity.x);
//                 if (swipe < -swipeConfidenceThreshold) paginate(1);
//                 else if (swipe > swipeConfidenceThreshold) paginate(-1);
//               }}
//             >
//               <h2
//                 className={`text-3xl md:text-4xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 {slides[currentIndex].title}
//               </h2>
//               <p
//                 className={`mt-2 ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 {slides[currentIndex].body.slice(0, 120)}...
//               </p>
//               <a
//                 href={slides[currentIndex].url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`mt-4 inline-block px-4 py-2 rounded font-medium transition ${
//                   darkMode
//                     ? "bg-gray-100 text-black hover:bg-gray-200"
//                     : "bg-gray-900 text-white hover:bg-gray-800"
//                 }`}
//               >
//                 READ MORE
//               </a>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right Content (Image with deeper parallax) */}
//         <div className="flex justify-center md:justify-end relative">
//           <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.img
//                 key={slides[currentIndex].imageurl}
//                 src={slides[currentIndex].imageurl || "/images/default-news.jpeg"}
//                 alt="Slide"
//                 custom={direction}
//                 variants={imageVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.6 }}
//                 className="w-full h-full object-cover"
//                 drag="x"
//                 dragConstraints={{ left: 0, right: 0 }}
//                 dragElastic={1}
//                 onDragEnd={(e, { offset, velocity }) => {
//                   const swipe = swipePower(offset.x, velocity.x);
//                   if (swipe < -swipeConfidenceThreshold) paginate(1);
//                   else if (swipe > swipeConfidenceThreshold) paginate(-1);
//                 }}
//               />
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => paginate(1)}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10"
//         >
//           <FaChevronRight />
//         </button>
//       </section>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1);
//               setCurrentIndex(index);
//             }}
//             className={`w-3 h-3 rounded-full transition ${
//               index === currentIndex
//                 ? darkMode
//                   ? "bg-gray-100"
//                   : "bg-gray-900"
//                 : darkMode
//                 ? "bg-gray-500"
//                 : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from "react";
import { useDarkMode } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const Hero = () => {
  const { darkMode } = useDarkMode();
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0); // track current slide progress

  // Fetch top news
  const fetchTrendingNews = async () => {
    try {
      const res = await fetch(
        "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
      );
      const data = await res.json();

      if (data && data.Data) {
        const now = Math.floor(Date.now() / 1000);
        const recentNews = data.Data.filter(
          (news) => now - news.published_on <= 3600
        );
        const sorted = recentNews.sort(
          (a, b) => b.published_on - a.published_on
        );
        setSlides(sorted.slice(0, 5));
      }
    } catch (err) {
      console.error("Error fetching trending news:", err);
    }
  };

  useEffect(() => {
    fetchTrendingNews();
    const interval = setInterval(fetchTrendingNews, 120000);
    return () => clearInterval(interval);
  }, []);

  // Auto progress bar + auto slide
  useEffect(() => {
    if (!slides.length) return;

    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + 2; // speed of progress
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, [currentIndex, slides]);

  const paginate = (newDirection) => {
    if (!slides.length) return;
    setDirection(newDirection);
    setCurrentIndex(
      (prev) => (prev + newDirection + slides.length) % slides.length
    );
  };

  if (slides.length === 0) {
    return (
      <section className="max-w-9xl mx-auto px-4 py-8">
        <p
          className={`${
            darkMode ? "text-gray-400" : "text-gray-600"
          } text-center`}
        >
          Loading trending news...
        </p>
      </section>
    );
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <>
      <section className="relative max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
        {/* Left Arrow */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10"
        >
          <FaChevronLeft />
        </button>

        {/* Left Content */}
        <div>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slides[currentIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <h2
                className={`text-3xl md:text-4xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {slides[currentIndex].title}
              </h2>
              <p
                className={`mt-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {slides[currentIndex].body.slice(0, 120)}...
              </p>
              <a
                href={slides[currentIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-block px-4 py-2 rounded font-medium transition ${
                  darkMode
                    ? "bg-gray-100 text-black hover:bg-gray-200"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                READ MORE
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Content (Image) */}
        <div className="flex justify-center md:justify-end relative">
          <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={slides[currentIndex].imageurl}
                src={
                  slides[currentIndex].imageurl || "/images/default-news.jpeg"
                }
                alt="Slide"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10"
        >
          <FaChevronRight />
        </button>
      </section>

      {/* Progress Bar Navigation */}
      <div className="flex justify-center items-center gap-2 mt-4 px-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
              setProgress(0);
            }}
            className="relative w-16 h-2 bg-gray-400/40 rounded cursor-pointer overflow-hidden"
          >
            {/* Fill bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width:
                  index === currentIndex ? `${progress}%` : index < currentIndex ? "100%" : "0%",
              }}
              transition={{ duration: 0.2, ease: "linear" }}
              className={`h-full ${
                darkMode ? "bg-gray-100" : "bg-gray-900"
              }`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;


// animated ticker for trending crypto news horizontally scrolling
// import React, { useState, useEffect } from "react";

// const TrendingTicker = () => {
//   const [news, setNews] = useState([]);

//   // Fetch top trending crypto news from last 1 hour
//   const fetchTrendingNews = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();
//       if (data?.Data) {
//         const now = Math.floor(Date.now() / 1000);
//         const recentNews = data.Data.filter((item) => now - item.published_on <= 3600);
//         const sorted = recentNews.sort((a, b) => b.published_on - a.published_on);
//         setNews(sorted.slice(0, 10)); // top 10 trending
//       }
//     } catch (err) {
//       console.error("Error fetching trending news:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingNews();
//     const interval = setInterval(fetchTrendingNews, 120000); // refresh every 2 min
//     return () => clearInterval(interval);
//   }, []);

//   if (!news.length)
//     return (
//       <div className="bg-gray-800 text-white px-4 py-2">
//         Loading trending crypto news...
//       </div>
//     );

//   return (
//     <div className="bg-gray-800 text-white overflow-hidden whitespace-nowrap">
//       <div className="inline-block animate-marquee py-2">
//         {news.map((item, idx) => (
//           <span
//             key={idx}
//             className="inline-block px-6 font-semibold hover:text-yellow-400 cursor-pointer"
//           >
//             {item.title} 📰
//           </span>
//         ))}
//       </div>

//       {/* Tailwind animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(100%);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 60s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrendingTicker;






