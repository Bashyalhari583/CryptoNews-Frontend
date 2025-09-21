// import React from 'react'
// import NewsCard from './NewsCard'

// const News = () => {
//   // const cardsPerPage = 4;
//   // const [currentPage, setCurrentPage] = useState(1);
//   // const totalPages = Math.ceil(newsData.length / cardsPerPage);

//   // const startIndex = (currentPage - 1) * cardsPerPage;
//   // const currentCards = newsData.slice(startIndex, startIndex + cardsPerPage);
//   return (
//     <>
//        {/* News Section */}
//         {/* <section className="border rounded-lg p-4 bg-gray-100 text-black dark:bg-gray-900 dark:text-white"> */}
//         <section className="border rounded-lg p-4">
//       <h2 className="text-2xl font-bold mb-4">News</h2>
//       <div className="grid md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">

//         <NewsCard
//           img="/images/bitcoin1.jpeg"
//           title="Bitcoin hits now all-time high"
//           desc="Bitcoin surges post $60,000 as crypto market continues its bull run."
//         />
//         <NewsCard
//           img="/images/bitcoin-price-fallchart.jpeg"
//           title="Ethereum upgrades to Improve scalability"
//           desc="Ethereum’s new fork enhances transaction efficiency."
//         />
//         <NewsCard
//           img="/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg"
//           title="Blockchain technology gains adoption"
//           desc="Blockchain is being used across industries for security."
//         />
//         <NewsCard
//           img="/images/bitcoin1.jpeg"
//           title="Bitcoin hits now all-time high"
//           desc="Bitcoin surges post $60,000 as crypto market continues its bull run."
//         />
//         <NewsCard
//           img="/images/bitcoin-price-fallchart.jpeg"
//           title="Ethereum upgrades to Improve scalability"
//           desc="Ethereum’s new fork enhances transaction efficiency."
//         />
//         <NewsCard
//           img="/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg"
//           title="Blockchain technology gains adoption"
//           desc="Blockchain is being used across industries for security."
//         />
//         <NewsCard
//           img="/images/bitcoin1.jpeg"
//           title="Bitcoin hits now all-time high"
//           desc="Bitcoin surges post $60,000 as crypto market continues its bull run."
//         />
//         <NewsCard
//           img="/images/bitcoin-price-fallchart.jpeg"
//           title="Ethereum upgrades to Improve scalability"
//           desc="Ethereum’s new fork enhances transaction efficiency."
//         />
//         <NewsCard
//           img="/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg"
//           title="Blockchain technology gains adoption"
//           desc="Blockchain is being used across industries for security."
//         />
  
//       </div>

//       </section>
//     </>
//   )
// }

// export default News



// import React, { useState } from "react";
// import NewsCard from "./NewsCard";

// const News = () => {
//   const cardsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);

//   // Sample News Data
//   const newsData = [
//     {
//       img: "/images/bitcoin1.jpeg",
//       title: "Bitcoin hits new all-time high",
//       desc: "Bitcoin surges past $60,000 as crypto market continues its bull run.",
//     },
//     {
//       img: "/images/bitcoin-price-fallchart.jpeg",
//       title: "Ethereum upgrades to improve scalability",
//       desc: "Ethereum’s new fork enhances transaction efficiency.",
//     },
//     {
//       img: "/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg",
//       title: "Blockchain technology gains adoption",
//       desc: "Blockchain is being used across industries for security.",
//     },
//     {
//       img: "/images/bitcoin1.jpeg",
//       title: "Bitcoin demand rises globally",
//       desc: "Institutions are showing stronger interest in Bitcoin.",
//     },
//     {
//       img: "/images/bitcoin-price-fallchart.jpeg",
//       title: "DeFi market grows rapidly",
//       desc: "Decentralized finance sees exponential adoption worldwide.",
//     },
//     {
//       img: "/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg",
//       title: "Crypto regulations tighten",
//       desc: "Governments are working on stronger crypto policies.",
//     },
//   ];

//   const totalPages = Math.ceil(newsData.length / cardsPerPage);
//   const startIndex = (currentPage - 1) * cardsPerPage;
//   const currentCards = newsData.slice(startIndex, startIndex + cardsPerPage);

//   return (
//     <>
//       {/* News Section */}
//       <section className="border rounded-lg p-4">
//         <h2 className="text-2xl font-bold mb-4">News</h2>
//         <div className="grid md:grid-cols-2 gap-6 max-h-[600px] overflow-y-scroll pr-2">
//           {currentCards.map((news, index) => (
//             <NewsCard
//               key={index}
//               img={news.img}
//               title={news.title}
//               desc={news.desc}
//             />
//           ))}
//         </div>
//         {/* Pagination */}
//         <div className="flex justify-center mt-4 gap-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               className={`px-3 py-1 rounded ${
//                 currentPage === i + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-300 text-gray-700 hover:bg-gray-400"
//               }`}
//               onClick={() => setCurrentPage(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default News;

// using pagination and fetching real news from API
// import React, { useState, useEffect } from "react";
// import NewsCard from "./NewsCard";

// const News = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const cardsPerPage = 8;

//   // Fetch news from CryptoCompare API
//   const fetchNews = async () => {
//     try {
//       const res = await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
//       const data = await res.json();

//       if (data && data.Data) {
//         // Sort latest → old
//         const sorted = data.Data.sort((a, b) => b.published_on - a.published_on);
//         setNewsData(sorted.slice(0, 20)); // Take top 20 news
//       }
//     } catch (err) {
//       console.error("Error fetching news:", err);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//     const interval = setInterval(fetchNews, 120000); // Refresh every 2 min
//     return () => clearInterval(interval);
//   }, []);

//   // Pagination logic
//   const totalPages = Math.ceil(newsData.length / cardsPerPage);
//   const startIndex = (currentPage - 1) * cardsPerPage;
//   const currentCards = newsData.slice(startIndex, startIndex + cardsPerPage);

//   return (
//     <section className="border rounded-lg p-4 w-full">
//       <h2 className="text-2xl font-bold mb-4">News</h2>

//       {/* News Cards */}
//       <div className="grid md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
//         {currentCards.map((news, index) => (
//           <div key={index} className="h-[250px] flex">
//             <NewsCard
//               img={news.imageurl}
//               title={news.title}
//               desc={news.body.slice(0, 120) + "..."}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-4 gap-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`px-3 py-1 rounded ${
//               currentPage === i + 1
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-300 text-gray-700 hover:bg-gray-400"
//             }`}
//             onClick={() => setCurrentPage(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default News;


// remove pagination for now and show top 20 news in scrollable div
// import React, { useState, useEffect } from "react";
// import NewsCard from "./NewsCard";

// const News = () => {
//   const [newsData, setNewsData] = useState([]);

//   // Fetch news from CryptoCompare API
//   const fetchNews = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();

//       if (data && data.Data) {
//         const sorted = data.Data.sort((a, b) => b.published_on - a.published_on);
//         setNewsData(sorted.slice(0, 20)); // top 20 news
//       }
//     } catch (err) {
//       console.error("Error fetching news:", err);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//     const interval = setInterval(fetchNews, 120000); // Refresh every 2 min
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="border rounded-lg p-4 w-full">
//       <h2 className="text-2xl font-bold mb-4">News</h2>

//       {/* Scrollable News Cards */}
//       <div className="grid md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
//         {newsData.map((news, index) => (
//           <a
//             key={index}
//             href={news.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="h-[250px] flex"
//           >
//             <NewsCard
//               img={news.imageurl}
//               title={news.title}
//               desc={news.body.slice(0, 120) + "..."}
//             />
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default News;


import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { useDarkMode } from "../context/ThemeContext"; // ⬅️ import darkMode

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const { darkMode } = useDarkMode(); // ⬅️ get dark mode state

  // Fetch news from CryptoCompare API
  const fetchNews = async () => {
    try {
      const res = await fetch(
        "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
      );
      const data = await res.json();

      if (data && data.Data) {
        const sorted = data.Data.sort((a, b) => b.published_on - a.published_on);
        setNewsData(sorted.slice(0, 20)); // top 20 news
      }
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 120000); // Refresh every 2 min
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`border rounded-lg p-4 w-full transition-colors duration-300 ${
        darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-4 transition-colors ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        News
      </h2>

      {/* Scrollable News Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
        {newsData.map((news, index) => (
          <a
            key={index}
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[250px] flex"
          >
            <NewsCard
              img={news.imageurl}
              title={news.title}
              desc={news.body.slice(0, 120) + "..."}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default News;





