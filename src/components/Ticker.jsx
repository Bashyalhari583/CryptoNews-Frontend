import React, { useState, useEffect } from "react";

const Ticker = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [search, setSearch] = useState("");
  const [timeframe, setTimeframe] = useState("1h"); // default

  const fetchCrypto = async () => {
    try {
      const response = await fetch(
        "https://openapiv1.coinstats.app/coins?currency=USD",
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "n+W4A157ev/JP1HwXuqjp9dTDeZav4Ie/VpQK46jewY=",
          },
        }
      );
      const data = await response.json();
      setCryptoData(data.result);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  };

  useEffect(() => {
    fetchCrypto();
    const interval = setInterval(fetchCrypto, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="border bg-gray-800 p-4 rounded-lg dark:bg-gray-800 w-full md:w-136 max-w-md">
      <h3 className="font-semibold mb-3 text-white text-lg">Crypto Ticker</h3>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table Header with Dropdown */}
      <div className="flex justify-between text-gray-300 font-semibold px-2 py-1 border-b border-gray-600 items-center">
        <span className="w-2/4">Name</span>
        <span className="w-1/4 text-right">Price</span>
        <span className="w-1/4 text-right">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="bg-gray-700 text-white rounded p-1 border border-gray-600"
          >
            <option value="1h">1H</option>
            <option value="24h">24H</option>
            <option value="7d">7D</option>
          </select>
        </span>
      </div>

      {/* Crypto List */}
      <div className="max-h-[32rem] overflow-y-auto scrollbar-hide">
        {cryptoData
          .filter((coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((coin) => {
            // Determine % change based on selected timeframe
            let percent;
            if (timeframe === "1h") percent = coin.priceChange1h ?? 0;
            else if (timeframe === "24h") percent = coin.priceChange ?? coin.priceChange1d ?? 0;
            else if (timeframe === "7d") percent = coin.priceChange ?? coin.priceChange7d ?? 0;

            return (
              <div
                key={coin.id}
                className="flex justify-between items-center text-white px-2 py-2 hover:bg-gray-700 rounded"
              >
                {/* Name */}
                <div className="flex items-center gap-2 w-1/2">
                  <img
                    src={coin.icon}
                    alt={coin.name}
                    className="w-5 h-5 rounded-full"
                  />
                  <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
                </div>

                {/* Price */}
                <span className="w-1/4 text-right">${coin.price.toFixed(4)}</span>

                {/* Selected % */}
                <span
                  className={`w-1/4 text-right ${
                    percent >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {percent.toFixed(2)}%
                </span>
              </div>
            );
          })}
      </div>
    </aside>
  );
};

export default Ticker;
