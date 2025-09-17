import React from 'react'

const NewsCard = ({ img, title, desc }) => {
  return (
    <>
      {/* <div className="bg-gray-100 text-black rounded-lg overflow-hidden dark:bg-gray-700 p-2"> */}
       <div className="bg-gray-800 rounded-lg overflow-hidden dark:bg-gray-800 p-2">
      <img src={img} alt={title} className="w-full h-40 object-cover rounded" />
      <div className="p-4 dark:text-white">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{desc}</p>
        <button className="text-sm text-blue-400 mt-2">READ MORE</button>
      </div>
    </div>
    </>
  )
}

export default NewsCard
