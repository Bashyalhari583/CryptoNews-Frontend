import React from 'react'

const LatestNews = () => {
   const news = [
    "Bitcoin ETF gets approval",
    "Ethereum gas fees drop",
    "New crypto regulations in EU",
    "Dogecoin gains popularity",
  ];
  return (
    <>
      <section className="border rounded-lg p-4 ">
      <h2 className="text-2xl font-bold mb-4">📰 Latest Crypto News</h2>
      <div className="space-y-4 text-sm max-h-[600px] overflow-y-auto pr-2">
        <article className="border-b pb-2 mb-2">
    <p className="text-xs text-gray-400">Today · 2:45 AM</p>
    <p className="font-semibold text-gray-200">
      Crypto Charts Look 'So Broken and Bearish They’re Bullish'
    </p>
  </article>

  <article className="border-b pb-2 mb-2">
    <p className="text-xs text-gray-400">Yesterday · 11:45 PM</p>
    <p className="font-semibold text-gray-200">
      Bitcoin Tests Resistance Level Again
    </p>
  </article>

  <article className="border-b pb-2 mb-2">
    <p className="text-xs text-gray-400">Yesterday · 8:20 PM</p>
    <p className="font-semibold text-gray-200">
      Ethereum Gas Fees Drop to 6-Month Low
    </p>
  </article>

  <article className="border-b pb-2 mb-2">
    <p className="text-xs text-gray-400">2 Days Ago · 3:10 PM</p>
    <p className="font-semibold text-gray-200">
      Solana Surges After Major Network Upgrade
    </p>
  </article>

  <article>
    <p className="text-xs text-gray-400">2 Days Ago · 10:30 AM</p>
    <p className="font-semibold text-gray-200">
      Binance Faces Increased Regulatory Scrutiny
    </p>
  </article>
      </div>
    </section>
    </>
  )
}

export default LatestNews
