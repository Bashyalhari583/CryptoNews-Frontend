// import React from 'react'
// import NewsCard from '../components/NewsCard'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const NewsPage = () => {
//   return (
//     <>
//     <Navbar />
//       <section className="border rounded-lg p-4 pb-4 pt-20">
//       <h2 className="text-2xl font-bold mb-4">News</h2>
//       <div className="grid md:grid-cols-5 sm:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">

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
//       <Footer />
//     </>
//   )
// }

// export default NewsPage


// import React from 'react';
// import NewsCard from '../components/NewsCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const NewsPage = () => {
//   return (
//     <>
//       <Navbar />

//       {/* Main Section aligned with Navbar */}
//       <section className="max-w-screen-2xl mx-auto px-4 md:px-8 pt-20 pb-10">
//         <h2 className="text-2xl font-bold mb-6">News</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
//           <NewsCard
//             img="/images/bitcoin1.jpeg"
//             title="Bitcoin hits now all-time high"
//             desc="Bitcoin surges post $60,000 as crypto market continues its bull run."
//           />
//           <NewsCard
//             img="/images/bitcoin-price-fallchart.jpeg"
//             title="Ethereum upgrades to Improve scalability"
//             desc="Ethereum’s new fork enhances transaction efficiency."
//           />
//           <NewsCard
//             img="/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg"
//             title="Blockchain technology gains adoption"
//             desc="Blockchain is being used across industries for security."
//           />
//           <NewsCard
//             img="/images/bitcoin1.jpeg"
//             title="Bitcoin hits now all-time high"
//             desc="Bitcoin surges post $60,000 as crypto market continues its bull run."
//           />
//           <NewsCard
//             img="/images/bitcoin-price-fallchart.jpeg"
//             title="Ethereum upgrades to Improve scalability"
//             desc="Ethereum’s new fork enhances transaction efficiency."
//           />
//           <NewsCard
//             img="/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg"
//             title="Blockchain technology gains adoption"
//             desc="Blockchain is being used across industries for security."
//           />
//           <NewsCard
//             img="/images/bitcoin1.jpeg"
//             title="Bitcoin hits now all-time high"
//             desc="Bitcoin surges post $60,000 as crypto market continues its bull run."
//           />
//           <NewsCard
//             img="/images/bitcoin-price-fallchart.jpeg"
//             title="Ethereum upgrades to Improve scalability"
//             desc="Ethereum’s new fork enhances transaction efficiency."
//           />
//           <NewsCard
//             img="/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg"
//             title="Blockchain technology gains adoption"
//             desc="Blockchain is being used across industries for security."
//           />
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default NewsPage;


// import React, { useEffect, useState } from "react";
// import NewsCard from "../components/NewsCard";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const NewsPage = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchNews = async () => {
//     try {
//       const res = await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
//       const data = await res.json();

//       if (data && data.Data) {
//         // sort by published_on (latest first)
//         const sorted = data.Data.sort((a, b) => b.published_on - a.published_on);
//         setNews(sorted.slice(0, 40)); // show 30 latest news
//       } else {
//         setError("No news available right now.");
//       }
//     } catch (err) {
//       setError("Failed to fetch news. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//     const interval = setInterval(fetchNews, 120000); // refresh every 2 minutes
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       {/* Main Section */}
//       <section className="max-w-screen-2xl mx-auto px-4 md:px-8 pt-20 pb-10">
//         <h2 className="text-2xl font-bold mb-6">News</h2>

//         {loading && <p className="text-gray-500 text-center">Loading news...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {!loading && !error && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
//             {news.map((item, idx) => (
//               <NewsCard
//                 key={idx}
//                 img={item.imageurl}
//                 title={item.title}
//                 desc={item.body.slice(0, 100) + "..."}
//               />
//             ))}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default NewsPage;


import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDarkMode } from "../context/ThemeContext"; // ⬅️ import context

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useDarkMode(); // ⬅️ get darkMode state

  const fetchNews = async () => {
    try {
      const res = await fetch(
        "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
      );
      const data = await res.json();

      if (data && data.Data) {
        const sorted = data.Data.sort((a, b) => b.published_on - a.published_on);
        setNews(sorted.slice(0, 40)); // show 40 latest news
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

  return (
    <>
      <Navbar />

      {/* Main Section */}
      <section
        className={`max-w-screen-2xl mx-auto px-4 md:px-8 pt-20 pb-10 transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <h2
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          News
        </h2>

        {loading && (
          <p className={darkMode ? "text-gray-400 text-center" : "text-gray-500 text-center"}>
            Loading news...
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
            {news.map((item, idx) => (
              <NewsCard
                key={idx}
                img={item.imageurl}
                title={item.title}
                desc={item.body.slice(0, 100) + "..."}
                darkMode={darkMode} // ⬅️ pass darkMode to NewsCard
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default NewsPage;
