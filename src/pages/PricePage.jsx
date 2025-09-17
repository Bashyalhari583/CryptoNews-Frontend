// this part is popup coin format are show beautiful
// import React, { useState, useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const PricePage = () => {
//   const [cryptoData, setCryptoData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [timeframe, setTimeframe] = useState("1h");
//   const [selectedCoin, setSelectedCoin] = useState(null);
//   const [historyData, setHistoryData] = useState([]);

//   const fetchCrypto = async () => {
//     try {
//       const response = await fetch(
//         "https://openapiv1.coinstats.app/coins?currency=USD",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "X-API-KEY": "n+W4A157ev/JP1HwXuqjp9dTDeZav4Ie/VpQK46jewY=",
//           },
//         }
//       );
//       const data = await response.json();
//       setCryptoData(data.result);
//     } catch (error) {
//       console.error("Error fetching crypto data:", error);
//     }
//   };

//   const fetchHistory = async (id) => {
//     try {
//       const response = await fetch(
//         `https://openapiv1.coinstats.app/coins/${id}/charts?period=24h&currency=USD`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "X-API-KEY": "n+W4A157ev/JP1HwXuqjp9dTDeZav4Ie/VpQK46jewY=",
//           },
//         }
//       );
//       const data = await response.json();
//       // Convert [timestamp, price] to { time, price }
//       const formatted = data.map((d) => ({
//         time: new Date(d[0]).toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         price: d[1],
//       }));
//       setHistoryData(formatted);
//     } catch (error) {
//       console.error("Error fetching history:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCrypto();
//     const interval = setInterval(fetchCrypto, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   // Buy/Sell Suggestion Logic
//   const getSuggestion = (percent) => {
//     if (percent >= 5) return "Strong Buy ✅";
//     if (percent > 0) return "Buy 👍";
//     if (percent < -5) return "Strong Sell ❌";
//     return "Sell 👎";
//   };

//   return (
//     <>
//       <aside className="border bg-gray-800 p-4 mt-4 rounded-lg w-full sm:max-w-md mx-auto">
//         <h3 className="font-semibold mb-3 text-white text-lg text-center sm:text-left">
//           Crypto Ticker
//         </h3>

//         {/* Search */}
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {/* Header */}
//         <div className="flex justify-between text-gray-300 font-semibold px-2 py-1 border-b border-gray-600 items-center text-sm sm:text-base">
//           <span className="w-2/4">Name</span>
//           <span className="w-1/4 text-right">Price</span>
//           <span className="w-1/4 text-right">
//             <select
//               value={timeframe}
//               onChange={(e) => setTimeframe(e.target.value)}
//               className="bg-gray-700 text-white rounded p-1 border border-gray-600 text-xs sm:text-sm"
//             >
//               <option value="1h">1H</option>
//               <option value="24h">24H</option>
//               <option value="7d">7D</option>
//             </select>
//           </span>
//         </div>

//         {/* List */}
//         <div className="max-h-[28rem] sm:max-h-[32rem] overflow-y-auto scrollbar-hide">
//           {cryptoData
//             .filter((coin) =>
//               coin.name.toLowerCase().includes(search.toLowerCase())
//             )
//             .map((coin) => {
//               let percent;
//               if (timeframe === "1h") percent = coin.priceChange1h ?? 0;
//               else if (timeframe === "24h")
//                 percent = coin.priceChange ?? coin.priceChange1d ?? 0;
//               else if (timeframe === "7d")
//                 percent = coin.priceChange ?? coin.priceChange7d ?? 0;

//               return (
//                 <div
//                   key={coin.id}
//                   className="flex justify-between items-center text-white px-2 py-2 hover:bg-gray-700 rounded cursor-pointer text-sm sm:text-base"
//                   onClick={() => {
//                     setSelectedCoin({ ...coin, percent });
//                     fetchHistory(coin.id);
//                   }}
//                 >
//                   <div className="flex items-center gap-2 w-1/2 overflow-hidden">
//                     <img
//                       src={coin.icon}
//                       alt={coin.name}
//                       className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
//                     />
//                     <span className="truncate">
//                       {coin.name} ({coin.symbol.toUpperCase()})
//                     </span>
//                   </div>
//                   <span className="w-1/4 text-right truncate">
//                     ${coin.price.toFixed(4)}
//                   </span>
//                   <span
//                     className={`w-1/4 text-right ${
//                       percent >= 0 ? "text-green-400" : "text-red-400"
//                     }`}
//                   >
//                     {percent.toFixed(2)}%
//                   </span>
//                 </div>
//               );
//             })}
//         </div>
//       </aside>

//       {/* Fullscreen Modal */}
//       {selectedCoin && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
//           <div className="p-6 max-w-3xl mx-auto">
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedCoin(null)}
//               className="text-red-400 hover:text-red-600 font-bold text-xl float-right"
//             >
//               ✕
//             </button>

//             {/* Header */}
//             <div className="flex flex-col items-center text-center mt-6">
//               <img
//                 src={selectedCoin.icon}
//                 alt={selectedCoin.name}
//                 className="w-14 h-14 mb-3 rounded-full"
//               />
//               <h2 className="text-2xl font-bold text-white">
//                 {selectedCoin.name} ({selectedCoin.symbol.toUpperCase()})
//               </h2>
//               <p className="text-gray-400 text-sm">
//                 Real-time market overview
//               </p>
//             </div>

//             {/* Live Chart */}
//             <div className="mt-6 h-64 bg-gray-800 rounded-lg p-2">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={historyData}>
//                   <XAxis dataKey="time" hide />
//                   <YAxis domain={["auto", "auto"]} />
//                   <Tooltip />
//                   <Line
//                     type="monotone"
//                     dataKey="price"
//                     stroke="#00ff99"
//                     strokeWidth={2}
//                     dot={false}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Performance */}
//             <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
//               <div className="bg-gray-800 p-3 rounded-lg text-center">
//                 <p className="text-sm text-gray-400">1H Change</p>
//                 <p
//                   className={`font-bold ${
//                     selectedCoin.priceChange1h >= 0
//                       ? "text-green-400"
//                       : "text-red-400"
//                   }`}
//                 >
//                   {selectedCoin.priceChange1h?.toFixed(2)}%
//                 </p>
//               </div>
//               <div className="bg-gray-800 p-3 rounded-lg text-center">
//                 <p className="text-sm text-gray-400">24H Change</p>
//                 <p
//                   className={`font-bold ${
//                     selectedCoin.priceChange1d >= 0
//                       ? "text-green-400"
//                       : "text-red-400"
//                   }`}
//                 >
//                   {selectedCoin.priceChange1d?.toFixed(2)}%
//                 </p>
//               </div>
//               <div className="bg-gray-800 p-3 rounded-lg text-center">
//                 <p className="text-sm text-gray-400">7D Change</p>
//                 <p
//                   className={`font-bold ${
//                     selectedCoin.priceChange7d >= 0
//                       ? "text-green-400"
//                       : "text-red-400"
//                   }`}
//                 >
//                   {selectedCoin.priceChange7d?.toFixed(2)}%
//                 </p>
//               </div>
//             </div>

//             {/* More Info */}
//             <div className="mt-6 space-y-2 text-gray-200">
//               <p>
//                 <strong>Rank:</strong> #{selectedCoin.rank}
//               </p>
//               <p>
//                 <strong>Market Cap:</strong> $
//                 {selectedCoin.marketCap?.toLocaleString()}
//               </p>
//               <p>
//                 <strong>Volume (24h):</strong> $
//                 {selectedCoin.volume?.toLocaleString()}
//               </p>
//               <p>
//                 <strong>Available Supply:</strong>{" "}
//                 {selectedCoin.availableSupply?.toLocaleString()}{" "}
//                 {selectedCoin.symbol.toUpperCase()}
//               </p>
//               <p>
//                 <strong>Total Supply:</strong>{" "}
//                 {selectedCoin.totalSupply?.toLocaleString()}{" "}
//                 {selectedCoin.symbol.toUpperCase()}
//               </p>
//               <p>
//                 <strong>Website:</strong>{" "}
//                 <a
//                   href={selectedCoin.websiteUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-blue-400 underline"
//                 >
//                   {selectedCoin.websiteUrl}
//                 </a>
//               </p>
//             </div>

//             {/* Suggestion */}
//             <p className="mt-6 font-bold text-lg text-yellow-400 text-center">
//               Suggestion: {getSuggestion(selectedCoin.percent)}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default PricePage;

// import React, { useState, useEffect, useMemo } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import Navbar from "../components/Navbar";

// const API_KEY = "n+W4A157ev/JP1HwXuqjp9dTDeZav4Ie/VpQK46jewY=";
// const COINS_URL = "https://openapiv1.coinstats.app/coins?currency=USD";
// const CHART_URL = (id) =>
//   `https://openapiv1.coinstats.app/coins/${id}/charts?period=24h&currency=USD`;
// const GLOBAL_CHART_URL =
//   "https://openapiv1.coinstats.app/coins/bitcoin/charts?period=24h&currency=USD";

// const PricePage = () => {
//   const [darkMode, setDarkMode] = useState(true);
//   const [cryptoData, setCryptoData] = useState([]);
//   const [globalChart, setGlobalChart] = useState([]);
//   const [coinChart, setCoinChart] = useState([]);
//   const [selectedCoin, setSelectedCoin] = useState(null);
//   const [lastUpdatedAt, setLastUpdatedAt] = useState(null);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   // dark mode handler
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   // normalize API data
//   const normalizeCoins = (data) => {
//     if (!data) return [];
//     if (Array.isArray(data)) return data;
//     if (data.coins) return data.coins;
//     if (data.result) return data.result;
//     return [];
//   };

//   // fetch coins
//   const fetchCrypto = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(COINS_URL, {
//         headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
//       });
//       const data = await res.json();
//       const coins = normalizeCoins(data);
//       setCryptoData(coins);
//       setLastUpdatedAt(new Date());
//     } catch (err) {
//       console.error("fetchCrypto error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // fetch global chart
//   const fetchGlobalChart = async () => {
//     try {
//       const res = await fetch(GLOBAL_CHART_URL, {
//         headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
//       });
//       const data = await res.json();
//       const formatted = (data || []).map((item) => ({
//         time: new Date(item[0]).toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         price: item[1],
//       }));
//       setGlobalChart(formatted);
//       setLastUpdatedAt(new Date());
//     } catch (err) {
//       console.error("fetchGlobalChart error:", err);
//     }
//   };

//   // fetch selected coin chart
//   const fetchCoinChart = async (coinId) => {
//     try {
//       const res = await fetch(CHART_URL(coinId), {
//         headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
//       });
//       const data = await res.json();
//       const formatted = (data || []).map((item) => ({
//         time: new Date(item[0]).toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         price: item[1],
//       }));
//       setCoinChart(formatted);
//     } catch (err) {
//       console.error("fetchCoinChart error:", err);
//       setCoinChart([]);
//     }
//   };

//   // initial + refresh
//   useEffect(() => {
//     fetchCrypto();
//     fetchGlobalChart();
//     const interval = setInterval(() => {
//       fetchCrypto();
//       fetchGlobalChart();
//     }, 60_000);
//     return () => clearInterval(interval);
//   }, []);

//   // update when coin selected
//   useEffect(() => {
//     if (!selectedCoin) {
//       setCoinChart([]);
//       return;
//     }
//     fetchCoinChart(selectedCoin.id);
//     const i = setInterval(() => fetchCoinChart(selectedCoin.id), 30_000);
//     return () => clearInterval(i);
//   }, [selectedCoin]);

//   // derived data
//   const gainers = useMemo(() => {
//     return [...cryptoData]
//       .filter((c) => c && typeof c.priceChange1d === "number")
//       .sort((a, b) => b.priceChange1d - a.priceChange1d)
//       .slice(0, 5);
//   }, [cryptoData]);

//   const losers = useMemo(() => {
//     return [...cryptoData]
//       .filter((c) => c && typeof c.priceChange1d === "number")
//       .sort((a, b) => a.priceChange1d - b.priceChange1d)
//       .slice(0, 5);
//   }, [cryptoData]);

//   const topByMarketCap = useMemo(() => {
//     return [...cryptoData]
//       .filter((c) => c && typeof c.marketCap === "number")
//       .sort((a, b) => b.marketCap - a.marketCap)
//       .slice(0, 5);
//   }, [cryptoData]);

//   const filteredCoins = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     if (!q) return cryptoData;
//     return cryptoData.filter(
//       (c) =>
//         c.name?.toLowerCase().includes(q) ||
//         c.symbol?.toLowerCase().includes(q)
//     );
//   }, [cryptoData, search]);

//   // suggestion
//   const getSuggestion = (coin) => {
//     if (!coin || typeof coin.priceChange1d !== "number") return "Hold";
//     const change = coin.priceChange1d;
//     if (change >= 5) return "Buy";
//     if (change <= -5) return "Sell";
//     return "Hold";
//   };

//   // safe number formatter
//   const safeNum = (v, decimals = 2) =>
//     typeof v === "number" ? v.toFixed(decimals) : "-";

//   return (
//     <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300">
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//       <div className="max-w-screen-2xl mx-auto px-6 md:px-20 pt-24 pb-10 space-y-6">
//         {/* Global Chart */}
//         <section className="w-full bg-gray-800 rounded-lg p-4 shadow">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
//             <h2 className="text-xl font-semibold">
//               🌍 Global Market — Live (24h)
//             </h2>
//             <div className="text-sm text-gray-300">
//               {lastUpdatedAt
//                 ? `Last update: ${lastUpdatedAt.toLocaleTimeString()}`
//                 : "Updating..."}
//             </div>
//           </div>

//           <div className="w-full h-72 md:h-80 mt-3">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={globalChart}>
//                 <XAxis dataKey="time" tick={{ fill: "#cbd5e1" }} />
//                 <YAxis tick={{ fill: "#cbd5e1" }} domain={["auto", "auto"]} />
//                 <Tooltip
//                   labelStyle={{ color: darkMode ? "#fff" : "#000" }}
//                   formatter={(value) =>
//                     new Intl.NumberFormat("en-US", {
//                       style: "currency",
//                       currency: "USD",
//                     }).format(value)
//                   }
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke="#10b981"
//                   strokeWidth={2}
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="text-xs text-gray-400 mt-2">
//             Times shown are local (HH:MM)
//           </div>
//         </section>

//         {/* Gainers / Losers / Market Cap */}
//         <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Top 5 Gainers */}
//           <div className="bg-gray-800 rounded-lg p-4 shadow">
//             <h3 className="font-semibold mb-3">Top 5 Gainers (24h)</h3>
//             <ul className="space-y-3">
//               {gainers.map((c) => (
//                 <li
//                   key={c.id}
//                   className="flex items-center justify-between gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
//                   onClick={() => {
//                     setSelectedCoin(c);
//                     fetchCoinChart(c.id);
//                   }}
//                 >
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={c.icon}
//                       alt={c.name}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <div>
//                       <div className="text-sm font-medium">{c.name}</div>
//                       <div className="text-xs text-gray-400">
//                         {c.symbol?.toUpperCase()}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-sm">${safeNum(c.price, 4)}</div>
//                     <div
//                       className={`text-xs ${
//                         c.priceChange1d >= 0
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {safeNum(c.priceChange1d, 2)}%
//                     </div>
//                   </div>
//                 </li>
//               ))}
//               {!gainers.length && (
//                 <li className="text-sm text-gray-400">No data</li>
//               )}
//             </ul>
//           </div>

//           {/* Top 5 Losers */}
//           <div className="bg-gray-800 rounded-lg p-4 shadow">
//             <h3 className="font-semibold mb-3">Top 5 Losers (24h)</h3>
//             <ul className="space-y-3">
//               {losers.map((c) => (
//                 <li
//                   key={c.id}
//                   className="flex items-center justify-between gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
//                   onClick={() => {
//                     setSelectedCoin(c);
//                     fetchCoinChart(c.id);
//                   }}
//                 >
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={c.icon}
//                       alt={c.name}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <div>
//                       <div className="text-sm font-medium">{c.name}</div>
//                       <div className="text-xs text-gray-400">
//                         {c.symbol?.toUpperCase()}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-sm">${safeNum(c.price, 4)}</div>
//                     <div
//                       className={`text-xs ${
//                         c.priceChange1d >= 0
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {safeNum(c.priceChange1d, 2)}%
//                     </div>
//                   </div>
//                 </li>
//               ))}
//               {!losers.length && (
//                 <li className="text-sm text-gray-400">No data</li>
//               )}
//             </ul>
//           </div>

//           {/* Top 5 by Market Cap */}
//           <div className="bg-gray-800 rounded-lg p-4 shadow">
//             <h3 className="font-semibold mb-3">Top 5 by Market Cap</h3>
//             <ul className="space-y-3">
//               {topByMarketCap.map((c) => (
//                 <li
//                   key={c.id}
//                   className="flex items-center justify-between gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
//                   onClick={() => {
//                     setSelectedCoin(c);
//                     fetchCoinChart(c.id);
//                   }}
//                 >
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={c.icon}
//                       alt={c.name}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <div>
//                       <div className="text-sm font-medium">{c.name}</div>
//                       <div className="text-xs text-gray-400">
//                         {c.symbol?.toUpperCase()}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-sm">${safeNum(c.price, 4)}</div>
//                     <div className="text-xs text-gray-400">
//                       $
//                       {c.marketCap
//                         ? Number(c.marketCap).toLocaleString()
//                         : "-"}
//                     </div>
//                   </div>
//                 </li>
//               ))}
//               {!topByMarketCap.length && (
//                 <li className="text-sm text-gray-400">No data</li>
//               )}
//             </ul>
//           </div>
//         </section>

//         {/* Search + Table */}
//         <section className="bg-gray-800 rounded-lg p-4 shadow">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
//             <h3 className="text-lg font-semibold">All Coins</h3>
//             <div className="flex items-center gap-2 w-full md:w-1/3">
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search by name or symbol..."
//                 className="w-full px-3 py-2 rounded bg-gray-700 placeholder-gray-300 focus:outline-none"
//               />
//               <button
//                 onClick={() => {
//                   fetchCrypto();
//                 }}
//                 className="px-3 py-2 rounded bg-green-600 hover:bg-green-500"
//                 title="Refresh"
//               >
//                 Refresh
//               </button>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead>
//                 <tr className="border-b border-gray-700 text-gray-300">
//                   <th className="py-2 px-2 text-left">Coin</th>
//                   <th className="py-2 px-2 text-right">Price</th>
//                   <th className="py-2 px-2 text-right">1H</th>
//                   <th className="py-2 px-2 text-right">24H</th>
//                   <th className="py-2 px-2 text-right">7D</th>
//                   <th className="py-2 px-2 text-right">Market Cap</th>
//                   <th className="py-2 px-2 text-right">Volume (24h)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCoins.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="py-4 text-center text-gray-400"
//                     >
//                       {loading ? "Loading..." : "No coins matched"}
//                     </td>
//                   </tr>
//                 )}

//                 {filteredCoins.map((coin) => (
//                   <tr
//                     key={coin.id}
//                     className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
//                     onClick={() => {
//                       setSelectedCoin(coin);
//                       fetchCoinChart(coin.id);
//                       window.scrollTo({ top: 0, behavior: "smooth" });
//                     }}
//                   >
//                     <td className="py-2 px-2 flex items-center gap-3">
//                       <img
//                         src={coin.icon}
//                         alt={coin.name}
//                         className="w-6 h-6 rounded-full"
//                       />
//                       <div>
//                         <div className="text-sm font-medium">{coin.name}</div>
//                         <div className="text-xs text-gray-400">
//                           {coin.symbol?.toUpperCase()}
//                         </div>
//                       </div>
//                     </td>
//                     <td className="py-2 px-2 text-right">
//                       ${safeNum(coin.price, 4)}
//                     </td>
//                     <td
//                       className={`py-2 px-2 text-right ${
//                         coin.priceChange1h >= 0
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {safeNum(coin.priceChange1h, 2)}%
//                     </td>
//                     <td
//                       className={`py-2 px-2 text-right ${
//                         coin.priceChange1d >= 0
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {safeNum(coin.priceChange1d, 2)}%
//                     </td>
//                     <td
//                       className={`py-2 px-2 text-right ${
//                         coin.priceChange7d >= 0
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {safeNum(coin.priceChange7d, 2)}%
//                     </td>
//                     <td className="py-2 px-2 text-right">
//                       $
//                       {coin.marketCap
//                         ? Number(coin.marketCap).toLocaleString()
//                         : "-"}
//                     </td>
//                     <td className="py-2 px-2 text-right">
//                       $
//                       {coin.volume
//                         ? Number(coin.volume).toLocaleString()
//                         : "-"}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Fullscreen Modal */}
//         {selectedCoin && (
//           <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
//             <div className="p-6 max-w-3xl mx-auto">
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedCoin(null)}
//                 className="text-red-400 hover:text-red-600 font-bold text-xl float-right"
//               >
//                 ✕
//               </button>

//               {/* Header */}
//               <div className="flex flex-col items-center text-center mt-6">
//                 <img
//                   src={selectedCoin.icon}
//                   alt={selectedCoin.name}
//                   className="w-14 h-14 mb-3 rounded-full"
//                 />
//                 <h2 className="text-2xl font-bold">{selectedCoin.name}</h2>
//                 <p className="text-gray-400 text-sm mb-2">
//                   {selectedCoin.symbol?.toUpperCase()}
//                 </p>
//                 <p className="text-xl">
//                   ${safeNum(selectedCoin.price, 4)}
//                 </p>
//               </div>

//               {/* Suggestion */}
//               <div className="mt-4 text-center">
//                 <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm font-semibold">
//                   Suggestion: {getSuggestion(selectedCoin)}
//                 </span>
//               </div>

//               {/* Chart */}
//               <div className="w-full h-72 md:h-96 mt-6">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={coinChart}>
//                     <XAxis dataKey="time" tick={{ fill: "#cbd5e1" }} />
//                     <YAxis tick={{ fill: "#cbd5e1" }} domain={["auto", "auto"]} />
//                     <Tooltip
//                       labelStyle={{ color: darkMode ? "#fff" : "#000" }}
//                       formatter={(value) =>
//                         new Intl.NumberFormat("en-US", {
//                           style: "currency",
//                           currency: "USD",
//                         }).format(value)
//                       }
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="price"
//                       stroke="#3b82f6"
//                       strokeWidth={2}
//                       dot={false}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
//                 <div className="bg-gray-800 rounded p-3 text-center">
//                   <p className="text-xs text-gray-400">Market Cap</p>
//                   <p>
//                     $
//                     {selectedCoin.marketCap
//                       ? Number(selectedCoin.marketCap).toLocaleString()
//                       : "-"}
//                   </p>
//                 </div>
//                 <div className="bg-gray-800 rounded p-3 text-center">
//                   <p className="text-xs text-gray-400">24h Volume</p>
//                   <p>
//                     $
//                     {selectedCoin.volume
//                       ? Number(selectedCoin.volume).toLocaleString()
//                       : "-"}
//                   </p>
//                 </div>
//                 <div className="bg-gray-800 rounded p-3 text-center">
//                   <p className="text-xs text-gray-400">1H Change</p>
//                   <p
//                     className={
//                       selectedCoin.priceChange1h >= 0
//                         ? "text-green-400"
//                         : "text-red-400"
//                     }
//                   >
//                     {safeNum(selectedCoin.priceChange1h, 2)}%
//                   </p>
//                 </div>
//                 <div className="bg-gray-800 rounded p-3 text-center">
//                   <p className="text-xs text-gray-400">24H Change</p>
//                   <p
//                     className={
//                       selectedCoin.priceChange1d >= 0
//                         ? "text-green-400"
//                         : "text-red-400"
//                     }
//                   >
//                     {safeNum(selectedCoin.priceChange1d, 2)}%
//                   </p>
//                 </div>
//                 <div className="bg-gray-800 rounded p-3 text-center">
//                   <p className="text-xs text-gray-400">7D Change</p>
//                   <p
//                     className={
//                       selectedCoin.priceChange7d >= 0
//                         ? "text-green-400"
//                         : "text-red-400"
//                     }
//                   >
//                     {safeNum(selectedCoin.priceChange7d, 2)}%
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PricePage;

import React, { useState, useEffect, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../components/Navbar";

const API_KEY = "n+W4A157ev/JP1HwXuqjp9dTDeZav4Ie/VpQK46jewY=";
const COINS_URL = "https://openapiv1.coinstats.app/coins?currency=USD";
const CHART_URL = (id) =>
  `https://openapiv1.coinstats.app/coins/${id}/charts?period=24h&currency=USD`;
// fallback for "global" - using bitcoin chart as proxy
const GLOBAL_CHART_URL =
  "https://openapiv1.coinstats.app/coins/bitcoin/charts?period=24h&currency=USD";

const PricePage = () => {
  const [darkMode, setDarkMode] = useState(true); // default dark
  const [cryptoData, setCryptoData] = useState([]);
  const [globalChart, setGlobalChart] = useState([]);
  const [coinChart, setCoinChart] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [lastUpdatedAt, setLastUpdatedAt] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Apply dark class to root for Tailwind dark variants (optional)
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Normalize API payload to array of coins
  const normalizeCoins = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (data.coins) return data.coins;
    if (data.result) return data.result;
    // sometimes returns object with `coins` nested elsewhere
    return [];
  };

  // Fetch coins list
  const fetchCrypto = async () => {
    setLoading(true);
    try {
      const res = await fetch(COINS_URL, {
        headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
      });
      const data = await res.json();
      const coins = normalizeCoins(data);
      setCryptoData(coins);
      setLastUpdatedAt(new Date());
    } catch (err) {
      console.error("fetchCrypto error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch global chart (using bitcoin as proxy)
  const fetchGlobalChart = async () => {
    try {
      const res = await fetch(GLOBAL_CHART_URL, {
        headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
      });
      const data = await res.json();
      // data is array of [timestamp, price]
      const formatted = (data || []).map((item) => ({
        time: new Date(item[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        price: item[1],
      }));
      setGlobalChart(formatted);
      setLastUpdatedAt(new Date());
    } catch (err) {
      console.error("fetchGlobalChart error:", err);
    }
  };

  // Fetch selected coin chart
  const fetchCoinChart = async (coinId) => {
    try {
      const res = await fetch(CHART_URL(coinId), {
        headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
      });
      const data = await res.json();
      const formatted = (data || []).map((item) => ({
        time: new Date(item[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        price: item[1],
      }));
      setCoinChart(formatted);
    } catch (err) {
      console.error("fetchCoinChart error:", err);
      setCoinChart([]);
    }
  };

  // initial + periodic refresh
  useEffect(() => {
    fetchCrypto();
    fetchGlobalChart();
    const interval = setInterval(() => {
      fetchCrypto();
      fetchGlobalChart();
    }, 60_000); // 60s
    return () => clearInterval(interval);
  }, []);

  // when user selects a coin, fetch its chart and update periodically
  useEffect(() => {
    if (!selectedCoin) {
      setCoinChart([]);
      return;
    }
    fetchCoinChart(selectedCoin.id);
    const i = setInterval(() => fetchCoinChart(selectedCoin.id), 30_000);
    return () => clearInterval(i);
  }, [selectedCoin]);

  // derive gainers, losers, topByMarketCap
  const gainers = useMemo(() => {
    return [...cryptoData]
      .filter((c) => c && typeof c.priceChange1d === "number")
      .sort((a, b) => b.priceChange1d - a.priceChange1d)
      .slice(0, 5);
  }, [cryptoData]);

  const losers = useMemo(() => {
    return [...cryptoData]
      .filter((c) => c && typeof c.priceChange1d === "number")
      .sort((a, b) => a.priceChange1d - b.priceChange1d)
      .slice(0, 5);
  }, [cryptoData]);

  const topByMarketCap = useMemo(() => {
    return [...cryptoData]
      .filter((c) => c && typeof c.marketCap === "number")
      .sort((a, b) => b.marketCap - a.marketCap)
      .slice(0, 5);
  }, [cryptoData]);

  const filteredCoins = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return cryptoData;
    return cryptoData.filter(
      (c) =>
        c.name?.toLowerCase().includes(q) ||
        c.symbol?.toLowerCase().includes(q)
    );
  }, [cryptoData, search]);

  // determine suggestion: simple heuristic using 24h change
  const getSuggestion = (coin) => {
    if (!coin || typeof coin.priceChange1d !== "number") return "Hold";
    const change = coin.priceChange1d;
    if (change >= 5) return "Buy";
    if (change <= -5) return "Sell";
    return "Hold";
  };

  // small helper to format number safely
  const safeNum = (v, decimals = 2) =>
    typeof v === "number" ? v.toFixed(decimals) : "-";

  return (
    <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-20 pt-24 pb-10 space-y-6">
        {/* Global Chart */}
        <section className="w-full bg-gray-800 rounded-lg p-4 shadow">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <h2 className="text-xl font-semibold">🌍 Global Bitcoin Market — Live (24h)</h2>
            <div className="text-sm text-gray-300">
              {lastUpdatedAt ? `Last update: ${lastUpdatedAt.toLocaleTimeString()}` : "Updating..."}
            </div>
          </div>

          <div className="w-full h-72 md:h-80 mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={globalChart}>
                <XAxis dataKey="time" tick={{ fill: "#cbd5e1" }} interval="preserveEnd"/>
                <YAxis tick={{ fill: "#cbd5e1" }} domain={["auto", "auto"]} />
                <Tooltip
                  labelStyle={{ color: darkMode ? "#fff" : "#000" }}
                  formatter={(value) =>
                    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value)
                  }
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* time axis hint */}
          <div className="text-xs text-gray-400 mt-2">Times shown are local (HH:MM)</div>
        </section>

        {/* 3-column summary (gainers / losers / top 3) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: 5 Gainers */}
          <div className="bg-gray-800 rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-3">Top 5 Gainers (24h)</h3>
            <ul className="space-y-3">
              {gainers.map((c) => (
                <li
                  key={c.id}
                  className="flex items-center justify-between gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
                  onClick={() => {
                    setSelectedCoin(c);
                    fetchCoinChart(c.id);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img src={c.icon} alt={c.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="text-sm font-medium">{c.name}</div>
                      <div className="text-xs text-gray-400">{c.symbol?.toUpperCase()}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">${safeNum(c.price, 4)}</div>
                    <div className={`text-xs ${c.priceChange1d >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {safeNum(c.priceChange1d, 2)}%
                    </div>
                  </div>
                </li>
              ))}
              {!gainers.length && <li className="text-sm text-gray-400">No data</li>}
            </ul>
          </div>

          {/* Middle: 5 Losers */}
          <div className="bg-gray-800 rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-3">Top 5 Losers (24h)</h3>
            <ul className="space-y-3">
              {losers.map((c) => (
                <li
                  key={c.id}
                  className="flex items-center justify-between gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
                  onClick={() => {
                    setSelectedCoin(c);
                    fetchCoinChart(c.id);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img src={c.icon} alt={c.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="text-sm font-medium">{c.name}</div>
                      <div className="text-xs text-gray-400">{c.symbol?.toUpperCase()}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">${safeNum(c.price, 4)}</div>
                    <div className={`text-xs ${c.priceChange1d >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {safeNum(c.priceChange1d, 2)}%
                    </div>
                  </div>
                </li>
              ))}
              {!losers.length && <li className="text-sm text-gray-400">No data</li>}
            </ul>
          </div>

          {/* Right: Top 5 by Market Cap */}
          <div className="bg-gray-800 rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-3">Top 5 by Market Cap</h3>
            <ul className="space-y-3">
              {topByMarketCap.map((c) => (
                <li
                  key={c.id}
                  className="flex items-center justify-between gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
                  onClick={() => {
                    setSelectedCoin(c);
                    fetchCoinChart(c.id);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img src={c.icon} alt={c.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="text-sm font-medium">{c.name}</div>
                      <div className="text-xs text-gray-400">{c.symbol?.toUpperCase()}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">${safeNum(c.price, 4)}</div>
                    <div className="text-xs text-gray-400">${c.marketCap ? Number(c.marketCap).toLocaleString() : "-"}</div>
                  </div>
                </li>
              ))}
              {!topByMarketCap.length && <li className="text-sm text-gray-400">No data</li>}
            </ul>
          </div>
        </section>

        {/* Search + Table */}
        <section className="bg-gray-800 rounded-lg p-4 shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <h3 className="text-lg font-semibold">All Coins</h3>
            <div className="flex items-center gap-2 w-full md:w-1/3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or symbol..."
                className="w-full px-3 py-2 rounded bg-gray-700 placeholder-gray-300 focus:outline-none"
              />
              <button
                onClick={() => {
                  fetchCrypto(); // refresh on demand
                }}
                className="px-3 py-2 rounded bg-green-600 hover:bg-green-500"
                title="Refresh"
              >
                Refresh
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-gray-300">
                  <th className="py-2 px-2 text-left">Coin</th>
                  <th className="py-2 px-2 text-right">Price</th>
                  <th className="py-2 px-2 text-right">1H</th>
                  <th className="py-2 px-2 text-right">24H</th>
                  <th className="py-2 px-2 text-right">7D</th>
                  <th className="py-2 px-2 text-right">Market Cap</th>
                  <th className="py-2 px-2 text-right">Volume (24h)</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-4 text-center text-gray-400">
                      {loading ? "Loading..." : "No coins matched"}
                    </td>
                  </tr>
                )}

                {filteredCoins.map((coin) => (
                  <tr
                    key={coin.id}
                    className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setSelectedCoin(coin);
                      fetchCoinChart(coin.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <td className="py-2 px-2 flex items-center gap-3">
                      <img src={coin.icon} alt={coin.name} className="w-6 h-6 rounded-full" />
                      <div>
                        <div className="text-sm font-medium">{coin.name}</div>
                        <div className="text-xs text-gray-400">{coin.symbol?.toUpperCase()}</div>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-right">${safeNum(coin.price, 4)}</td>
                    <td className={`py-2 px-2 text-right ${coin.priceChange1h >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {safeNum(coin.priceChange1h, 2)}%
                    </td>
                    <td className={`py-2 px-2 text-right ${coin.priceChange1d >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {safeNum(coin.priceChange1d, 2)}%
                    </td>
                    <td className={`py-2 px-2 text-right ${coin.priceChange7d >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {safeNum(coin.priceChange7d, 2)}%
                    </td>
                    <td className="py-2 px-2 text-right">${coin.marketCap ? Number(coin.marketCap).toLocaleString() : "-"}</td>
                    <td className="py-2 px-2 text-right">${coin.volume ? Number(coin.volume).toLocaleString() : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Selected coin popup */}
        {selectedCoin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <div className="w-full max-w-3xl bg-gray-800 rounded-lg p-5 relative shadow-lg">
              <button
                className="absolute top-1 right-1 text-gray-300 hover:text-white"
                onClick={() => setSelectedCoin(null)}
              >
                ✖
              </button>

              {/* Chart on top */}
              <div className="w-full h-56 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={coinChart.length ? coinChart : coinChart }>
                    <XAxis dataKey="time" tick={{ fill: "#cbd5e1" }} />
                    <YAxis tick={{ fill: "#cbd5e1" }} domain={["auto", "auto"]} />
                    <Tooltip formatter={(value) => `$${Number(value).toFixed(2)}`} />
                    <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Details under the chart */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <img src={selectedCoin.icon} alt={selectedCoin.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="text-xl font-semibold">{selectedCoin.name} ({selectedCoin.symbol?.toUpperCase()})</div>
                    <div className="text-sm text-gray-400">{selectedCoin.websiteUrl || ""}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                  <div>
                    <div className="text-xs text-gray-400">Price</div>
                    <div className="font-medium">${safeNum(selectedCoin.price, 4)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Market Cap</div>
                    <div className="font-medium">${selectedCoin.marketCap ? Number(selectedCoin.marketCap).toLocaleString() : "-"}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">24h Volume</div>
                    <div className="font-medium">${selectedCoin.volume ? Number(selectedCoin.volume).toLocaleString() : "-"}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Supply</div>
                    <div className="font-medium">{selectedCoin.availableSupply ? Number(selectedCoin.availableSupply).toLocaleString() : "-"}</div>
                  </div>
                </div>

                <div className="mt-3">
                  <div className={`inline-block px-3 py-1 rounded ${getSuggestion(selectedCoin) === "Buy" ? "bg-green-600" : getSuggestion(selectedCoin) === "Sell" ? "bg-red-600" : "bg-yellow-500"} text-black font-semibold`}>
                    Suggestion: {getSuggestion(selectedCoin)} {getSuggestion(selectedCoin) === "Buy" ? "📈" : getSuggestion(selectedCoin) === "Sell" ? "📉" : "🤝"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricePage;

// import React, { useState, useEffect, useMemo } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import Navbar from "../components/Navbar";

// const API_KEY = "n+W4A157ev/JP1HwXuqjp9dTDeZav4Ie/VpQK46jewY=";
// const COINS_URL = "https://openapiv1.coinstats.app/coins?currency=USD";
// const CHART_URL = (id) =>
//   `https://openapiv1.coinstats.app/coins/${id}/charts?period=24h&currency=USD`;
// const GLOBAL_CHART_URL =
//   "https://openapiv1.coinstats.app/coins/bitcoin/charts?period=24h&currency=USD";

// const PricePage = () => {
//   const [darkMode, setDarkMode] = useState(true);
//   const [cryptoData, setCryptoData] = useState([]);
//   const [globalChart, setGlobalChart] = useState([]);
//   const [coinChart, setCoinChart] = useState([]);
//   const [selectedCoin, setSelectedCoin] = useState(null);
//   const [lastUpdatedAt, setLastUpdatedAt] = useState(null);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Dark mode toggle
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   // Helper: normalize coins array
//   const normalizeCoins = (data) => {
//     if (!data) return [];
//     if (Array.isArray(data)) return data;
//     if (data.coins) return data.coins;
//     if (data.result) return data.result;
//     return [];
//   };

//   // Fetch all coins
//   const fetchCrypto = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(COINS_URL, {
//         headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
//       });
//       const data = await res.json();
//       setCryptoData(normalizeCoins(data));
//       setLastUpdatedAt(new Date());
//     } catch (err) {
//       console.error("fetchCrypto error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch global Bitcoin chart
//   const fetchGlobalChart = async () => {
//     try {
//       const res = await fetch(GLOBAL_CHART_URL, {
//         headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
//       });
//       const data = await res.json();
//       const formatted = (data || []).map((item) => ({
//         time: new Date(item[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//         price: item[1],
//       }));
//       setGlobalChart(formatted);
//       setLastUpdatedAt(new Date());
//     } catch (err) {
//       console.error("fetchGlobalChart error:", err);
//     }
//   };

//   // Fetch selected coin chart
//   const fetchCoinChart = async (coinId) => {
//     if (!coinId) return setCoinChart([]);
//     try {
//       const res = await fetch(CHART_URL(coinId), {
//         headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
//       });
//       const data = await res.json();
//       const formatted = (data || []).map((item) => ({
//         time: new Date(item[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//         price: item[1],
//       }));
//       setCoinChart(formatted);
//     } catch (err) {
//       console.error("fetchCoinChart error:", err);
//       setCoinChart([]);
//     }
//   };

//   // Initial fetch + periodic refresh
//   useEffect(() => {
//     fetchCrypto();
//     fetchGlobalChart();
//     const interval = setInterval(() => {
//       fetchCrypto();
//       fetchGlobalChart();
//     }, 60_000);
//     return () => clearInterval(interval);
//   }, []);

//   // Fetch coin chart on selection
//   useEffect(() => {
//     if (!selectedCoin) return setCoinChart([]);
//     fetchCoinChart(selectedCoin.id);
//     const interval = setInterval(() => fetchCoinChart(selectedCoin.id), 30_000);
//     return () => clearInterval(interval);
//   }, [selectedCoin]);

//   // Derived lists
//   const gainers = useMemo(() => [...cryptoData].filter(c => c && typeof c.priceChange1d === "number").sort((a,b)=>b.priceChange1d-a.priceChange1d).slice(0,5), [cryptoData]);
//   const losers = useMemo(() => [...cryptoData].filter(c => c && typeof c.priceChange1d === "number").sort((a,b)=>a.priceChange1d-b.priceChange1d).slice(0,5), [cryptoData]);
//   const topByMarketCap = useMemo(() => [...cryptoData].filter(c => c && typeof c.marketCap === "number").sort((a,b)=>b.marketCap-a.marketCap).slice(0,5), [cryptoData]);

//   const filteredCoins = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     if (!q) return cryptoData;
//     return cryptoData.filter(c => c.name?.toLowerCase().includes(q) || c.symbol?.toLowerCase().includes(q));
//   }, [cryptoData, search]);

//   // Buy/Sell/Hold suggestion
//   const getSuggestion = (coin) => {
//     if (!coin || typeof coin.priceChange1d !== "number") return "Hold";
//     if (coin.priceChange1d >= 5) return "Buy";
//     if (coin.priceChange1d <= -5) return "Sell";
//     return "Hold";
//   };

//   const safeNum = (v, decimals = 2) => (typeof v === "number" ? v.toFixed(decimals) : "-");

//   return (
//     <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300">
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//       <div className="max-w-screen-2xl mx-auto px-6 md:px-20 pt-24 pb-10 space-y-6">
//         {/* Global Chart */}
//         <section className="w-full bg-gray-800 rounded-lg p-4 shadow">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
//             <h2 className="text-xl font-semibold">🌍 Global Bitcoin Market — Live (24h)</h2>
//             <div className="text-sm text-gray-300">
//               {lastUpdatedAt ? `Last update: ${lastUpdatedAt.toLocaleTimeString()}` : "Updating..."}
//             </div>
//           </div>
//           <div className="w-full h-72 md:h-80 mt-3">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={globalChart}>
//                 <XAxis dataKey="time" tick={{ fill: "#cbd5e1" }} interval="preserveEnd"/>
//                 <YAxis tick={{ fill: "#cbd5e1" }} domain={["auto", "auto"]} />
//                 <Tooltip
//                   labelStyle={{ color: darkMode ? "#fff" : "#000" }}
//                   formatter={(value) => `$${Number(value).toLocaleString()}`}
//                 />
//                 <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} dot={false} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="text-xs text-gray-400 mt-2">Times shown are local (HH:MM)</div>
//         </section>

//         {/* Top Gainers / Losers / Market Cap */}
//         <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {[{title:"Top 5 Gainers (24h)", data:gainers}, {title:"Top 5 Losers (24h)", data:losers}, {title:"Top 5 by Market Cap", data:topByMarketCap}].map((block, idx)=>(
//             <div key={idx} className="bg-gray-800 rounded-lg p-4 shadow">
//               <h3 className="font-semibold mb-3">{block.title}</h3>
//               <ul className="space-y-3">
//                 {block.data.map(c=>(
//                   <li key={c.id} className="flex items-center justify-between gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
//                     onClick={()=>{setSelectedCoin(c); fetchCoinChart(c.id)}}>
//                     <div className="flex items-center gap-3">
//                       <img src={c.icon} alt={c.name} className="w-8 h-8 rounded-full"/>
//                       <div>
//                         <div className="text-sm font-medium">{c.name}</div>
//                         <div className="text-xs text-gray-400">{c.symbol?.toUpperCase()}</div>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-sm">${safeNum(c.price, 4)}</div>
//                       {block.title!=="Top 5 by Market Cap" && (
//                         <div className={`text-xs ${c.priceChange1d>=0?"text-green-400":"text-red-400"}`}>
//                           {safeNum(c.priceChange1d,2)}%
//                         </div>
//                       )}
//                       {block.title==="Top 5 by Market Cap" && (
//                         <div className="text-xs text-gray-400">${c.marketCap?Number(c.marketCap).toLocaleString():"-"}</div>
//                       )}
//                     </div>
//                   </li>
//                 ))}
//                 {!block.data.length && <li className="text-sm text-gray-400">No data</li>}
//               </ul>
//             </div>
//           ))}
//         </section>

//         {/* Search + Table */}
//         <section className="bg-gray-800 rounded-lg p-4 shadow">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
//             <h3 className="text-lg font-semibold">All Coins</h3>
//             <div className="flex items-center gap-2 w-full md:w-1/3">
//               <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
//                 placeholder="Search by name or symbol..."
//                 className="w-full px-3 py-2 rounded bg-gray-700 placeholder-gray-300 focus:outline-none" />
//               <button onClick={fetchCrypto} className="px-3 py-2 rounded bg-green-600 hover:bg-green-500" title="Refresh">Refresh</button>
//             </div>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead>
//                 <tr className="border-b border-gray-700 text-gray-300">
//                   <th className="py-2 px-2 text-left">Coin</th>
//                   <th className="py-2 px-2 text-right">Price</th>
//                   <th className="py-2 px-2 text-right">1H</th>
//                   <th className="py-2 px-2 text-right">24H</th>
//                   <th className="py-2 px-2 text-right">7D</th>
//                   <th className="py-2 px-2 text-right">Market Cap</th>
//                   <th className="py-2 px-2 text-right">Volume (24h)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCoins.length===0 && (
//                   <tr>
//                     <td colSpan={7} className="py-4 text-center text-gray-400">{loading?"Loading...":"No coins matched"}</td>
//                   </tr>
//                 )}
//                 {filteredCoins.map(coin=>(
//                   <tr key={coin.id} className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
//                     onClick={()=>{setSelectedCoin(coin); fetchCoinChart(coin.id); window.scrollTo({top:0,behavior:"smooth"});}}>
//                     <td className="py-2 px-2 flex items-center gap-3">
//                       <img src={coin.icon} alt={coin.name} className="w-6 h-6 rounded-full"/>
//                       <div>
//                         <div className="text-sm font-medium">{coin.name}</div>
//                         <div className="text-xs text-gray-400">{coin.symbol?.toUpperCase()}</div>
//                       </div>
//                     </td>
//                     <td className="py-2 px-2 text-right">${safeNum(coin.price,4)}</td>
//                     <td className={`py-2 px-2 text-right ${coin.priceChange1h>=0?"text-green-400":"text-red-400"}`}>{safeNum(coin.priceChange1h,2)}%</td>
//                     <td className={`py-2 px-2 text-right ${coin.priceChange1d>=0?"text-green-400":"text-red-400"}`}>{safeNum(coin.priceChange1d,2)}%</td>
//                     <td className={`py-2 px-2 text-right ${coin.priceChange7d>=0?"text-green-400":"text-red-400"}`}>{safeNum(coin.priceChange7d,2)}%</td>
//                     <td className="py-2 px-2 text-right">${coin.marketCap?Number(coin.marketCap).toLocaleString():"-"}</td>
//                     <td className="py-2 px-2 text-right">${coin.volume?Number(coin.volume).toLocaleString():"-"}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Selected coin modal */}
//         {selectedCoin && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
//             <div className="w-full max-w-3xl bg-gray-800 rounded-lg p-5 relative shadow-lg">
//               <button className="absolute top-1 right-1 text-gray-300 hover:text-white" onClick={()=>setSelectedCoin(null)}>✖</button>
//               <div className="w-full h-56 mb-4">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={coinChart}>
//                     <XAxis dataKey="time" tick={{fill:"#cbd5e1"}}/>
//                     <YAxis tick={{fill:"#cbd5e1"}} domain={["auto","auto"]}/>
//                     <Tooltip formatter={(value)=>`$${Number(value).toFixed(2)}`}/>
//                     <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} dot={false}/>
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-3">
//                   <img src={selectedCoin.icon} alt={selectedCoin.name} className="w-10 h-10 rounded-full"/>
//                   <div>
//                     <div className="text-xl font-semibold">{selectedCoin.name} ({selectedCoin.symbol?.toUpperCase()})</div>
//                     <div className="text-sm text-gray-400">{selectedCoin.websiteUrl||""}</div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
//                   <div><div className="text-xs text-gray-400">Price</div><div className="font-medium">${safeNum(selectedCoin.price,4)}</div></div>
//                   <div><div className="text-xs text-gray-400">Market Cap</div><div className="font-medium">${selectedCoin.marketCap?Number(selectedCoin.marketCap).toLocaleString():"-"}</div></div>
//                   <div><div className="text-xs text-gray-400">24h Volume</div><div className="font-medium">${selectedCoin.volume?Number(selectedCoin.volume).toLocaleString():"-"}</div></div>
//                   <div><div className="text-xs text-gray-400">Supply</div><div className="font-medium">{selectedCoin.availableSupply?Number(selectedCoin.availableSupply).toLocaleString():"-"}</div></div>
//                 </div>
//                 <div className="mt-3">
//                   <div className={`inline-block px-3 py-1 rounded ${
//                     getSuggestion(selectedCoin)==="Buy"?"bg-green-600":getSuggestion(selectedCoin)==="Sell"?"bg-red-600":"bg-yellow-500"
//                   } text-black font-semibold`}>
//                     Suggestion: {getSuggestion(selectedCoin)} {getSuggestion(selectedCoin)==="Buy"?"📈":getSuggestion(selectedCoin)==="Sell"?"📉":"🤝"}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default PricePage;

// import React, { useState, useEffect, useMemo } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import Navbar from "../components/Navbar";

// const API_KEY = "n+W4A157ev/JP1HwXuqjp9dTDeZav4Ie/VpQK46jewY=";
// const COINS_URL = "https://openapiv1.coinstats.app/coins?currency=USD";
// const CHART_URL = (id) =>
//   `https://openapiv1.coinstats.app/coins/${id}/charts?period=24h&currency=USD`;
// const GLOBAL_CHART_URL =
//   "https://openapiv1.coinstats.app/coins/bitcoin/charts?period=24h&currency=USD";

// const PricePage = () => {
//   const [darkMode, setDarkMode] = useState(true);
//   const [cryptoData, setCryptoData] = useState([]);
//   const [globalChart, setGlobalChart] = useState([]);
//   const [coinChart, setCoinChart] = useState([]);
//   const [selectedCoin, setSelectedCoin] = useState(null);
//   const [lastUpdatedAt, setLastUpdatedAt] = useState(null);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Dark mode toggle
//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   // Helper: normalize coins array
//   const normalizeCoins = (data) => {
//     if (!data) return [];
//     if (Array.isArray(data)) return data;
//     if (data.coins) return data.coins;
//     if (data.result) return data.result;
//     return [];
//   };

//   // Fetch all coins
//   const fetchCrypto = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(COINS_URL, {
//         headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
//       });
//       const data = await res.json();
//       setCryptoData(normalizeCoins(data));
//       setLastUpdatedAt(new Date());
//     } catch (err) {
//       console.error("fetchCrypto error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch global Bitcoin chart
//   const fetchGlobalChart = async () => {
//     try {
//       const res = await fetch(GLOBAL_CHART_URL, {
//         headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
//       });
//       const data = await res.json();
//       const formatted = (data || []).map((item) => ({
//         timestamp: item[0],
//         date: new Date(item[0]).toLocaleDateString(),
//         time: new Date(item[0]).toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         price: item[1],
//       }));
//       setGlobalChart(formatted);
//       setLastUpdatedAt(new Date());
//     } catch (err) {
//       console.error("fetchGlobalChart error:", err);
//     }
//   };

//   // Fetch selected coin chart
//   const fetchCoinChart = async (coinId) => {
//     if (!coinId) return setCoinChart([]);
//     try {
//       const res = await fetch(CHART_URL(coinId), {
//         headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
//       });
//       const data = await res.json();
//       const formatted = (data || []).map((item) => ({
//         timestamp: item[0],
//         date: new Date(item[0]).toLocaleDateString(),
//         time: new Date(item[0]).toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         price: item[1],
//       }));
//       setCoinChart(formatted);
//     } catch (err) {
//       console.error("fetchCoinChart error:", err);
//       setCoinChart([]);
//     }
//   };

//   // Initial fetch + periodic refresh
//   useEffect(() => {
//     fetchCrypto();
//     fetchGlobalChart();
//     const interval = setInterval(() => {
//       fetchCrypto();
//       fetchGlobalChart();
//     }, 30_000); // every 30 seconds
//     return () => clearInterval(interval);
//   }, []);

//   // Fetch coin chart on selection
//   useEffect(() => {
//     if (!selectedCoin) return setCoinChart([]);
//     fetchCoinChart(selectedCoin.id);
//     const interval = setInterval(() => fetchCoinChart(selectedCoin.id), 30_000);
//     return () => clearInterval(interval);
//   }, [selectedCoin]);

//   // Derived lists
//   const gainers = useMemo(
//     () =>
//       [...cryptoData]
//         .filter((c) => c && typeof c.priceChange1d === "number")
//         .sort((a, b) => b.priceChange1d - a.priceChange1d)
//         .slice(0, 5),
//     [cryptoData]
//   );
//   const losers = useMemo(
//     () =>
//       [...cryptoData]
//         .filter((c) => c && typeof c.priceChange1d === "number")
//         .sort((a, b) => a.priceChange1d - b.priceChange1d)
//         .slice(0, 5),
//     [cryptoData]
//   );
//   const topByMarketCap = useMemo(
//     () =>
//       [...cryptoData]
//         .filter((c) => c && typeof c.marketCap === "number")
//         .sort((a, b) => b.marketCap - a.marketCap)
//         .slice(0, 5),
//     [cryptoData]
//   );

//   const filteredCoins = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     if (!q) return cryptoData;
//     return cryptoData.filter(
//       (c) =>
//         c.name?.toLowerCase().includes(q) || c.symbol?.toLowerCase().includes(q)
//     );
//   }, [cryptoData, search]);

//   const getSuggestion = (coin) => {
//     if (!coin || typeof coin.priceChange1d !== "number") return "Hold";
//     if (coin.priceChange1d >= 5) return "Buy";
//     if (coin.priceChange1d <= -5) return "Sell";
//     return "Hold";
//   };

//   const safeNum = (v, decimals = 2) =>
//     typeof v === "number" ? v.toFixed(decimals) : "-";

//   const getLineColor = (chart) => {
//     if (!chart || chart.length < 2) return "#10b981"; // default green
//     return chart[chart.length - 1].price >= chart[0].price
//       ? "#10b981"
//       : "#ef4444";
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300">
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//       <div className="max-w-screen-2xl mx-auto px-6 md:px-20 pt-24 pb-10 space-y-6">
//         {/* Global Chart */}
//         <section className="w-full bg-gray-800 rounded-lg p-4 shadow">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
//             <h2 className="text-xl font-semibold">
//               🌍 Global Bitcoin Market — Live (24h)
//             </h2>
//             <div className="text-sm text-gray-300">
//               {lastUpdatedAt
//                 ? `Last update: ${lastUpdatedAt.toLocaleTimeString()}`
//                 : "Updating..."}
//             </div>
//           </div>
//           <div className="w-full h-72 md:h-80 mt-3">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={globalChart}>
//                 <XAxis
//                   dataKey="time"
//                   tick={{ fill: "#cbd5e1" }}
//                   interval="preserveEnd"
//                 />
//                 <YAxis tick={{ fill: "#cbd5e1" }} domain={["auto", "auto"]} />
//                 {/* <Tooltip
//                   formatter={(value, name, props) => {
//                     const item = globalChart[props.index];
//                     const change = ((item.price - globalChart[0].price)/globalChart[0].price)*100;
//                     return [`$${Number(value).toLocaleString()} (${change.toFixed(2)}%)`,"Price"];
//                   }}
//                   labelFormatter={(label, name, props) => {
//                     const item = globalChart[props.index];
//                     return item ? `${item.date} ${item.time}` : label;
//                   }}
//                 /> */}
//                 <Tooltip
//                   formatter={(value, name, props) => {
//                     const item = props?.payload?.[0]?.payload; // safe access
//                     if (!item) return `$${Number(value).toLocaleString()}`;
//                     const change =
//                       ((item.price - globalChart[0].price) /
//                         globalChart[0].price) *
//                       100;
//                     return [
//                       `$${Number(value).toLocaleString()} (${change.toFixed(
//                         2
//                       )}%)`,
//                       "Price",
//                     ];
//                   }}
//                   labelFormatter={(label, payload) => {
//                     const item = payload?.[0]?.payload; // safe access
//                     return item ? `${item.date} ${item.time}` : label;
//                   }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke={getLineColor(globalChart)}
//                   strokeWidth={2}
//                   dot={false}
//                   isAnimationActive={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="text-xs text-gray-400 mt-2">
//             Times shown are local (HH:MM)
//           </div>
//         </section>

//         {/* Top Gainers / Losers / Market Cap */}
//         <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {[
//             { title: "Top 5 Gainers (24h)", data: gainers },
//             { title: "Top 5 Losers (24h)", data: losers },
//             { title: "Top 5 by Market Cap", data: topByMarketCap },
//           ].map((block, idx) => (
//             <div key={idx} className="bg-gray-800 rounded-lg p-4 shadow">
//               <h3 className="font-semibold mb-3">{block.title}</h3>
//               <ul className="space-y-3">
//                 {block.data.map((c) => (
//                   <li
//                     key={c.id}
//                     className="flex items-center justify-between gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
//                     onClick={() => {
//                       setSelectedCoin(c);
//                       fetchCoinChart(c.id);
//                     }}
//                   >
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={c.icon}
//                         alt={c.name}
//                         className="w-8 h-8 rounded-full"
//                       />
//                       <div>
//                         <div className="text-sm font-medium">{c.name}</div>
//                         <div className="text-xs text-gray-400">
//                           {c.symbol?.toUpperCase()}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-sm">${safeNum(c.price, 4)}</div>
//                       {block.title !== "Top 5 by Market Cap" && (
//                         <div
//                           className={`text-xs ${
//                             c.priceChange1d >= 0
//                               ? "text-green-400"
//                               : "text-red-400"
//                           }`}
//                         >
//                           {safeNum(c.priceChange1d, 2)}%
//                         </div>
//                       )}
//                       {block.title === "Top 5 by Market Cap" && (
//                         <div className="text-xs text-gray-400">
//                           $
//                           {c.marketCap
//                             ? Number(c.marketCap).toLocaleString()
//                             : "-"}
//                         </div>
//                       )}
//                     </div>
//                   </li>
//                 ))}
//                 {!block.data.length && (
//                   <li className="text-sm text-gray-400">No data</li>
//                 )}
//               </ul>
//             </div>
//           ))}
//         </section>

//         {/* Search + Table */}
//         <section className="bg-gray-800 rounded-lg p-4 shadow">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
//             <h3 className="text-lg font-semibold">All Coins</h3>
//             <div className="flex items-center gap-2 w-full md:w-1/3">
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search by name or symbol..."
//                 className="w-full px-3 py-2 rounded bg-gray-700 placeholder-gray-300 focus:outline-none"
//               />
//               <button
//                 onClick={fetchCrypto}
//                 className="px-3 py-2 rounded bg-green-600 hover:bg-green-500"
//                 title="Refresh"
//               >
//                 Refresh
//               </button>
//             </div>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead>
//                 <tr className="border-b border-gray-700 text-gray-300">
//                   <th className="py-2 px-2 text-left">Coin</th>
//                   <th className="py-2 px-2 text-right">Price</th>
//                   <th className="py-2 px-2 text-right">1H</th>
//                   <th className="py-2 px-2 text-right">24H</th>
//                   <th className="py-2 px-2 text-right">7D</th>
//                   <th className="py-2 px-2 text-right">Market Cap</th>
//                   <th className="py-2 px-2 text-right">Volume (24h)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCoins.length === 0 && (
//                   <tr>
//                     <td colSpan={7} className="py-4 text-center text-gray-400">
//                       {loading ? "Loading..." : "No coins matched"}
//                     </td>
//                   </tr>
//                 )}
//                 {filteredCoins.map((coin) => (
//                   <tr
//                     key={coin.id}
//                     className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
//                     onClick={() => {
//                       setSelectedCoin(coin);
//                       fetchCoinChart(coin.id);
//                       window.scrollTo({ top: 0, behavior: "smooth" });
//                     }}
//                   >
//                     <td className="py-2 px-2 flex items-center gap-3">
//                       <img
//                         src={coin.icon}
//                         alt={coin.name}
//                         className="w-6 h-6 rounded-full"
//                       />
//                       <div>
//                         <div className="text-sm font-medium">{coin.name}</div>
//                         <div className="text-xs text-gray-400">
//                           {coin.symbol?.toUpperCase()}
//                         </div>
//                       </div>
//                     </td>
//                     <td className="py-2 px-2 text-right">
//                       ${safeNum(coin.price, 4)}
//                     </td>
//                     <td
//                       className={`py-2 px-2 text-right ${
//                         coin.priceChange1h >= 0
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {safeNum(coin.priceChange1h, 2)}%
//                     </td>
//                     <td
//                       className={`py-2 px-2 text-right ${
//                         coin.priceChange1d >= 0
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {safeNum(coin.priceChange1d, 2)}%
//                     </td>
//                     <td
//                       className={`py-2 px-2 text-right ${
//                         coin.priceChange7d >= 0
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {safeNum(coin.priceChange7d, 2)}%
//                     </td>
//                     <td className="py-2 px-2 text-right">
//                       $
//                       {coin.marketCap
//                         ? Number(coin.marketCap).toLocaleString()
//                         : "-"}
//                     </td>
//                     <td className="py-2 px-2 text-right">
//                       $
//                       {coin.volume ? Number(coin.volume).toLocaleString() : "-"}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Selected coin modal */}
//         {selectedCoin && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
//             <div className="w-full max-w-3xl bg-gray-800 rounded-lg p-5 relative shadow-lg">
//               <button
//                 className="absolute top-1 right-1 text-gray-300 hover:text-white"
//                 onClick={() => setSelectedCoin(null)}
//               >
//                 ✖
//               </button>
//               <div className="w-full h-56 mb-4">
//                 {/* <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={coinChart}>
//                     <XAxis dataKey="time" tick={{ fill: "#cbd5e1" }} />
//                     <YAxis
//                       tick={{ fill: "#cbd5e1" }}
//                       domain={["auto", "auto"]}
//                     /> */}

//                     {/* <Tooltip
//                       formatter={(value, name, props) => {
//                         const item = coinChart[props.index];
//                         const change = ((item.price - coinChart[0].price)/coinChart[0].price)*100;
//                         return [`$${Number(value).toLocaleString()} (${change.toFixed(2)}%)`,"Price"];
//                       }}
//                       labelFormatter={(label, name, props)=>{
//                         const item = coinChart[props.index];
//                         return item ? `${item.date} ${item.time}` : label;
//                       }}
//                     /> */}
//                     {/* <Tooltip
//                       formatter={(value, name, props) => {
//                         const item = props?.payload?.[0]?.payload; // safe access
//                         if (!item) return `$${Number(value).toLocaleString()}`;
//                         const change =
//                           ((item.price - globalChart[0].price) /
//                             globalChart[0].price) *
//                           100;
//                         return [
//                           `$${Number(value).toLocaleString()} (${change.toFixed(
//                             2
//                           )}%)`,
//                           "Price",
//                         ];
//                       }}
//                       labelFormatter={(label, payload) => {
//                         const item = payload?.[0]?.payload; // safe access
//                         return item ? `${item.date} ${item.time}` : label;
//                       }}
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="price"
//                       stroke={getLineColor(coinChart)}
//                       strokeWidth={2}
//                       dot={false}
//                       isAnimationActive={false}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer> */}


//                 <ResponsiveContainer width="100%" height={300}>
//   <LineChart data={globalChart}>
//     <XAxis dataKey="time" tick={{ fill: "#cbd5e1" }} />
//     <YAxis
//       tick={{ fill: "#cbd5e1" }}
//       domain={[
//         (dataMin) => Math.floor(dataMin * 0.995),
//         (dataMax) => Math.ceil(dataMax * 1.005)
//       ]}
//     />
//     <Tooltip
//       formatter={(value, name, props) => {
//         const item = props?.payload?.[0]?.payload;
//         if (!item) return `$${Number(value).toLocaleString()}`;
//         return `$${Number(value).toLocaleString()}`;
//       }}
//       labelFormatter={(label, payload) => {
//         const item = payload?.[0]?.payload;
//         if (!item) return label;
//         return `${item.time} — $${Number(item.price).toFixed(2)}`;
//       }}
//     />
//     <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} dot={false} />
//   </LineChart>
// </ResponsiveContainer>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={selectedCoin.icon}
//                     alt={selectedCoin.name}
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <div>
//                     <div className="text-xl font-semibold">
//                       {selectedCoin.name} ({selectedCoin.symbol?.toUpperCase()})
//                     </div>
//                     <div className="text-sm text-gray-400">
//                       {selectedCoin.websiteUrl || ""}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
//                   <div>
//                     <div className="text-xs text-gray-400">Price</div>
//                     <div className="font-medium">
//                       ${safeNum(selectedCoin.price, 4)}
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-xs text-gray-400">Market Cap</div>
//                     <div className="font-medium">
//                       $
//                       {selectedCoin.marketCap
//                         ? Number(selectedCoin.marketCap).toLocaleString()
//                         : "-"}
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-xs text-gray-400">24h Volume</div>
//                     <div className="font-medium">
//                       $
//                       {selectedCoin.volume
//                         ? Number(selectedCoin.volume).toLocaleString()
//                         : "-"}
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-xs text-gray-400">Supply</div>
//                     <div className="font-medium">
//                       {selectedCoin.availableSupply
//                         ? Number(selectedCoin.availableSupply).toLocaleString()
//                         : "-"}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-3">
//                   <div
//                     className={`inline-block px-3 py-1 rounded ${
//                       getSuggestion(selectedCoin) === "Buy"
//                         ? "bg-green-600"
//                         : getSuggestion(selectedCoin) === "Sell"
//                         ? "bg-red-600"
//                         : "bg-yellow-500"
//                     } text-black font-semibold`}
//                   >
//                     Suggestion: {getSuggestion(selectedCoin)}{" "}
//                     {getSuggestion(selectedCoin) === "Buy"
//                       ? "📈"
//                       : getSuggestion(selectedCoin) === "Sell"
//                       ? "📉"
//                       : "🤝"}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PricePage;
