// import React from 'react'

// const LatestNews = () => {
//    const news = [
//     "Bitcoin ETF gets approval",
//     "Ethereum gas fees drop",
//     "New crypto regulations in EU",
//     "Dogecoin gains popularity",
//   ];
//   return (
//     <>
//       <section className="border rounded-lg p-4 ">
//       <h2 className="text-2xl font-bold mb-4">📰 Latest Crypto News</h2>
//       <div className="space-y-4 text-sm max-h-[600px] overflow-y-auto pr-2">
//         <article className="border-b pb-2 mb-2">
//     <p className="text-xs text-gray-400">Today · 2:45 AM</p>
//     <p className="font-semibold text-gray-200">
//       Crypto Charts Look 'So Broken and Bearish They’re Bullish'
//     </p>
//   </article>

//   <article className="border-b pb-2 mb-2">
//     <p className="text-xs text-gray-400">Yesterday · 11:45 PM</p>
//     <p className="font-semibold text-gray-200">
//       Bitcoin Tests Resistance Level Again
//     </p>
//   </article>

//   <article className="border-b pb-2 mb-2">
//     <p className="text-xs text-gray-400">Yesterday · 8:20 PM</p>
//     <p className="font-semibold text-gray-200">
//       Ethereum Gas Fees Drop to 6-Month Low
//     </p>
//   </article>

//   <article className="border-b pb-2 mb-2">
//     <p className="text-xs text-gray-400">2 Days Ago · 3:10 PM</p>
//     <p className="font-semibold text-gray-200">
//       Solana Surges After Major Network Upgrade
//     </p>
//   </article>

//   <article>
//     <p className="text-xs text-gray-400">2 Days Ago · 10:30 AM</p>
//     <p className="font-semibold text-gray-200">
//       Binance Faces Increased Regulatory Scrutiny
//     </p>
//   </article>
//       </div>
//     </section>
//     </>
//   )
// }

// export default LatestNews

// import React, { useEffect, useState } from "react";

// const LatestNews = () => {
//   const [latestNews, setLatestNews] = useState([]);

//   const fetchNews = async () => {
//     try {
//       const res = await fetch(
//         "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
//       );
//       const data = await res.json();

//       if (data && data.Data) {
//         // Sort latest → old and take top 10
//         const sorted = data.Data.sort((a, b) => b.published_on - a.published_on);
//         setLatestNews(sorted.slice(0, 10));
//       }
//     } catch (err) {
//       console.error("Error fetching latest news:", err);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//     const interval = setInterval(fetchNews, 120000); // refresh every 2 min
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="border rounded-lg p-4">
//       <h2 className="text-2xl font-bold mb-4">📰 Latest Crypto News</h2>

//       <div className="space-y-4 text-sm max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
//         {latestNews.length > 0 ? (
//           latestNews.map((news, index) => (
//             <article key={index} className="border-b pb-2 mb-2">
//               <p className="text-xs text-gray-400">
//                 {new Date(news.published_on * 1000).toLocaleString()}
//               </p>
//               <a
//                 href={news.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-semibold text-gray-200 hover:text-blue-400"
//               >
//                 {news.title}
//               </a>
//             </article>
//           ))
//         ) : (
//           <p className="text-gray-400">Loading latest news...</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default LatestNews;


import React, { useEffect, useState } from "react";
import { useDarkMode } from "../context/ThemeContext"; // ⬅️ Import context

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const { darkMode } = useDarkMode(); // ⬅️ get dark mode state

  const fetchNews = async () => {
    try {
      const res = await fetch(
        "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
      );
      const data = await res.json();

      if (data && data.Data) {
        const sorted = data.Data.sort((a, b) => b.published_on - a.published_on);
        setLatestNews(sorted.slice(0, 10));
      }
    } catch (err) {
      console.error("Error fetching latest news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 120000); // refresh every 2 min
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`border rounded-lg p-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        📰 Latest Crypto News
      </h2>

      <div className="space-y-4 text-sm max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
        {latestNews.length > 0 ? (
          latestNews.map((news, index) => (
            <article
              key={index}
              className={`border-b pb-2 mb-2 transition-colors ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <p
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {new Date(news.published_on * 1000).toLocaleString()}
              </p>
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold hover:text-blue-500 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {news.title}
              </a>
            </article>
          ))
        ) : (
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Loading latest news...
          </p>
        )}
      </div>
    </section>
  );
};

export default LatestNews;
