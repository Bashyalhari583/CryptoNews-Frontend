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


import React from 'react';
import NewsCard from '../components/NewsCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewsPage = () => {
  return (
    <>
      <Navbar />

      {/* Main Section aligned with Navbar */}
      <section className="max-w-screen-2xl mx-auto px-4 md:px-8 pt-20 pb-10">
        <h2 className="text-2xl font-bold mb-6">News</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
          <NewsCard
            img="/images/bitcoin1.jpeg"
            title="Bitcoin hits now all-time high"
            desc="Bitcoin surges post $60,000 as crypto market continues its bull run."
          />
          <NewsCard
            img="/images/bitcoin-price-fallchart.jpeg"
            title="Ethereum upgrades to Improve scalability"
            desc="Ethereum’s new fork enhances transaction efficiency."
          />
          <NewsCard
            img="/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg"
            title="Blockchain technology gains adoption"
            desc="Blockchain is being used across industries for security."
          />
          <NewsCard
            img="/images/bitcoin1.jpeg"
            title="Bitcoin hits now all-time high"
            desc="Bitcoin surges post $60,000 as crypto market continues its bull run."
          />
          <NewsCard
            img="/images/bitcoin-price-fallchart.jpeg"
            title="Ethereum upgrades to Improve scalability"
            desc="Ethereum’s new fork enhances transaction efficiency."
          />
          <NewsCard
            img="/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg"
            title="Blockchain technology gains adoption"
            desc="Blockchain is being used across industries for security."
          />
          <NewsCard
            img="/images/bitcoin1.jpeg"
            title="Bitcoin hits now all-time high"
            desc="Bitcoin surges post $60,000 as crypto market continues its bull run."
          />
          <NewsCard
            img="/images/bitcoin-price-fallchart.jpeg"
            title="Ethereum upgrades to Improve scalability"
            desc="Ethereum’s new fork enhances transaction efficiency."
          />
          <NewsCard
            img="/images/bitcoin-crypto-currency-on-digital-graphic-background.jpeg"
            title="Blockchain technology gains adoption"
            desc="Blockchain is being used across industries for security."
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewsPage;
