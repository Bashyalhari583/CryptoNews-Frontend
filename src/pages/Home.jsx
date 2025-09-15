import React from 'react'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import LatestNews from '../components/LatestNews'
import News from '../components/News'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4 pt-20 md:px-8 space-y-8">
      <Hero />

      <main className="max-w-screen-2xl mx-auto px-4 py-6 grid grid-cols-1 lg:flex gap-6">
      <LatestNews />
      {/* News Section */}
      <News />
      <Ticker />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default Home
