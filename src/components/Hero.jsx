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

import React, { useState, useEffect } from "react";
import { useDarkMode } from "../context/ThemeContext"; // Import context

const Hero = () => {
  const { darkMode } = useDarkMode(); // Get darkMode state
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        const sorted = recentNews.sort((a, b) => b.published_on - a.published_on);
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

  // Auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        slides.length ? (prevIndex === slides.length - 1 ? 0 : prevIndex + 1) : 0
      );
    }, 2000);

    return () => clearInterval(slideInterval);
  }, [slides]);

  if (slides.length === 0) {
    return (
      <section className="max-w-9xl mx-auto px-4 py-8">
        <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-center`}>
          Loading trending news...
        </p>
      </section>
    );
  }

  return (
    <>
      <section className="max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div>
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
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
            <img
              src={slides[currentIndex].imageurl || "/images/default-news.jpeg"}
              alt="Slide"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex
                ? darkMode
                  ? "bg-gray-100"
                  : "bg-gray-900"
                : darkMode
                ? "bg-gray-500"
                : "bg-gray-400"
            }`}
          ></button>
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






