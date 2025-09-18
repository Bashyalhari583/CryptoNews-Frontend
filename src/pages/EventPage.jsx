// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const EventPage = () => {
//   return (
//     <>
//     {/* <Navbar /> */}
    
//        <div className='text-3xl font-bold underline text-center mt-20'>
//         Welcome to the Event Page!
//       </div>
//     </>
//   )
// }

// export default EventPage 




// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);

//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
//       const data = await res.json();
//       setEvents(data.Data.slice(0, 10)); // show 9–10 events
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // update every 60s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//     <Navbar />
//     <section className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">📢 All Events</h2>
//       <ul className="space-y-4">
//         {events.map((event, idx) => (
//           <li key={idx} className="p-4 bg-gray-400 rounded-lg shadow hover:shadow-md">
//             <a href={event.url} target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-blue-600">
//               {event.title}
//             </a>
//             <p className="text-sm text-gray-600">{new Date(event.published_on * 1000).toLocaleString()}</p>
//             <p className="mt-2 text-gray-800">{event.body.slice(0, 120)}...</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//     </>
//   );
// };

// export default EventPage;



// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
//       const data = await res.json();
//       setEvents(data.Data.slice(0, 10)); // show 9–10 events
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // update every 60s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <section className="max-w-screen-2xl mx-auto p-6">
//         <h2 className="text-3xl font-bold mb-6 text-center text-white dark:text-black">
//           📢 Latest Crypto Events
//         </h2>

//         {/* Grid layout */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {events.map((event, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-800 dark:bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
//             >
//               {/* Title */}
//               <h3 className="text-lg font-semibold text-white dark:text-black mb-2">
//                 {event.title}
//               </h3>

//               {/* Published Date */}
//               <p className="text-xs text-gray-400 dark:text-gray-600 mb-3">
//                 {new Date(event.published_on * 1000).toLocaleString()}
//               </p>

//               {/* Short description */}
//               <p className="text-gray-300 dark:text-gray-700 text-sm mb-3">
//                 {event.body.slice(0, 120)}...
//               </p>

//               {/* Buttons */}
//               <div className="flex justify-between items-center">
//                 <button
//                   onClick={() => setSelectedEvent(event)}
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Read More
//                 </button>

//                 <a
//                   href={event.url}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-yellow-400 hover:underline text-sm"
//                 >
//                   Visit Source →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal for full event */}
//       {/* Modal for full event */}
// {selectedEvent && (
//   <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//     <div className="bg-gray-900 dark:bg-white max-w-xl w-full max-h-[85vh] p-6 rounded-xl shadow-lg relative flex flex-col">
//       {/* Close Button */}
//       <button
//         onClick={() => setSelectedEvent(null)}
//         className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
//       >
//         ✖
//       </button>

//       {/* Title */}
//       <h2 className="text-xl font-bold text-white dark:text-black mb-2">
//         {selectedEvent.title}
//       </h2>

//       {/* Date */}
//       <p className="text-xs text-gray-400 dark:text-gray-600 mb-3">
//         {new Date(selectedEvent.published_on * 1000).toLocaleString()}
//       </p>

// {/* Body (scrollable area) */}
// <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
//   <p className="text-gray-300 dark:text-gray-700 whitespace-pre-line text-sm leading-relaxed">
//     {selectedEvent.body}
//   </p>
// </div>


//       {/* Footer */}
//       <div className="mt-4 text-right">
//         <a
//           href={selectedEvent.url}
//           target="_blank"
//           rel="noreferrer"
//           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//         >
//           Go to Source
//         </a>
//       </div>
//     </div>
//   </div>

//       )}
//     </>
//   );
// };

// export default EventPage;



// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // const fetchEvents = async () => {
//   //   try {
//   //     const res = await fetch("https://api.coinmarketcal.com/v1/events", {
//   //       headers: {
//   //         Authorization: `Bearer 31BA8t66qT2OYAUk0vpKf8paqq8uUU3V2MXFVked`, // replace with your real key
//   //       },
//   //     });
//   //     const data = await res.json();
//   //     setEvents(data.body?.slice(0, 10) || []); // take first 10 events
//   //   } catch (error) {
//   //     console.error("Error fetching events:", error);
//   //   }
//   // };

//   const fetchEvents = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/api/events");
//     const data = await res.json();
//     setEvents(data.body?.slice(0, 10) || []);
//   } catch (error) {
//     console.error("Error fetching events:", error);
//   }
// };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <section className="max-w-screen-2xl mx-auto p-6">
//         <h2 className="text-3xl font-bold mb-6 text-center text-white dark:text-black">
//           📢 Latest Crypto Events
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-800 dark:bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
//             >
//               {/* Title */}
//               <h3 className="text-lg font-semibold text-white dark:text-black mb-2">
//                 {event.title}
//               </h3>

//               {/* Event Date */}
//               <p className="text-xs text-gray-400 dark:text-gray-600 mb-3">
//                 {event.date_event
//                   ? new Date(event.date_event).toLocaleString()
//                   : "No Date"}
//               </p>

//               {/* Description */}
//               <p className="text-gray-300 dark:text-gray-700 text-sm mb-3">
//                 {event.description
//                   ? event.description.slice(0, 120) + "..."
//                   : "No description available"}
//               </p>

//               {/* Buttons */}
//               <div className="flex justify-between items-center">
//                 <button
//                   onClick={() => setSelectedEvent(event)}
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Read More
//                 </button>

//                 {event.source && (
//                   <a
//                     href={event.source}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-yellow-400 hover:underline text-sm"
//                   >
//                     Visit Source →
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//           <div className="bg-gray-900 dark:bg-white max-w-xl w-full max-h-[85vh] p-6 rounded-xl shadow-lg relative flex flex-col">
//             {/* Close */}
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
//             >
//               ✖
//             </button>

//             {/* Title */}
//             <h2 className="text-xl font-bold text-white dark:text-black mb-2">
//               {selectedEvent.title}
//             </h2>

//             {/* Date */}
//             <p className="text-xs text-gray-400 dark:text-gray-600 mb-3">
//               {selectedEvent.date_event
//                 ? new Date(selectedEvent.date_event).toLocaleString()
//                 : "No Date"}
//             </p>

//             {/* Description */}
//             <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
//               <p className="text-gray-300 dark:text-gray-700 whitespace-pre-line text-sm leading-relaxed">
//                 {selectedEvent.description || "No description available"}
//               </p>
//             </div>

//             {/* Footer */}
//             <div className="mt-4 text-right">
//               {selectedEvent.source && (
//                 <a
//                   href={selectedEvent.source}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Go to Source
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;



// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Fetch events from backend
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/events");
//       const data = await res.json();

//       // backend बाट { events: [...] } पठाइएको हुन्छ
//       setEvents(data.events?.slice(0, 10) || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60 sec
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <section className="max-w-screen-2xl mx-auto p-6">
//         <h2 className="text-3xl font-bold mb-6 text-center text-white dark:text-black">
//           📢 Latest Crypto Events
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-800 dark:bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
//             >
//               {/* Title */}
//               <h3 className="text-lg font-semibold text-white dark:text-black mb-2">
//                 {event.title || "No Title"}
//               </h3>

//               {/* Event Date */}
//               <p className="text-xs text-gray-400 dark:text-gray-600 mb-3">
//                 {event.date_event
//                   ? new Date(event.date_event).toLocaleString()
//                   : "No Date"}
//               </p>

//               {/* Description */}
//               <p className="text-gray-300 dark:text-gray-700 text-sm mb-3">
//                 {event.description
//                   ? event.description.slice(0, 120) + "..."
//                   : "No description available"}
//               </p>

//               {/* Buttons */}
//               <div className="flex justify-between items-center">
//                 <button
//                   onClick={() => setSelectedEvent(event)}
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Read More
//                 </button>

//                 {event.source && (
//                   <a
//                     href={event.source}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-yellow-400 hover:underline text-sm"
//                   >
//                     Visit Source →
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//           <div className="bg-gray-900 dark:bg-white max-w-xl w-full max-h-[85vh] p-6 rounded-xl shadow-lg relative flex flex-col">
//             {/* Close */}
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
//             >
//               ✖
//             </button>

//             {/* Title */}
//             <h2 className="text-xl font-bold text-white dark:text-black mb-2">
//               {selectedEvent.title}
//             </h2>

//             {/* Date */}
//             <p className="text-xs text-gray-400 dark:text-gray-600 mb-3">
//               {selectedEvent.date_event
//                 ? new Date(selectedEvent.date_event).toLocaleString()
//                 : "No Date"}
//             </p>

//             {/* Description */}
//             <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
//               <p className="text-gray-300 dark:text-gray-700 whitespace-pre-line text-sm leading-relaxed">
//                 {selectedEvent.description || "No description available"}
//               </p>
//             </div>

//             {/* Footer */}
//             <div className="mt-4 text-right">
//               {selectedEvent.source && (
//                 <a
//                   href={selectedEvent.source}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Go to Source
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;




// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Fetch events from backend
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/events");
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 10) || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60 sec
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <section className="max-w-screen-2xl mx-auto p-6">
//         <h2 className="text-3xl font-bold mb-6 text-center text-white dark:text-black">
//           📢 Latest Crypto Events
//         </h2>

//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-800 dark:bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
//             >
//               {/* Title */}
//               <h3 className="text-lg font-semibold text-white dark:text-black mb-2">
//                 {event.title || "No Title"}
//               </h3>

//               {/* Event Date */}
//               <p className="text-xs text-gray-400 dark:text-gray-600 mb-2">
//                 {event.date_event
//                   ? new Date(event.date_event).toLocaleString()
//                   : "No Date"}
//               </p>

//               {/* Coins */}
//               {event.coins?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.coins.map((c) => (
//                     <span
//                       key={c.coin_id}
//                       className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full"
//                     >
//                       {c.symbol}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Categories */}
//               {event.categories?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.categories.map((cat) => (
//                     <span
//                       key={cat.category_id}
//                       className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
//                     >
//                       {cat.name}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Description */}
//               <p className="text-gray-300 dark:text-gray-700 text-sm mb-3">
//                 {event.description
//                   ? event.description.slice(0, 120) + "..."
//                   : "No description available"}
//               </p>

//               {/* Buttons */}
//               <div className="flex justify-between items-center">
//                 <button
//                   onClick={() => setSelectedEvent(event)}
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Read More
//                 </button>

//                 {event.source && (
//                   <a
//                     href={event.source}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-yellow-400 hover:underline text-sm"
//                   >
//                     Visit Source →
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
//           <div className="bg-gray-900 dark:bg-white max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-lg relative flex flex-col overflow-hidden">
//             {/* Close */}
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
//             >
//               ✖
//             </button>

//             {/* Title & Date */}
//             <div className="mb-4">
//               <h2 className="text-2xl font-bold text-white dark:text-black mb-1">
//                 {selectedEvent.title}
//               </h2>
//               <p className="text-xs text-gray-400 dark:text-gray-600">
//                 {selectedEvent.date_event
//                   ? new Date(selectedEvent.date_event).toLocaleString()
//                   : "No Date"}
//               </p>
//             </div>

//             {/* Coins & Categories */}
//             <div className="flex flex-wrap gap-2 mb-4">
//               {selectedEvent.coins?.map((c) => (
//                 <span
//                   key={c.coin_id}
//                   className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full"
//                 >
//                   {c.symbol}
//                 </span>
//               ))}
//               {selectedEvent.categories?.map((cat) => (
//                 <span
//                   key={cat.category_id}
//                   className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
//                 >
//                   {cat.name}
//                 </span>
//               ))}
//             </div>

//             {/* Description */}
//             <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide mb-4">
//               <p className="text-gray-300 dark:text-gray-700 whitespace-pre-line text-sm leading-relaxed">
//                 {selectedEvent.description || "No description available"}
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="text-sm text-gray-400 mb-4">
//               Votes: {selectedEvent.votes} | Views: {selectedEvent.views} | Confidence:{" "}
//               {selectedEvent.confidence} <br />
//               Trending: {selectedEvent.trending_score} | Popular: {selectedEvent.popular_score} | Significant:{" "}
//               {selectedEvent.significant_score} | Catalyst: {selectedEvent.catalyst_score}
//             </div>

//             {/* Source Button */}
//             {selectedEvent.source && (
//               <div className="text-right">
//                 <a
//                   href={selectedEvent.source}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Go to Source
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;




// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { FaThumbsUp, FaEye, FaBolt, FaFire, FaStar, FaCheckCircle } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Fetch events from backend
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/events");
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 10) || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <section className="max-w-screen-2xl mx-auto p-6">
//         <h2 className="text-3xl font-bold mb-6 text-center text-white dark:text-black">
//           📢 Latest Crypto Events
//         </h2>

//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-800 dark:bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
//             >
//               <h3 className="text-lg font-semibold text-white dark:text-black mb-2">
//                 {event.title || "No Title"}
//               </h3>

//               <p className="text-xs text-gray-400 dark:text-gray-600 mb-2">
//                 {event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}
//               </p>

//               {/* Coins */}
//               {event.coins?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.coins.map((c) => (
//                     <span
//                       key={c.coin_id}
//                       className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full"
//                     >
//                       {c.symbol}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Categories */}
//               {event.categories?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.categories.map((cat) => (
//                     <span
//                       key={cat.category_id}
//                       className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
//                     >
//                       {cat.name}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               <p className="text-gray-300 dark:text-gray-700 text-sm mb-3">
//                 {event.description ? event.description.slice(0, 120) + "..." : "No description available"}
//               </p>

//               <div className="flex justify-between items-center">
//                 <button
//                   onClick={() => setSelectedEvent(event)}
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Read More
//                 </button>

//                 {event.source && (
//                   <a
//                     href={event.source}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-yellow-400 hover:underline text-sm"
//                   >
//                     Visit Source →
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
//           <div className="bg-gray-900 dark:bg-white max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-lg relative flex flex-col overflow-hidden">
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
//             >
//               ✖
//             </button>

//             <div className="mb-4">
//               <h2 className="text-2xl font-bold text-white dark:text-black mb-1">
//                 {selectedEvent.title}
//               </h2>
//               <p className="text-xs text-gray-400 dark:text-gray-600">
//                 {selectedEvent.date_event ? new Date(selectedEvent.date_event).toLocaleString() : "No Date"}
//               </p>
//             </div>

//             {/* Coins & Categories */}
//             <div className="flex flex-wrap gap-2 mb-4">
//               {selectedEvent.coins?.map((c) => (
//                 <span
//                   key={c.coin_id}
//                   className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full"
//                 >
//                   {c.symbol}
//                 </span>
//               ))}
//               {selectedEvent.categories?.map((cat) => (
//                 <span
//                   key={cat.category_id}
//                   className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
//                 >
//                   {cat.name}
//                 </span>
//               ))}
//             </div>

//             {/* Description */}
//             <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide mb-4">
//               <p className="text-gray-300 dark:text-gray-700 whitespace-pre-line text-sm leading-relaxed">
//                 {selectedEvent.description || "No description available"}
//               </p>
//             </div>

//             {/* Stats with icons */}
//             <div className="text-sm text-gray-400 mb-4 flex flex-wrap gap-4 items-center">
//               <div className="flex items-center gap-1"><FaThumbsUp className="text-blue-500" /> {selectedEvent.votes}</div>
//               <div className="flex items-center gap-1"><FaEye className="text-green-500" /> {selectedEvent.views}</div>
//               <div className="flex items-center gap-1"><FaCheckCircle className="text-yellow-400" /> {selectedEvent.confidence}</div>
//               <div className="flex items-center gap-1"><FaBolt className="text-purple-500" /> {selectedEvent.trending_score}</div>
//               <div className="flex items-center gap-1"><FaFire className="text-red-500" /> {selectedEvent.popular_score}</div>
//               <div className="flex items-center gap-1"><FaStar className="text-orange-400" /> {selectedEvent.significant_score}</div>
//             </div>

//             {selectedEvent.source && (
//               <div className="text-right">
//                 <a
//                   href={selectedEvent.source}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Go to Source
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;


// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { FaThumbsUp, FaEye, FaBolt, FaFire, FaStar, FaCheckCircle } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Fetch events from backend
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/events");
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 10) || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <section className="max-w-screen-2xl mx-auto p-6">
//         <h2 className="text-3xl font-bold mb-6 text-center text-white dark:text-black">
//           📢 Latest Crypto Events
//         </h2>

//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-800 dark:bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
//             >
//               {/* Event Title */}
//               <h3 className="text-lg font-semibold text-white dark:text-black mb-2">
//                 {event.title || "No Title"}
//               </h3>

//               {/* Event Date */}
//               <p className="text-xs text-gray-400 dark:text-gray-600 mb-2">
//                 {event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}
//               </p>

//               {/* Proof Image */}
//               {event.proof && (
//                 <div className="mb-3">
//                   <img
//                     src={event.proof}
//                     alt="Event proof"
//                     className="w-full h-32 object-cover rounded-md"
//                   />
//                 </div>
//               )}

//               {/* Coins */}
//               {event.coins?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.coins.map((c) => (
//                     <span
//                       key={c.coin_id}
//                       className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1"
//                     >
//                       {c.icon && (
//                         <img src={c.icon} alt={c.symbol} className="w-4 h-4 rounded-full" />
//                       )}
//                       {c.symbol}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Categories */}
//               {event.categories?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.categories.map((cat) => (
//                     <span
//                       key={cat.category_id}
//                       className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
//                     >
//                       {cat.name}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Description */}
//               <p className="text-gray-300 dark:text-gray-700 text-sm mb-3">
//                 {event.description ? event.description.slice(0, 120) + "..." : "No description available"}
//               </p>

//               {/* Buttons */}
//               <div className="flex justify-between items-center">
//                 <button
//                   onClick={() => setSelectedEvent(event)}
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Read More
//                 </button>

//                 {event.source && (
//                   <a
//                     href={event.source}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-yellow-400 hover:underline text-sm flex items-center gap-1"
//                   >
//                     🌐 Visit Source
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
//           <div className="bg-gray-900 dark:bg-white max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-lg relative flex flex-col overflow-hidden">
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
//             >
//               ✖
//             </button>

//             <div className="mb-4">
//               <h2 className="text-2xl font-bold text-white dark:text-black mb-1">
//                 {selectedEvent.title}
//               </h2>
//               <p className="text-xs text-gray-400 dark:text-gray-600">
//                 {selectedEvent.date_event ? new Date(selectedEvent.date_event).toLocaleString() : "No Date"}
//               </p>
//             </div>

//             {/* Proof Image */}
//             {selectedEvent.proof && (
//               <div className="mb-4">
//                 <img
//                   src={selectedEvent.proof}
//                   alt="Event proof"
//                   className="w-full h-40 object-cover rounded-md"
//                 />
//               </div>
//             )}

//             {/* Coins & Categories */}
//             <div className="flex flex-wrap gap-2 mb-4">
//               {selectedEvent.coins?.map((c) => (
//                 <span
//                   key={c.coin_id}
//                   className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1"
//                 >
//                   {c.icon && <img src={c.icon} alt={c.symbol} className="w-4 h-4 rounded-full" />}
//                   {c.symbol}
//                 </span>
//               ))}
//               {selectedEvent.categories?.map((cat) => (
//                 <span
//                   key={cat.category_id}
//                   className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
//                 >
//                   {cat.name}
//                 </span>
//               ))}
//             </div>

//             {/* Description */}
//             <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide mb-4">
//               <p className="text-gray-300 dark:text-gray-700 whitespace-pre-line text-sm leading-relaxed">
//                 {selectedEvent.description || "No description available"}
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="text-sm text-gray-400 mb-4 flex flex-wrap gap-4 items-center">
//               <div className="flex items-center gap-1"><FaThumbsUp className="text-blue-500" /> {selectedEvent.votes}</div>
//               <div className="flex items-center gap-1"><FaEye className="text-green-500" /> {selectedEvent.views}</div>
//               <div className="flex items-center gap-1"><FaCheckCircle className="text-yellow-400" /> {selectedEvent.confidence}</div>
//               <div className="flex items-center gap-1"><FaBolt className="text-purple-500" /> {selectedEvent.trending_score}</div>
//               <div className="flex items-center gap-1"><FaFire className="text-red-500" /> {selectedEvent.popular_score}</div>
//               <div className="flex items-center gap-1"><FaStar className="text-orange-400" /> {selectedEvent.significant_score}</div>
//             </div>

//             {/* Source Button */}
//             {selectedEvent.source && (
//               <div className="text-right">
//                 <a
//                   href={selectedEvent.source}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm flex items-center gap-1 justify-center"
//                 >
//                   🌐 Go to Source
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;



// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { FaThumbsUp, FaEye, FaBolt, FaFire, FaStar, FaCheckCircle } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Fetch events from backend
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/events");
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 10) || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000); // refresh every 60s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <section className="max-w-screen-2xl mx-auto p-6">
//         <h2 className="text-3xl font-bold mb-6 text-center text-white dark:text-black">
//           📢 Latest Crypto Events
//         </h2>

//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-800 dark:bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
//             >
//               <h3 className="text-lg font-semibold text-white dark:text-black mb-2">
//                 {event.title || "No Title"}
//               </h3>

//               <p className="text-xs text-gray-400 dark:text-gray-600 mb-2">
//                 {event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}
//               </p>

//               {/* Proof Image */}
//               {event.proof && (
//                 <div className="mb-3">
//                   <a href={event.proof} target="_blank" rel="noreferrer">
//                     <img
//                       src={event.proof}
//                       alt="Event proof"
//                       className="w-full h-32 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer"
//                     />
//                   </a>
//                 </div>
//               )}

//               {/* Coins */}
//               {event.coins?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.coins.map((c) => (
//                     <span
//                       key={c.coin_id}
//                       className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1"
//                     >
//                       {c.icon && <img src={c.icon} alt={c.symbol} className="w-4 h-4 rounded-full" />}
//                       {c.symbol}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Categories */}
//               {event.categories?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.categories.map((cat) => (
//                     <span
//                       key={cat.category_id}
//                       className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
//                     >
//                       {cat.name}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               <p className="text-gray-300 dark:text-gray-700 text-sm mb-3">
//                 {event.description ? event.description.slice(0, 120) + "..." : "No description available"}
//               </p>

//               <div className="flex justify-between items-center">
//                 <button
//                   onClick={() => setSelectedEvent(event)}
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Read More
//                 </button>

//                 {event.source && (
//                   <a
//                     href={event.source}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-yellow-400 hover:underline text-sm flex items-center gap-1"
//                   >
//                     🌐 Visit Source
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
//           <div className="bg-gray-900 dark:bg-white max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-lg relative flex flex-col overflow-hidden">
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
//             >
//               ✖
//             </button>

//             <div className="mb-4">
//               <h2 className="text-2xl font-bold text-white dark:text-black mb-1">
//                 {selectedEvent.title}
//               </h2>
//               <p className="text-xs text-gray-400 dark:text-gray-600">
//                 {selectedEvent.date_event ? new Date(selectedEvent.date_event).toLocaleString() : "No Date"}
//               </p>
//             </div>

//             {/* Proof Image with clickable full image */}
//             {selectedEvent.proof && (
//               <div className="mb-4 flex flex-col gap-2">
//                 <a href={selectedEvent.proof} target="_blank" rel="noreferrer">
//                   <img
//                     src={selectedEvent.proof}
//                     alt="Event proof"
//                     className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer"
//                   />
//                 </a>
//                 {selectedEvent.source && (
//                   <a
//                     href={selectedEvent.source}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm text-center"
//                   >
//                     🌐 Official Post
//                   </a>
//                 )}
//               </div>
//             )}

//             {/* Coins & Categories */}
//             <div className="flex flex-wrap gap-2 mb-4">
//               {selectedEvent.coins?.map((c) => (
//                 <span
//                   key={c.coin_id}
//                   className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1"
//                 >
//                   {c.icon && <img src={c.icon} alt={c.symbol} className="w-4 h-4 rounded-full" />}
//                   {c.symbol}
//                 </span>
//               ))}
//               {selectedEvent.categories?.map((cat) => (
//                 <span
//                   key={cat.category_id}
//                   className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
//                 >
//                   {cat.name}
//                 </span>
//               ))}
//             </div>

//             {/* Description */}
//             <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide mb-4">
//               <p className="text-gray-300 dark:text-gray-700 whitespace-pre-line text-sm leading-relaxed">
//                 {selectedEvent.description || "No description available"}
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="text-sm text-gray-400 mb-4 flex flex-wrap gap-4 items-center">
//               <div className="flex items-center gap-1"><FaThumbsUp className="text-blue-500" /> {selectedEvent.votes}</div>
//               <div className="flex items-center gap-1"><FaEye className="text-green-500" /> {selectedEvent.views}</div>
//               <div className="flex items-center gap-1"><FaCheckCircle className="text-yellow-400" /> {selectedEvent.confidence}</div>
//               <div className="flex items-center gap-1"><FaBolt className="text-purple-500" /> {selectedEvent.trending_score}</div>
//               <div className="flex items-center gap-1"><FaFire className="text-red-500" /> {selectedEvent.popular_score}</div>
//               <div className="flex items-center gap-1"><FaStar className="text-orange-400" /> {selectedEvent.significant_score}</div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;


// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { FaThumbsUp, FaEye, FaBolt, FaFire, FaStar, FaCheckCircle } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [popupImage, setPopupImage] = useState(null); // proof image popup

//   // Fetch events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/events");
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 10) || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <section className="max-w-screen-2xl mx-auto p-6">
//         <h2 className="text-3xl font-bold mb-6 text-center text-white dark:text-black">
//           📢 Latest Crypto Events
//         </h2>

//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-800 dark:bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
//             >
//               <h3 className="text-lg font-semibold text-white dark:text-black mb-2">
//                 {event.title || "No Title"}
//               </h3>

//               <p className="text-xs text-gray-400 dark:text-gray-600 mb-2">
//                 {event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}
//               </p>

//               {/* Proof Image */}
//               {event.proof && (
//                 <div className="mb-3">
//                   <img
//                     src={event.proof}
//                     alt="Event proof"
//                     onClick={() => setPopupImage({ url: event.proof, source: event.source })}
//                     className="w-full h-32 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer"
//                   />
//                 </div>
//               )}

//               {/* Coins */}
//               {event.coins?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.coins.map((c) => (
//                     <span
//                       key={c.coin_id}
//                       className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1"
//                     >
//                       {c.icon && <img src={c.icon} alt={c.symbol} className="w-4 h-4 rounded-full" />}
//                       {c.symbol}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Categories */}
//               {event.categories?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.categories.map((cat) => (
//                     <span
//                       key={cat.category_id}
//                       className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
//                     >
//                       {cat.name}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               <p className="text-gray-300 dark:text-gray-700 text-sm mb-3">
//                 {event.description ? event.description.slice(0, 120) + "..." : "No description available"}
//               </p>

//               <div className="flex justify-between items-center">
//                 <button
//                   onClick={() => setSelectedEvent(event)}
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   Read More
//                 </button>

//                 {event.source && (
//                   <a
//                     href={event.source}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-yellow-400 hover:underline text-sm flex items-center gap-1"
//                   >
//                     🌐 Visit Source
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Event Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
//           <div className="bg-gray-900 dark:bg-white max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-lg relative flex flex-col overflow-hidden">
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
//             >
//               ✖
//             </button>

//             <div className="mb-4">
//               <h2 className="text-2xl font-bold text-white dark:text-black mb-1">
//                 {selectedEvent.title}
//               </h2>
//               <p className="text-xs text-gray-400 dark:text-gray-600">
//                 {selectedEvent.date_event ? new Date(selectedEvent.date_event).toLocaleString() : "No Date"}
//               </p>
//             </div>

//             {/* Proof Image with Popup */}
//             {selectedEvent.proof && (
//               <div className="mb-4 flex flex-col gap-2">
//                 <img
//                   src={selectedEvent.proof}
//                   alt="Event proof"
//                   onClick={() => setPopupImage({ url: selectedEvent.proof, source: selectedEvent.source })}
//                   className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer"
//                 />
//                 {selectedEvent.source && (
//                   <a
//                     href={selectedEvent.source}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm text-center"
//                   >
//                     🌐 Official Post
//                   </a>
//                 )}
//               </div>
//             )}

//             {/* Description */}
//             <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide mb-4">
//               <p className="text-gray-300 dark:text-gray-700 whitespace-pre-line text-sm leading-relaxed">
//                 {selectedEvent.description || "No description available"}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Proof Image Popup */}
//       {popupImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100]">
//           <div className="relative max-w-4xl w-full p-4">
//             <button
//               onClick={() => setPopupImage(null)}
//               className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={popupImage.url}
//               alt="Proof Full"
//               className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
//             />
//             {popupImage.source && (
//               <div className="mt-4 text-center">
//                 <a
//                   href={popupImage.source}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
//                 >
//                   🌐 Go to Official Source
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;


import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaThumbsUp, FaEye, FaBolt, FaFire, FaStar, FaCheckCircle } from "react-icons/fa";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [popupImage, setPopupImage] = useState(null); // for image popup

  // Fetch events
  const fetchEvents = async () => {
    try {
      const res = await fetch("https://cryptonewsbackend.up.railway.app/api/events");
      const data = await res.json();
      setEvents(data.events?.slice(0, 12) || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <section className="max-w-screen-2xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-white dark:text-black">
          📢 Latest Crypto Events
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 dark:bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
            >
              <h3 className="text-lg font-semibold text-white dark:text-black mb-2">
                {event.title || "No Title"}
              </h3>

              <p className="text-xs text-gray-400 dark:text-gray-600 mb-2">
                {event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}
              </p>

              {/* Proof Image */}
              {event.proof && (
                <div className="mb-3">
                  <img
                    src={event.proof}
                    alt="Event proof"
                    onClick={() => setPopupImage(event.proof)}
                    className="w-full h-32 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              )}

              {/* Coins */}
              {event.coins?.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {event.coins.map((c) => (
                    <span
                      key={c.coin_id}
                      className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1"
                    >
                      {c.icon && <img src={c.icon} alt={c.symbol} className="w-4 h-4 rounded-full" />}
                      {c.symbol}
                    </span>
                  ))}
                </div>
              )}

              {/* Categories */}
              {event.categories?.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {event.categories.map((cat) => (
                    <span
                      key={cat.category_id}
                      className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
                    >
                      {cat.name}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-gray-300 dark:text-gray-700 text-sm mb-3">
                {event.description ? event.description.slice(0, 120) + "..." : "No description available"}
              </p>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
                >
                  Read More
                </button>

                {event.source && (
                  <a
                    href={event.source}
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-400 hover:underline text-sm flex items-center gap-1"
                  >
                    🌐 Visit Source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-900 dark:bg-white max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-lg relative flex flex-col overflow-hidden">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
            >
              ✖
            </button>

            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white dark:text-black mb-1">
                {selectedEvent.title}
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-600">
                {selectedEvent.date_event ? new Date(selectedEvent.date_event).toLocaleString() : "No Date"}
              </p>
            </div>

            {/* Proof Image with Popup */}
            {selectedEvent.proof && (
              <div className="mb-4 flex flex-col gap-2">
                <img
                  src={selectedEvent.proof}
                  alt="Event proof"
                  onClick={() => setPopupImage(selectedEvent.proof)}
                  className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer"
                />
                {selectedEvent.source && (
                  <a
                    href={selectedEvent.source}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm text-center"
                  >
                    🌐 Official Post
                  </a>
                )}
              </div>
            )}

            {/* Description */}
            <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide mb-4">
              <p className="text-gray-300 dark:text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                {selectedEvent.description || "No description available"}
              </p>
            </div>

            {/* Stats */}
            <div className="text-sm text-gray-400 mb-4 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-1"><FaThumbsUp className="text-blue-500" /> {selectedEvent.votes}</div>
              <div className="flex items-center gap-1"><FaEye className="text-green-500" /> {selectedEvent.views}</div>
              <div className="flex items-center gap-1"><FaCheckCircle className="text-yellow-400" /> {selectedEvent.confidence}</div>
              <div className="flex items-center gap-1"><FaBolt className="text-purple-500" /> {selectedEvent.trending_score}</div>
              <div className="flex items-center gap-1"><FaFire className="text-red-500" /> {selectedEvent.popular_score}</div>
              <div className="flex items-center gap-1"><FaStar className="text-orange-400" /> {selectedEvent.significant_score}</div>
            </div>
          </div>
        </div>
      )}

      {/* Proof Image Popup */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100]"
          onClick={() => setPopupImage(null)} // close on background click
        >
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
            >
              ✖
            </button>
            <img
              src={popupImage}
              alt="Proof Full"
              className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EventPage;
