import React from 'react'

const Hero = () => {
  return (
    <>
       <section className="max-w-9xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Dubai positions itself as a crypto hub
        </h2>
        <p className="text-gray-300 mt-2">
          The Emirate is attracting crypto firms and investment
        </p>
        <button className="mt-4 bg-gray-100 text-black px-4 py-2 rounded">
          READ MORE
        </button>
      </div>
      <div className='flex justify-center md:justify-end'>
        <img
          src="/images/downtown-dubai.jpeg"
          alt="Dubai"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
    </>
  )
}

export default Hero
