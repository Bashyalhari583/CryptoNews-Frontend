import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { useDarkMode } from "../context/ThemeContext"; // ⬅️ dark mode context

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { darkMode } = useDarkMode(); // ⬅️ get dark mode state
  const cardsPerPage = 8;

  // Fetch news from CryptoCompare API
  const fetchNews = async () => {
    try {
      const res = await fetch("http://localhost:30074/api/news");
      const data = await res.json();

      if (data && data.news) {
        const sorted = data.news.sort(
          (a, b) => b.published_on - a.published_on
        );
        console.log("Sorted news data:", sorted.slice(0, 40));
        setNewsData(sorted.slice(0, 40)); // ⬅️ keep top 40 for better pagination
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

  // Pagination logic
  const totalPages = Math.ceil(newsData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = newsData.slice(startIndex, startIndex + cardsPerPage);

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

      {/* Scrollable News Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
        {currentCards.map((news, index) => (
          <a
            key={index}
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[250px] flex"
          >
            <NewsCard
              img={news.image}
              title={news.title}
              desc={news.description.slice(0, 120) + "..."}
            />
          </a>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded transition-colors ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : darkMode
                ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default News;

// import React, { useState, useEffect } from "react";
// import NewsCard from "./NewsCard";
// import { useDarkMode } from "../context/ThemeContext"; // dark mode context

// const News = () => {
//   const [newsData, setNewsData] = useState([]); // store news items
//   const [currentPage, setCurrentPage] = useState(1); // current page for pagination
//   const { darkMode } = useDarkMode(); // dark mode state
//   const cardsPerPage = 8; // number of cards per page

//   // Function to fetch news from backend
//   const fetchNews = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/news");
//       const data = await res.json();

//       if (data && data.news) {
//         // use 'news' from backend
//         const sorted = data.news.sort(
//           (a, b) => (new Date(b.createdAt) || 0) - (new Date(a.createdAt) || 0)
//         ); // sort descending by createdAt
//         setNewsData(sorted.slice(0, 40)); // keep top 40 news
//       }
//     } catch (err) {
//       console.error("Error fetching news:", err);
//     }
//   };

//   // Fetch news on component load and refresh every 2 minutes
//   useEffect(() => {
//     fetchNews();
//     const interval = setInterval(fetchNews, 120000); // refresh every 2 minutes
//     return () => clearInterval(interval);
//   }, []);

//   // Pagination logic
//   const totalPages = Math.ceil(newsData.length / cardsPerPage);
//   const startIndex = (currentPage - 1) * cardsPerPage;
//   const currentCards = newsData.slice(startIndex, startIndex + cardsPerPage);

//   return (
//     <section
//       className={`border rounded-lg p-4 w-full transition-colors duration-300 ${
//         darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
//       }`}
//     >
//       <h2
//         className={`text-2xl font-bold mb-4 transition-colors ${
//           darkMode ? "text-white" : "text-gray-900"
//         }`}
//       >
//         News
//       </h2>

//       {/* Scrollable News Grid */}
//       <div className="grid md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
//         {currentCards.length > 0 ? (
//           currentCards.map((news, index) => (
//             <a
//               key={index}
//               href={news.url || "#"}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="h-[250px] flex"
//             >
//               <NewsCard
//                 img={news.image || "https://via.placeholder.com/150"} // fallback image
//                 title={news.title || "Title not available"}
//                 desc={
//                   (news.description || "Description not available").slice(
//                     0,
//                     120
//                   ) + "..."
//                 }
//               />
//             </a>
//           ))
//         ) : (
//           <p
//             className={`text-center ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             No news available.
//           </p>
//         )}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-4 gap-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`px-3 py-1 rounded transition-colors ${
//               currentPage === i + 1
//                 ? "bg-blue-500 text-white"
//                 : darkMode
//                 ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
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
