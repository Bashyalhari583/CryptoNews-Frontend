import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDarkMode } from "../context/ThemeContext"; // ⬅️ import context

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]); // ⬅️ for search results
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;
  const { darkMode } = useDarkMode(); // ⬅️ get darkMode state

  const fetchNews = async () => {
    try {
      const res = await fetch("http://localhost:30074/api/news");
      const data = await res.json();

      if (data && data.Data) {
        const sorted = data.Data.sort(
          (a, b) => b.published_on - a.published_on
        );
        setNews(sorted.slice(0, 40)); // show 40 latest news
        setFilteredNews(sorted.slice(0, 40)); // initialize filtered
      } else {
        setError("No news available right now.");
      }
    } catch (err) {
      setError("Failed to fetch news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 120000); // refresh every 2 minutes
    return () => clearInterval(interval);
  }, []);

  // 🔎 Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredNews(news);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredNews(
        news.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.body.toLowerCase().includes(query)
        )
      );
      setCurrentPage(1); // reset to first page when searching
    }
  }, [searchQuery, news]);

  // Pagination logic
  const totalPages = Math.ceil(filteredNews.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = filteredNews.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <>
      <Navbar />

      {/* Main Section */}
      <section
        className={`max-w-screen-2xl mx-auto px-4 md:px-8 pt-20 pb-10 transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            News
          </h2>

          {/* 🔎 Search Bar */}
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`px-4 py-2 rounded-md border w-full md:w-80 focus:outline-none transition-colors ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
            }`}
          />
        </div>

        {loading && (
          <p
            className={
              darkMode
                ? "text-gray-400 text-center"
                : "text-gray-500 text-center"
            }
          >
            Loading news...
          </p>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <>
            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
              {currentCards.map((item, idx) => (
                <NewsCard
                  key={idx}
                  img={item.imageurl}
                  title={item.title}
                  desc={item.body.slice(0, 100) + "..."}
                  darkMode={darkMode}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 gap-2">
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
            )}
          </>
        )}
      </section>

      <Footer />
    </>
  );
};

export default NewsPage;
