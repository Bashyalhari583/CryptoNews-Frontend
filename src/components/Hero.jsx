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




import React, { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    {
      image: "/images/downtown-dubai.jpeg",
      title: "Dubai positions itself as a crypto hub",
      description: "The Emirate is attracting crypto firms and investment",
      button: "READ MORE",
    },
    {
      image: "/images/bitcoin1.jpeg",
      title: "Bitcoin adoption is growing worldwide",
      description: "More businesses are starting to accept Bitcoin payments",
      button: "READ MORE",
    },
    {
      image: "/images/bitcoin2.jpeg",
      title: "Ethereum leads smart contract innovation",
      description: "Developers are building the future of Web3 on Ethereum",
      button: "READ MORE",
    },
    {
      image: "/images/bitcoin1.jpeg",
      title: "Crypto market gains momentum",
      description: "Investors are optimistic about the future of digital assets",
      button: "READ MORE",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <section className="max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {slides[currentIndex].title}
          </h2>
          <p className="text-gray-300 mt-2">
            {slides[currentIndex].description}
          </p>
          <button className="mt-4 bg-gray-100 text-black px-4 py-2 rounded">
            {slides[currentIndex].button}
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
            <img
              src={slides[currentIndex].image}
              alt="Slide"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Dots Navigation Centered */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default Hero;



