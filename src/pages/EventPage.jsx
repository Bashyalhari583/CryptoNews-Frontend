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


// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { FaThumbsUp, FaEye, FaBolt, FaFire, FaStar, FaCheckCircle } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [popupImage, setPopupImage] = useState(null); // for image popup

//   // Fetch events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch("https://cryptonewsbackend.up.railway.app/api/events");
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 12) || []);
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
//                     onClick={() => setPopupImage(event.proof)}
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
//                   onClick={() => setPopupImage(selectedEvent.proof)}
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

//       {/* Proof Image Popup */}
//       {popupImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100]"
//           onClick={() => setPopupImage(null)} // close on background click
//         >
//           <div className="relative max-w-4xl w-full p-4">
//             <button
//               onClick={() => setPopupImage(null)}
//               className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={popupImage}
//               alt="Proof Full"
//               className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;


// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import {
//   FaThumbsUp,
//   FaEye,
//   FaBolt,
//   FaFire,
//   FaStar,
//   FaCheckCircle,
// } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);

//   // Fetch events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 12) || []);
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
//     <div className="min-h-screen bg-gray-900 text-white">
//       <Navbar />

//       <section className="max-w-screen-2xl mx-auto p-6">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
//           📢 Latest Crypto Events
//         </h2>

//         {/* Events Grid */}
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
//             >
//               <h3 className="text-lg font-semibold text-white mb-2">
//                 {event.title || "No Title"}
//               </h3>

//               <p className="text-xs text-gray-400 mb-2">
//                 {event.date_event
//                   ? new Date(event.date_event).toLocaleString()
//                   : "No Date"}
//               </p>

//               {/* Proof Image */}
//               {event.proof && (
//                 <div className="mb-3">
//                   <img
//                     src={event.proof}
//                     alt="Event proof"
//                     onClick={() => setPopupImage(event.proof)}
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
//                       {c.icon && (
//                         <img
//                           src={c.icon}
//                           alt={c.symbol}
//                           className="w-4 h-4 rounded-full"
//                         />
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

//               <p className="text-gray-300 text-sm mb-3">
//                 {event.description
//                   ? event.description.slice(0, 120) + "..."
//                   : "No description available"}
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
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
//           <div className="bg-gray-800 text-white max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-lg relative flex flex-col overflow-hidden">
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
//             >
//               ✖
//             </button>

//             <div className="mb-4">
//               <h2 className="text-2xl font-bold mb-1">
//                 {selectedEvent.title}
//               </h2>
//               <p className="text-xs text-gray-400">
//                 {selectedEvent.date_event
//                   ? new Date(selectedEvent.date_event).toLocaleString()
//                   : "No Date"}
//               </p>
//             </div>

//             {/* Proof Image with Popup */}
//             {selectedEvent.proof && (
//               <div className="mb-4 flex flex-col gap-2">
//                 <img
//                   src={selectedEvent.proof}
//                   alt="Event proof"
//                   onClick={() => setPopupImage(selectedEvent.proof)}
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
//               <p className="text-gray-300 whitespace-pre-line text-sm leading-relaxed">
//                 {selectedEvent.description || "No description available"}
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="text-sm text-gray-400 mb-4 flex flex-wrap gap-4 items-center">
//               <div className="flex items-center gap-1">
//                 <FaThumbsUp className="text-blue-500" />{" "}
//                 {selectedEvent.votes || 0}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaEye className="text-green-500" />{" "}
//                 {selectedEvent.views || 0}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaCheckCircle className="text-yellow-400" />{" "}
//                 {selectedEvent.confidence || 0}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaBolt className="text-purple-500" />{" "}
//                 {selectedEvent.trending_score || 0}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaFire className="text-red-500" />{" "}
//                 {selectedEvent.popular_score || 0}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaStar className="text-orange-400" />{" "}
//                 {selectedEvent.significant_score || 0}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Proof Image Popup */}
//       {popupImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[100]"
//           onClick={() => setPopupImage(null)}
//         >
//           <div className="relative max-w-4xl w-full p-4">
//             <button
//               onClick={() => setPopupImage(null)}
//               className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={popupImage}
//               alt="Proof Full"
//               className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventPage;


// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import {
//   FaThumbsUp,
//   FaEye,
//   FaBolt,
//   FaFire,
//   FaStar,
//   FaCheckCircle,
//   FaLink,
// } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);

//   // Fetch events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 12) || []);
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
//         <h2 className="text-3xl font-bold mb-8 text-center text-white">
//           📢 Latest Crypto Events
//         </h2>

//         {/* Events Grid */}
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.03] flex flex-col"
//             >
//               {/* Title */}
//               <h3 className="text-lg font-bold text-white mb-1">
//                 {event.title || "No Title"}
//               </h3>

//               {/* Date */}
//               <p className="text-xs text-gray-400 mb-2">
//                 {event.date_event
//                   ? new Date(event.date_event).toLocaleString()
//                   : "No Date"}
//               </p>

//               {/* Proof Image */}
//               {event.proof && (
//                 <div className="mb-3">
//                   <img
//                     src={event.proof}
//                     alt="Event proof"
//                     onClick={() => setPopupImage(event.proof)}
//                     className="w-full h-32 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer border border-gray-700"
//                   />
//                 </div>
//               )}

//               {/* Coins */}
//               {event.coins?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.coins.map((c) => (
//                     <span
//                       key={c.coin_id}
//                       className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full flex items-center gap-1"
//                     >
//                       {c.icon && (
//                         <img
//                           src={c.icon}
//                           alt={c.symbol}
//                           className="w-4 h-4 rounded-full"
//                         />
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
//                       className="text-xs bg-green-600 text-white px-2 py-1 rounded-full"
//                     >
//                       {cat.name}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Description */}
//               <p className="text-gray-300 text-sm mb-3">
//                 {event.description
//                   ? event.description.slice(0, 120) + "..."
//                   : "No description available"}
//               </p>

//               {/* Actions */}
//               <div className="flex justify-between items-center mt-auto">
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
//                     <FaLink /> Verified Source
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Event Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
//           <div className="bg-gray-900 max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-2xl relative flex flex-col overflow-hidden">
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
//             >
//               ✖
//             </button>

//             {/* Title & Date */}
//             <div className="mb-4">
//               <h2 className="text-2xl font-bold text-white mb-1">
//                 {selectedEvent.title}
//               </h2>
//               <p className="text-xs text-gray-400">
//                 {selectedEvent.date_event
//                   ? new Date(selectedEvent.date_event).toLocaleString()
//                   : "No Date"}
//               </p>
//             </div>

//             {/* Proof Image */}
//             {selectedEvent.proof && (
//               <div className="mb-4 flex flex-col gap-2">
//                 <img
//                   src={selectedEvent.proof}
//                   alt="Event proof"
//                   onClick={() => setPopupImage(selectedEvent.proof)}
//                   className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform cursor-pointer border border-gray-700"
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

//             {/* Full Description */}
//             <div className="flex-1 overflow-y-auto pr-2 mb-4">
//               <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
//                 {selectedEvent.description || "No description available"}
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="text-sm text-gray-400 flex flex-wrap gap-4 items-center border-t border-gray-700 pt-3">
//               <div className="flex items-center gap-1">
//                 <FaThumbsUp className="text-blue-500" /> {selectedEvent.votes}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaEye className="text-green-500" /> {selectedEvent.views}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaCheckCircle className="text-yellow-400" />{" "}
//                 {selectedEvent.confidence}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaBolt className="text-purple-500" />{" "}
//                 {selectedEvent.trending_score}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaFire className="text-red-500" /> {selectedEvent.popular_score}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaStar className="text-orange-400" />{" "}
//                 {selectedEvent.significant_score}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Proof Image Popup */}
//       {popupImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100]"
//           onClick={() => setPopupImage(null)}
//         >
//           <div className="relative max-w-4xl w-full p-4">
//             <button
//               onClick={() => setPopupImage(null)}
//               className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={popupImage}
//               alt="Proof Full"
//               className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;

 // ================================ Dark Mode Version ================================ and box formatting events
// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { useDarkMode } from "../context/ThemeContext";
// import {
//   FaThumbsUp,
//   FaEye,
//   FaBolt,
//   FaFire,
//   FaStar,
//   FaCheckCircle,
//   FaLink,
// } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);
//   const { darkMode } = useDarkMode(); // ⬅️ get darkMode state

//   // Fetch events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 12) || []);
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

//       <section
//         className={`max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
//           darkMode ? "bg-gray-900" : "bg-white"
//         }`}
//       >
//         <h2
//           className={`text-3xl font-bold mb-8 text-center ${
//             darkMode ? "text-white" : "text-gray-900"
//           }`}
//         >
//           📢 Latest Crypto Events
//         </h2>

//         {/* Events Grid */}
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className={`p-5 rounded-xl shadow-lg flex flex-col transition-transform transform hover:scale-[1.03] ${
//                 darkMode
//                   ? "bg-gray-800 hover:bg-gray-700"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               {/* Title */}
//               <h3 className={`${darkMode ? "text-white" : "text-gray-900"} text-lg font-bold mb-1`}>
//                 {event.title || "No Title"}
//               </h3>

//               {/* Date */}
//               <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-xs mb-2`}>
//                 {event.date_event
//                   ? new Date(event.date_event).toLocaleString()
//                   : "No Date"}
//               </p>

//               {/* Proof Image */}
//               {event.proof && (
//                 <div className="mb-3">
//                   <img
//                     src={event.proof}
//                     alt="Event proof"
//                     onClick={() => setPopupImage(event.proof)}
//                     className={`w-full h-32 object-cover rounded-md cursor-pointer border transition-transform ${
//                       darkMode
//                         ? "border-gray-700 hover:scale-105"
//                         : "border-gray-300 hover:scale-105"
//                     }`}
//                   />
//                 </div>
//               )}

//               {/* Coins */}
//               {event.coins?.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {event.coins.map((c) => (
//                     <span
//                       key={c.coin_id}
//                       className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full flex items-center gap-1"
//                     >
//                       {c.icon && (
//                         <img
//                           src={c.icon}
//                           alt={c.symbol}
//                           className="w-4 h-4 rounded-full"
//                         />
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
//                       className="text-xs bg-green-600 text-white px-2 py-1 rounded-full"
//                     >
//                       {cat.name}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Description */}
//               <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-sm mb-3`}>
//                 {event.description
//                   ? event.description.slice(0, 120) + "..."
//                   : "No description available"}
//               </p>

//               {/* Actions */}
//               <div className="flex justify-between items-center mt-auto">
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
//                     <FaLink /> Verified Source
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Event Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
//           <div
//             className={`max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-colors duration-300 ${
//               darkMode ? "bg-gray-900" : "bg-white"
//             }`}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className={`absolute top-2 right-2 text-xl font-bold hover:text-red-500 ${
//                 darkMode ? "text-gray-400" : "text-gray-700"
//               }`}
//             >
//               ✖
//             </button>

//             {/* Title & Date */}
//             <div className="mb-4">
//               <h2 className={`${darkMode ? "text-white" : "text-gray-900"} text-2xl font-bold mb-1`}>
//                 {selectedEvent.title}
//               </h2>
//               <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-xs`}>
//                 {selectedEvent.date_event
//                   ? new Date(selectedEvent.date_event).toLocaleString()
//                   : "No Date"}
//               </p>
//             </div>

//             {/* Proof Image */}
//             {selectedEvent.proof && (
//               <div className="mb-4 flex flex-col gap-2">
//                 <img
//                   src={selectedEvent.proof}
//                   alt="Event proof"
//                   onClick={() => setPopupImage(selectedEvent.proof)}
//                   className={`w-full h-40 object-cover rounded-md cursor-pointer border transition-transform ${
//                     darkMode ? "border-gray-700 hover:scale-105" : "border-gray-300 hover:scale-105"
//                   }`}
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

//             {/* Full Description */}
//             <div className="flex-1 overflow-y-auto pr-2 mb-4">
//               <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-sm leading-relaxed whitespace-pre-line`}>
//                 {selectedEvent.description || "No description available"}
//               </p>
//             </div>

//             {/* Stats */}
//             <div className={`text-sm flex flex-wrap gap-4 items-center border-t pt-3 ${darkMode ? "text-gray-400 border-gray-700" : "text-gray-700 border-gray-300"}`}>
//               <div className="flex items-center gap-1">
//                 <FaThumbsUp className="text-blue-500" /> {selectedEvent.votes}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaEye className="text-green-500" /> {selectedEvent.views}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaCheckCircle className="text-yellow-400" /> {selectedEvent.confidence}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaBolt className="text-purple-500" /> {selectedEvent.trending_score}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaFire className="text-red-500" /> {selectedEvent.popular_score}
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaStar className="text-orange-400" /> {selectedEvent.significant_score}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Proof Image Popup */}
//       {popupImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100]"
//           onClick={() => setPopupImage(null)}
//         >
//           <div className="relative max-w-4xl w-full p-4">
//             <button
//               onClick={() => setPopupImage(null)}
//               className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={popupImage}
//               alt="Proof Full"
//               className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;



// ================================ Dark Mode Version with Table Layout ================================

// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { useDarkMode } from "../context/ThemeContext";
// import {
//   FaThumbsUp,
//   FaEye,
//   FaBolt,
//   FaFire,
//   FaStar,
//   FaCheckCircle,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);
//   const { darkMode } = useDarkMode();

//   // Fetch events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 12) || []);
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

//       <section
//         className={`max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
//           darkMode ? "bg-gray-900" : "bg-white"
//         }`}
//       >
//         <h2
//           className={`text-3xl font-bold mb-8 text-center ${
//             darkMode ? "text-white" : "text-gray-900"
//           }`}
//         >
//           📢 Latest Crypto Events
//         </h2>

//         {/* Events Table */}
//         <div className="overflow-x-auto rounded-xl shadow-lg">
//           <table
//             className={`w-full border-collapse ${
//               darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
//             }`}
//           >
//             <thead>
//               <tr
//                 className={`${
//                   darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100"
//                 } text-left`}
//               >
//                 <th className="p-3 text-sm font-semibold">Event Name</th>
//                 <th className="p-3 text-sm font-semibold">Date</th>
//                 <th className="p-3 text-sm font-semibold">Category</th>
//                 <th className="p-3 text-sm font-semibold">Proof</th>
//                 <th className="p-3 text-sm font-semibold">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {events.map((event, index) => (
//                 <>
//                   <tr
//                     key={event.id}
//                     className={`border-b ${
//                       darkMode ? "border-gray-700" : "border-gray-200"
//                     } hover:bg-blue-50/10`}
//                   >
//                     {/* Event Name */}
//                     <td className="p-3 text-sm font-medium">
//                       {event.title || "No Title"}
//                     </td>

//                     {/* Date */}
//                     <td className="p-3 text-xs">
//                       {event.date_event
//                         ? new Date(event.date_event).toLocaleString()
//                         : "No Date"}
//                     </td>

//                     {/* Categories */}
//                     <td className="p-3 text-xs">
//                       {event.categories?.length > 0 ? (
//                         <div className="flex flex-wrap gap-1">
//                           {event.categories.map((cat) => (
//                             <span
//                               key={cat.category_id}
//                               className="bg-green-600 text-white px-2 py-1 rounded-full text-xs"
//                             >
//                               {cat.name}
//                             </span>
//                           ))}
//                         </div>
//                       ) : (
//                         "-"
//                       )}
//                     </td>

//                     {/* Proof Image */}
//                     <td className="p-3">
//                       {event.proof ? (
//                         <img
//                           src={event.proof}
//                           alt="Proof"
//                           onClick={() => setPopupImage(event.proof)}
//                           className="w-12 h-12 rounded-lg object-cover border cursor-pointer hover:scale-105 transition-transform"
//                         />
//                       ) : (
//                         "-"
//                       )}
//                     </td>

//                     {/* Details Expand Button */}
//                     <td className="p-3 text-center">
//                       <button
//                         onClick={() =>
//                           setExpandedRow(expandedRow === index ? null : index)
//                         }
//                         className="flex items-center gap-1 px-3 py-1 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
//                       >
//                         {expandedRow === index ? (
//                           <>
//                             Hide <FaChevronUp />
//                           </>
//                         ) : (
//                           <>
//                             More <FaChevronDown />
//                           </>
//                         )}
//                       </button>
//                     </td>
//                   </tr>

//                   {/* Expanded Row */}
//                   {expandedRow === index && (
//                     <tr>
//                       <td colSpan="5" className="p-4">
//                         <div
//                           className={`rounded-lg p-4 shadow-inner ${
//                             darkMode ? "bg-gray-700" : "bg-gray-50"
//                           }`}
//                         >
//                           {/* Description */}
//                           <p
//                             className={`mb-3 text-sm ${
//                               darkMode ? "text-gray-300" : "text-gray-700"
//                             }`}
//                           >
//                             {event.description ||
//                               "No description available for this event."}
//                           </p>

//                           {/* Coins */}
//                           {event.coins?.length > 0 && (
//                             <div className="flex flex-wrap gap-2 mb-3">
//                               {event.coins.map((c) => (
//                                 <span
//                                   key={c.coin_id}
//                                   className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1"
//                                 >
//                                   {c.icon && (
//                                     <img
//                                       src={c.icon}
//                                       alt={c.symbol}
//                                       className="w-4 h-4 rounded-full"
//                                     />
//                                   )}
//                                   {c.symbol}
//                                 </span>
//                               ))}
//                             </div>
//                           )}

//                           {/* Stats */}
//                           <div
//                             className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-sm ${
//                               darkMode ? "text-gray-200" : "text-gray-700"
//                             }`}
//                           >
//                             <div className="flex items-center gap-1">
//                               <FaThumbsUp className="text-blue-500" />{" "}
//                               {event.votes}
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <FaEye className="text-green-500" />{" "}
//                               {event.views}
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <FaCheckCircle className="text-yellow-400" />{" "}
//                               {event.confidence}
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <FaBolt className="text-purple-500" />{" "}
//                               {event.trending_score}
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <FaFire className="text-red-500" />{" "}
//                               {event.popular_score}
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <FaStar className="text-orange-400" />{" "}
//                               {event.significant_score}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                   )}
//                 </>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Proof Image Popup */}
//       {popupImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
//           onClick={() => setPopupImage(null)}
//         >
//           <div className="relative max-w-4xl w-full p-4">
//             <button
//               onClick={() => setPopupImage(null)}
//               className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={popupImage}
//               alt="Proof Full"
//               className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;



// ================================ Dark Mode Version with Table Layout + Search & Filter ================================
// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { useDarkMode } from "../context/ThemeContext";
// import {
//   FaThumbsUp,
//   FaEye,
//   FaBolt,
//   FaFire,
//   FaStar,
//   FaCheckCircle,
//   FaChevronDown,
//   FaChevronUp,
//   FaSearch,
// } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const { darkMode } = useDarkMode();

//   // Fetch events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 50) || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   // Unique categories
//   const categories = [
//     "All",
//     ...new Set(
//       events.flatMap((e) => e.categories?.map((cat) => cat.name) || [])
//     ),
//   ];

//   // Filtered events
//   const filteredEvents = events.filter((event) => {
//     const matchesSearch =
//       event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.description?.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       categoryFilter === "All" ||
//       event.categories?.some((cat) => cat.name === categoryFilter);
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <>
//       <Navbar />

//       <section
//         className={`max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
//           darkMode ? "bg-gray-900" : "bg-white"
//         }`}
//       >
//         <h2
//           className={`text-3xl font-bold mb-8 text-center ${
//             darkMode ? "text-white" : "text-gray-900"
//           }`}
//         >
//           📢 Latest Crypto Events
//         </h2>

//         {/* Search & Filter */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-center">
//           {/* Search Bar */}
//           <div className="relative w-full sm:w-1/2">
//             <input
//               type="text"
//               placeholder="Search events..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
//                 darkMode
//                   ? "bg-gray-800 border-gray-700 text-white"
//                   : "bg-white border-gray-300 text-gray-900"
//               }`}
//             />
//             <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
//           </div>

//           {/* Category Filter */}
//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className={`px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
//               darkMode
//                 ? "bg-gray-800 border-gray-700 text-white"
//                 : "bg-white border-gray-300 text-gray-900"
//             }`}
//           >
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Events Table */}
//         <div className="overflow-x-auto rounded-xl shadow-lg">
//           <table
//             className={`w-full border-collapse ${
//               darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
//             }`}
//           >
//             <thead>
//               <tr
//                 className={`${
//                   darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100"
//                 } text-left`}
//               >
//                 <th className="p-3 text-sm font-semibold">Event Name</th>
//                 <th className="p-3 text-sm font-semibold">Date</th>
//                 <th className="p-3 text-sm font-semibold">Category</th>
//                 <th className="p-3 text-sm font-semibold">Proof</th>
//                 <th className="p-3 text-sm font-semibold">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredEvents.length > 0 ? (
//                 filteredEvents.map((event, index) => (
//                   <>
//                     <tr
//                       key={event.id}
//                       className={`border-b ${
//                         darkMode ? "border-gray-700" : "border-gray-200"
//                       } hover:bg-blue-50/10`}
//                     >
//                       {/* Event Name */}
//                       <td className="p-3 text-sm font-medium">
//                         {event.title || "No Title"}
//                       </td>

//                       {/* Date */}
//                       <td className="p-3 text-xs">
//                         {event.date_event
//                           ? new Date(event.date_event).toLocaleString()
//                           : "No Date"}
//                       </td>

//                       {/* Categories */}
//                       <td className="p-3 text-xs">
//                         {event.categories?.length > 0 ? (
//                           <div className="flex flex-wrap gap-1">
//                             {event.categories.map((cat) => (
//                               <span
//                                 key={cat.category_id}
//                                 className="bg-green-600 text-white px-2 py-1 rounded-full text-xs"
//                               >
//                                 {cat.name}
//                               </span>
//                             ))}
//                           </div>
//                         ) : (
//                           "-"
//                         )}
//                       </td>

//                       {/* Proof Image */}
//                       <td className="p-3">
//                         {event.proof ? (
//                           <img
//                             src={event.proof}
//                             alt="Proof"
//                             onClick={() => setPopupImage(event.proof)}
//                             className="w-12 h-12 rounded-lg object-cover border cursor-pointer hover:scale-105 transition-transform"
//                           />
//                         ) : (
//                           "-"
//                         )}
//                       </td>

//                       {/* Details Expand Button */}
//                       <td className="p-3 text-center">
//                         <button
//                           onClick={() =>
//                             setExpandedRow(
//                               expandedRow === index ? null : index
//                             )
//                           }
//                           className="flex items-center gap-1 px-3 py-1 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
//                         >
//                           {expandedRow === index ? (
//                             <>
//                               Hide <FaChevronUp />
//                             </>
//                           ) : (
//                             <>
//                               More <FaChevronDown />
//                             </>
//                           )}
//                         </button>
//                       </td>
//                     </tr>

//                     {/* Expanded Row */}
//                     {expandedRow === index && (
//                       <tr>
//                         <td colSpan="5" className="p-4">
//                           <div
//                             className={`rounded-lg p-4 shadow-inner ${
//                               darkMode ? "bg-gray-700" : "bg-gray-50"
//                             }`}
//                           >
//                             {/* Description */}
//                             <p
//                               className={`mb-3 text-sm ${
//                                 darkMode ? "text-gray-300" : "text-gray-700"
//                               }`}
//                             >
//                               {event.description ||
//                                 "No description available for this event."}
//                             </p>

//                             {/* Coins */}
//                             {event.coins?.length > 0 && (
//                               <div className="flex flex-wrap gap-2 mb-3">
//                                 {event.coins.map((c) => (
//                                   <span
//                                     key={c.coin_id}
//                                     className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1"
//                                   >
//                                     {c.icon && (
//                                       <img
//                                         src={c.icon}
//                                         alt={c.symbol}
//                                         className="w-4 h-4 rounded-full"
//                                       />
//                                     )}
//                                     {c.symbol}
//                                   </span>
//                                 ))}
//                               </div>
//                             )}

//                             {/* Stats */}
//                             <div
//                               className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-sm ${
//                                 darkMode ? "text-gray-200" : "text-gray-700"
//                               }`}
//                             >
//                               <div className="flex items-center gap-1">
//                                 <FaThumbsUp className="text-blue-500" />{" "}
//                                 {event.votes}
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <FaEye className="text-green-500" />{" "}
//                                 {event.views}
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <FaCheckCircle className="text-yellow-400" />{" "}
//                                 {event.confidence}
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <FaBolt className="text-purple-500" />{" "}
//                                 {event.trending_score}
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <FaFire className="text-red-500" />{" "}
//                                 {event.popular_score}
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <FaStar className="text-orange-400" />{" "}
//                                 {event.significant_score}
//                               </div>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-6 text-gray-400">
//                     No events found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Proof Image Popup */}
//       {popupImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
//           onClick={() => setPopupImage(null)}
//         >
//           <div className="relative max-w-4xl w-full p-4">
//             <button
//               onClick={() => setPopupImage(null)}
//               className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={popupImage}
//               alt="Proof Full"
//               className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;



// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { useDarkMode } from "../context/ThemeContext";
// import {
//   FaThumbsUp,
//   FaEye,
//   FaBolt,
//   FaFire,
//   FaStar,
//   FaCheckCircle,
//   FaChevronDown,
//   FaChevronUp,
//   FaSearch,
// } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const { darkMode } = useDarkMode();

//   // Fetch events
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events?.slice(0, 50) || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   // Unique categories
//   const categories = [
//     "All",
//     ...new Set(
//       events.flatMap((e) => e.categories?.map((cat) => cat.name) || [])
//     ),
//   ];

//   // Filtered events
//   const filteredEvents = events.filter((event) => {
//     const matchesSearch =
//       event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.description?.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       categoryFilter === "All" ||
//       event.categories?.some((cat) => cat.name === categoryFilter);
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <>
//       <Navbar />

//       <section
//         className={`max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
//           darkMode ? "bg-gray-900" : "bg-white"
//         }`}
//       >
//         <h2
//           className={`text-3xl font-bold mb-8 text-center ${
//             darkMode ? "text-white" : "text-gray-900"
//           }`}
//         >
//           📢 Latest Crypto Events
//         </h2>

//         {/* Search & Filter */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-center">
//           {/* Search Bar */}
//           <div className="relative w-full sm:w-1/2">
//             <input
//               type="text"
//               placeholder="Search events..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
//                 darkMode
//                   ? "bg-gray-800 border-gray-700 text-white"
//                   : "bg-white border-gray-300 text-gray-900"
//               }`}
//             />
//             <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
//           </div>

//           {/* Category Filter */}
//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className={`px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
//               darkMode
//                 ? "bg-gray-800 border-gray-700 text-white"
//                 : "bg-white border-gray-300 text-gray-900"
//             }`}
//           >
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Events Table */}
//         <div className="overflow-x-auto rounded-xl shadow-lg">
//           <table
//             className={`w-full border-collapse ${
//               darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
//             }`}
//           >
//             <thead>
//               <tr
//                 className={`${
//                   darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100"
//                 } text-left`}
//               >
//                 <th className="p-3 text-sm font-semibold">Event Name</th>
//                 <th className="p-3 text-sm font-semibold">Date</th>
//                 <th className="p-3 text-sm font-semibold">Category</th>
//                 <th className="p-3 text-sm font-semibold">Proof</th>
//                 <th className="p-3 text-sm font-semibold">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredEvents.length > 0 ? (
//                 filteredEvents.map((event, index) => (
//                   <>
//                     <tr
//                       key={event.id}
//                       className={`border-b ${
//                         darkMode ? "border-gray-700" : "border-gray-200"
//                       } hover:bg-blue-50/10`}
//                     >
//                       {/* Event Name */}
//                       <td className="p-3 text-sm font-medium">
//                         {event.title || "No Title"}
//                       </td>

//                       {/* Date */}
//                       <td className="p-3 text-xs">
//                         {event.date_event
//                           ? new Date(event.date_event).toLocaleString()
//                           : "No Date"}
//                       </td>

//                       {/* Categories */}
//                       <td className="p-3 text-xs">
//                         {event.categories?.length > 0 ? (
//                           <div className="flex flex-wrap gap-1">
//                             {event.categories.map((cat) => (
//                               <span
//                                 key={cat.category_id}
//                                 className="bg-green-600 text-white px-2 py-1 rounded-full text-xs"
//                               >
//                                 {cat.name}
//                               </span>
//                             ))}
//                           </div>
//                         ) : (
//                           "-"
//                         )}
//                       </td>

//                       {/* Proof Image (thumbnail) */}
//                       <td className="p-3">
//                         {event.proof ? (
//                           <img
//                             src={event.proof}
//                             alt="Proof"
//                             onClick={() => setPopupImage(event.proof)}
//                             className="w-12 h-12 rounded-lg object-cover border cursor-pointer hover:scale-105 transition-transform"
//                           />
//                         ) : (
//                           "-"
//                         )}
//                       </td>

//                       {/* Details Expand Button */}
//                       <td className="p-3 text-center">
//                         <button
//                           onClick={() =>
//                             setExpandedRow(
//                               expandedRow === index ? null : index
//                             )
//                           }
//                           className="flex items-center gap-1 px-3 py-1 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
//                         >
//                           {expandedRow === index ? (
//                             <>
//                               Hide <FaChevronUp />
//                             </>
//                           ) : (
//                             <>
//                               More <FaChevronDown />
//                             </>
//                           )}
//                         </button>
//                       </td>
//                     </tr>

//                     {/* Expanded Row */}
//                     {expandedRow === index && (
//                       <tr>
//                         <td colSpan="5" className="p-4">
//                           <div
//                             className={`rounded-lg p-4 shadow-inner ${
//                               darkMode ? "bg-gray-700" : "bg-gray-50"
//                             }`}
//                           >
//                             {/* Description */}
//                             <p
//                               className={`mb-3 text-sm ${
//                                 darkMode ? "text-gray-300" : "text-gray-700"
//                               }`}
//                             >
//                               {event.description ||
//                                 "No description available for this event."}
//                             </p>

//                             {/* Coins */}
//                             {event.coins?.length > 0 && (
//                               <div className="flex flex-wrap gap-2 mb-3">
//                                 {event.coins.map((c) => (
//                                   <span
//                                     key={c.coin_id}
//                                     className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1"
//                                   >
//                                     {c.icon && (
//                                       <img
//                                         src={c.icon}
//                                         alt={c.symbol}
//                                         className="w-4 h-4 rounded-full"
//                                       />
//                                     )}
//                                     {c.symbol}
//                                   </span>
//                                 ))}
//                               </div>
//                             )}

//                             {/* ✅ Sources */}
//                             {event.sources?.length > 0 && (
//                               <div className="mb-3">
//                                 <h4
//                                   className={`font-semibold mb-2 ${
//                                     darkMode ? "text-white" : "text-gray-900"
//                                   }`}
//                                 >
//                                   Sources:
//                                 </h4>
//                                 <ul className="list-disc list-inside space-y-1">
//                                   {event.sources.map((src, i) => (
//                                     <li key={i}>
//                                       <a
//                                         href={src}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-blue-500 hover:underline"
//                                       >
//                                         {src}
//                                       </a>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             )}

//                             {/* ✅ Proof (bigger image) */}
//                             {event.proof && (
//                               <div className="mb-3">
//                                 <h4
//                                   className={`font-semibold mb-2 ${
//                                     darkMode ? "text-white" : "text-gray-900"
//                                   }`}
//                                 >
//                                   Proof:
//                                 </h4>
//                                 <img
//                                   src={event.proof}
//                                   alt="Proof Full"
//                                   className="max-h-64 w-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
//                                   onClick={() => setPopupImage(event.proof)}
//                                 />
//                               </div>
//                             )}

//                             {/* Stats */}
//                             <div
//                               className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-sm ${
//                                 darkMode ? "text-gray-200" : "text-gray-700"
//                               }`}
//                             >
//                               <div className="flex items-center gap-1">
//                                 <FaThumbsUp className="text-blue-500" />{" "}
//                                 {event.votes}
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <FaEye className="text-green-500" />{" "}
//                                 {event.views}
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <FaCheckCircle className="text-yellow-400" />{" "}
//                                 {event.confidence}
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <FaBolt className="text-purple-500" />{" "}
//                                 {event.trending_score}
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <FaFire className="text-red-500" />{" "}
//                                 {event.popular_score}
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <FaStar className="text-orange-400" />{" "}
//                                 {event.significant_score}
//                               </div>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-6 text-gray-400">
//                     No events found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Proof Image Popup */}
//       {popupImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
//           onClick={() => setPopupImage(null)}
//         >
//           <div className="relative max-w-4xl w-full p-4">
//             <button
//               onClick={() => setPopupImage(null)}
//               className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={popupImage}
//               alt="Proof Full"
//               className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;


// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { useDarkMode } from "../context/ThemeContext";
// import { FaLink } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);
//   const { darkMode } = useDarkMode();

//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events || []);
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

//       <section
//         className={`max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
//           darkMode ? "bg-gray-900" : "bg-white"
//         }`}
//       >
//         <h2
//           className={`text-3xl font-bold mb-6 text-center ${
//             darkMode ? "text-white" : "text-gray-900"
//           }`}
//         >
//           📢 Latest Crypto Events
//         </h2>

//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
//             <thead
//               className={`${
//                 darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
//               }`}
//             >
//               <tr>
//                 <th className="px-4 py-2 text-left">Event Name</th>
//                 <th className="px-4 py-2 text-left">Date</th>
//                 <th className="px-4 py-2 text-left">Categories</th>
//                 <th className="px-4 py-2 text-left">Coins</th>
//                 <th className="px-4 py-2 text-left">Proof</th>
//                 <th className="px-4 py-2 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {events.map((event) => (
//                 <tr
//                   key={event.id}
//                   className={`border-t ${
//                     darkMode ? "border-gray-700" : "border-gray-300"
//                   } hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
//                 >
//                   <td className="px-4 py-2">{event.title || "No Title"}</td>
//                   <td className="px-4 py-2">
//                     {event.date_event
//                       ? new Date(event.date_event).toLocaleString()
//                       : "No Date"}
//                   </td>
//                   <td className="px-4 py-2">
//                     {event.categories?.map((cat) => cat.name).join(", ") || "-"}
//                   </td>
//                   <td className="px-4 py-2">
//                     {event.coins?.map((c) => c.symbol).join(", ") || "-"}
//                   </td>
//                   <td className="px-4 py-2">
//                     {event.proof && (
//                       <img
//                         src={event.proof}
//                         alt="proof"
//                         onClick={() => setPopupImage(event.proof)}
//                         className="w-16 h-16 object-cover rounded-md cursor-pointer border border-gray-300 hover:scale-105 transition-transform"
//                       />
//                     )}
//                   </td>
//                   <td className="px-4 py-2">
//                     <button
//                       onClick={() => setSelectedEvent(event)}
//                       className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
//                     >
//                       Read More
//                     </button>
//                     {event.source && (
//                       <a
//                         href={event.source}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="ml-2 text-yellow-400 hover:underline text-sm flex items-center gap-1"
//                       >
//                         <FaLink /> Source
//                       </a>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Event Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
//           <div
//             className={`max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-colors duration-300 ${
//               darkMode ? "bg-gray-900" : "bg-white"
//             }`}
//           >
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className={`absolute top-2 right-2 text-xl font-bold hover:text-red-500 ${
//                 darkMode ? "text-gray-400" : "text-gray-700"
//               }`}
//             >
//               ✖
//             </button>

//             <h2
//               className={`text-2xl font-bold mb-2 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               {selectedEvent.title}
//             </h2>
//             <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-xs mb-4`}>
//               {selectedEvent.date_event
//                 ? new Date(selectedEvent.date_event).toLocaleString()
//                 : "No Date"}
//             </p>

//             {selectedEvent.proof && (
//               <img
//                 src={selectedEvent.proof}
//                 alt="proof"
//                 onClick={() => setPopupImage(selectedEvent.proof)}
//                 className="w-full h-40 object-cover rounded-md cursor-pointer border mb-4"
//               />
//             )}

//             <div className={`flex-1 overflow-y-auto text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
//               <p className="mb-2 whitespace-pre-line">{selectedEvent.description}</p>
//               <p className="mb-2">
//                 <strong>Categories:</strong>{" "}
//                 {selectedEvent.categories?.map((c) => c.name).join(", ")}
//               </p>
//               <p className="mb-2">
//                 <strong>Coins:</strong> {selectedEvent.coins?.map((c) => c.symbol).join(", ")}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Proof Popup */}
//       {popupImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100]"
//           onClick={() => setPopupImage(null)}
//         >
//           <div className="relative max-w-4xl w-full p-4">
//             <button
//               onClick={() => setPopupImage(null)}
//               className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={popupImage}
//               alt="proof full"
//               className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;


// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { useDarkMode } from "../context/ThemeContext";
// import { FaLink, FaSearch } from "react-icons/fa";

// const EventPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [popupImage, setPopupImage] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const { darkMode } = useDarkMode();

//   // Fetch events from backend
//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//     const interval = setInterval(fetchEvents, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   // Get unique categories for filter dropdown
//   const categories = [
//     "All",
//     ...new Set(events.flatMap((e) => e.categories?.map((cat) => cat.name) || [])),
//   ];

//   // Filtered events
//   const filteredEvents = events.filter((event) => {
//     const matchesSearch =
//       event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.description?.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       categoryFilter === "All" ||
//       event.categories?.some((cat) => cat.name === categoryFilter);
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <>
//       <Navbar />

//       <section
//         className={`max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
//           darkMode ? "bg-gray-900" : "bg-white"
//         }`}
//       >
//         <h2
//           className={`text-3xl font-bold mb-6 text-center ${
//             darkMode ? "text-white" : "text-gray-900"
//           }`}
//         >
//           📢 Latest Crypto Events
//         </h2>

//         {/* Search & Category Filter */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-between">
//           <div className="relative w-full sm:w-1/2">
//             <input
//               type="text"
//               placeholder="Search events..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
//                 darkMode
//                   ? "bg-gray-800 border-gray-700 text-white"
//                   : "bg-white border-gray-300 text-gray-900"
//               }`}
//             />
//             <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
//           </div>

//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className={`px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
//               darkMode
//                 ? "bg-gray-800 border-gray-700 text-white"
//                 : "bg-white border-gray-300 text-gray-900"
//             }`}
//           >
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Events Table */}
//         <div className="overflow-x-auto rounded-lg shadow">
//           <table className="min-w-full border-collapse">
//             <thead
//               className={`${
//                 darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
//               }`}
//             >
//               <tr>
//                 <th className="px-4 py-2 text-left">Event Name</th>
//                 <th className="px-4 py-2 text-left">Date</th>
//                 <th className="px-4 py-2 text-left">Categories</th>
//                 <th className="px-4 py-2 text-left">Coins</th>
//                 <th className="px-4 py-2 text-left">Proof</th>
//                 <th className="px-4 py-2 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredEvents.length > 0 ? (
//                 filteredEvents.map((event) => (
//                   <tr
//                     key={event.id}
//                     className={`border-t ${
//                       darkMode ? "border-gray-700" : "border-gray-300"
//                     } hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
//                   >
//                     <td className="px-4 py-2">{event.title || "No Title"}</td>
//                     <td className="px-4 py-2">
//                       {event.date_event
//                         ? new Date(event.date_event).toLocaleString()
//                         : "No Date"}
//                     </td>
//                     <td className="px-4 py-2">
//                       {event.categories?.map((cat) => cat.name).join(", ") || "-"}
//                     </td>
//                     <td className="px-4 py-2">
//                       {event.coins?.map((c) => c.symbol).join(", ") || "-"}
//                     </td>
//                     <td className="px-4 py-2">
//                       {event.proof && (
//                         <img
//                           src={event.proof}
//                           alt="proof"
//                           onClick={() => setPopupImage(event.proof)}
//                           className="w-16 h-16 object-cover rounded-md cursor-pointer border border-gray-300 hover:scale-105 transition-transform"
//                         />
//                       )}
//                     </td>
//                     <td className="px-4 py-2 flex gap-2 items-center">
//                       <button
//                         onClick={() => setSelectedEvent(event)}
//                         className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
//                       >
//                         Read More
//                       </button>
//                       {event.source && (
//                         <a
//                           href={event.source}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="text-yellow-400 hover:underline text-sm flex items-center gap-1"
//                         >
//                           <FaLink /> Source
//                         </a>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4 text-gray-400">
//                     No events found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Event Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
//           <div
//             className={`max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-colors duration-300 ${
//               darkMode ? "bg-gray-900" : "bg-white"
//             }`}
//           >
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className={`absolute top-2 right-2 text-xl font-bold hover:text-red-500 ${
//                 darkMode ? "text-gray-400" : "text-gray-700"
//               }`}
//             >
//               ✖
//             </button>

//             <h2
//               className={`text-2xl font-bold mb-2 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               {selectedEvent.title}
//             </h2>
//             <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-xs mb-4`}>
//               {selectedEvent.date_event
//                 ? new Date(selectedEvent.date_event).toLocaleString()
//                 : "No Date"}
//             </p>

//             {selectedEvent.proof && (
//               <img
//                 src={selectedEvent.proof}
//                 alt="proof"
//                 onClick={() => setPopupImage(selectedEvent.proof)}
//                 className="w-full h-40 object-cover rounded-md cursor-pointer border mb-4"
//               />
//             )}

//             <div className={`flex-1 overflow-y-auto text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
//               <p className="mb-2 whitespace-pre-line">{selectedEvent.description}</p>
//               <p className="mb-2">
//                 <strong>Categories:</strong>{" "}
//                 {selectedEvent.categories?.map((c) => c.name).join(", ")}
//               </p>
//               <p className="mb-2">
//                 <strong>Coins:</strong> {selectedEvent.coins?.map((c) => c.symbol).join(", ")}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Proof Popup */}
//       {popupImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100]"
//           onClick={() => setPopupImage(null)}
//         >
//           <div className="relative max-w-4xl w-full p-4">
//             <button
//               onClick={() => setPopupImage(null)}
//               className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={popupImage}
//               alt="proof full"
//               className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventPage;



import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../context/ThemeContext";
import { FaLink, FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [popupImage, setPopupImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: "votes", direction: "desc" }); // Default leaderboard sort
  const { darkMode } = useDarkMode();

  // Fetch events
  const fetchEvents = async () => {
    try {
      const res = await fetch(
        "https://cryptonewsbackend.up.railway.app/api/events"
      );
      const data = await res.json();
      setEvents(data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  // Unique categories for filter
  const categories = [
    "All",
    ...new Set(events.flatMap((e) => e.categories?.map((cat) => cat.name) || [])),
  ];

  // Filter events by search & category
  let filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" ||
      event.categories?.some((cat) => cat.name === categoryFilter);
    return matchesSearch && matchesCategory;
  });

  // Sort events by sortConfig
  if (sortConfig.key) {
    filteredEvents.sort((a, b) => {
      const aValue = a[sortConfig.key] || 0;
      const bValue = b[sortConfig.key] || 0;
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Handle sorting when header clicked
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <>
      <Navbar />

      <section
        className={`max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          📢 Latest Crypto Events
        </h2>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-between">
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className={`px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Events Table */}
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full border-collapse">
            <thead
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              <tr>
                <th className="px-4 py-2 text-left">Event Name</th>
                <th
                  className={`px-4 py-2 text-left cursor-pointer ${
                    sortConfig.key === "date_event" ? "underline" : ""
                  }`}
                  onClick={() => handleSort("date_event")}
                >
                  Date{" "}
                  {sortConfig.key === "date_event" &&
                    (sortConfig.direction === "asc" ? (
                      <FaChevronUp className="inline" />
                    ) : (
                      <FaChevronDown className="inline" />
                    ))}
                </th>
                <th className="px-4 py-2 text-left">Categories</th>
                <th className="px-4 py-2 text-left">Coins</th>
                <th className="px-4 py-2 text-left">Proof</th>
                <th
                  className={`px-4 py-2 text-left cursor-pointer ${
                    sortConfig.key === "votes" ? "underline" : ""
                  }`}
                  onClick={() => handleSort("votes")}
                >
                  Votes{" "}
                  {sortConfig.key === "votes" &&
                    (sortConfig.direction === "asc" ? (
                      <FaChevronUp className="inline" />
                    ) : (
                      <FaChevronDown className="inline" />
                    ))}
                </th>
                <th
                  className={`px-4 py-2 text-left cursor-pointer ${
                    sortConfig.key === "trending_score" ? "underline" : ""
                  }`}
                  onClick={() => handleSort("trending_score")}
                >
                  Trending{" "}
                  {sortConfig.key === "trending_score" &&
                    (sortConfig.direction === "asc" ? (
                      <FaChevronUp className="inline" />
                    ) : (
                      <FaChevronDown className="inline" />
                    ))}
                </th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <tr
                    key={event.id}
                    className={`border-t transition-colors cursor-pointer hover:${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <td className="px-4 py-2">{event.title || "No Title"}</td>
                    <td className="px-4 py-2">
                      {event.date_event
                        ? new Date(event.date_event).toLocaleString()
                        : "No Date"}
                    </td>
                    <td className="px-4 py-2">
                      {event.categories?.map((cat) => cat.name).join(", ") || "-"}
                    </td>
                    <td className="px-4 py-2">
                      {event.coins?.map((c) => c.symbol).join(", ") || "-"}
                    </td>
                    <td className="px-4 py-2">
                      {event.proof && (
                        <img
                          src={event.proof}
                          alt="proof"
                          onClick={() => setPopupImage(event.proof)}
                          className="w-16 h-16 object-cover rounded-md cursor-pointer border border-gray-300 hover:scale-105 transition-transform"
                        />
                      )}
                    </td>
                    <td className="px-4 py-2">{event.votes}</td>
                    <td className="px-4 py-2">{event.trending_score}</td>
                    <td className="px-4 py-2 flex gap-2 items-center">
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
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
                          <FaLink /> Source
                        </a>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-400">
                    No events found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Event Modal & Proof Popup (same as previous version) */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div
            className={`max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-colors duration-300 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className={`absolute top-2 right-2 text-xl font-bold hover:text-red-500 ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              ✖
            </button>

            <h2
              className={`text-2xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {selectedEvent.title}
            </h2>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-xs mb-4`}>
              {selectedEvent.date_event
                ? new Date(selectedEvent.date_event).toLocaleString()
                : "No Date"}
            </p>

            {selectedEvent.proof && (
              <img
                src={selectedEvent.proof}
                alt="proof"
                onClick={() => setPopupImage(selectedEvent.proof)}
                className="w-full h-40 object-cover rounded-md cursor-pointer border mb-4"
              />
            )}

            <div className={`flex-1 overflow-y-auto text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              <p className="mb-2 whitespace-pre-line">{selectedEvent.description}</p>
              <p className="mb-2">
                <strong>Categories:</strong>{" "}
                {selectedEvent.categories?.map((c) => c.name).join(", ")}
              </p>
              <p className="mb-2">
                <strong>Coins:</strong> {selectedEvent.coins?.map((c) => c.symbol).join(", ")}
              </p>
            </div>
          </div>
        </div>
      )}

      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100]"
          onClick={() => setPopupImage(null)}
        >
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-red-400"
            >
              ✖
            </button>
            <img
              src={popupImage}
              alt="proof full"
              className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EventPage;
