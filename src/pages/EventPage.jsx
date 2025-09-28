
// Final Version after feedback,and votes and trending scores remove the front table
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

//   // Fetch events
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

//   // Unique categories
//   const categories = [
//     "All",
//     ...new Set(
//       events.flatMap((e) => e.categories?.map((cat) => cat.name) || [])
//     ),
//   ];

//   // Filter & search
//   let filteredEvents = events.filter((event) => {
//     const matchesSearch =
//       event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (event.description?.toLowerCase().includes(searchTerm.toLowerCase()) ??
//         false);
//     const matchesCategory =
//       categoryFilter === "All" ||
//       event.categories?.some((cat) => cat.name === categoryFilter);
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <>
//       <Navbar />

//       <section
//         className={`pt-20 max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
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

//         {/* Search & Filter */}
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
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg shadow">
//           <table className="min-w-full border-collapse">
//             <thead
//               className={`${
//                 darkMode
//                   ? "bg-gray-800 text-white"
//                   : "bg-gray-100 text-gray-900"
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
//                     className={`border-t transition-colors cursor-pointer darkmode:text-white ${
//                       darkMode
//                         ? "hover:bg-gray-700 text-gray-300"
//                         : "hover:bg-gray-300 text-gray-900"
//                     }`}
//                   >
//                     <td className="px-4 py-2">{event.title || "No Title"}</td>
//                     <td className="px-4 py-2">
//                       {event.date_event
//                         ? new Date(event.date_event).toLocaleString()
//                         : "No Date"}
//                     </td>
//                     <td className="px-4 py-2">
//                       {event.categories?.map((c) => c.name).join(", ") || "-"}
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
//                     {/* <td className="px-4 py-6 flex gap-2 items-center">
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
//                           className="text-yellow-500 hover:underline text-sm flex items-center gap-1"
//                         >
//                           <FaLink /> Source
//                         </a>
//                       )}
//                     </td> */}
//                     <td className="px-4 py-6 flex gap-2 items-center">
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
//                           className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-600 text-sm flex items-center gap-1"
//                         >
//                           <FaLink /> Source
//                         </a>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className={`text-center py-4 ${
//                       darkMode ? "text-gray-400" : "text-gray-500"
//                     }`}
//                   >
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
//               darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"
//             }`}
//           >
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className={`absolute top-2 right-2 text-xl font-bold hover:text-red-500`}
//             >
//               ✖
//             </button>

//             <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
//             <p className="text-xs mb-4">
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

//             <div className="flex-1 overflow-y-auto text-sm">
//               <p className="mb-2 whitespace-pre-line">
//                 {selectedEvent.description || "Description not available"}
//               </p>
//               <p className="mb-2">
//                 <strong>Categories:</strong>{" "}
//                 {selectedEvent.categories?.map((c) => c.name).join(", ") || "-"}
//               </p>
//               <p className="mb-2">
//                 <strong>Coins:</strong>{" "}
//                 {selectedEvent.coins?.map((c) => c.symbol).join(", ") || "-"}
//               </p>
//               {/* ✅ Keep Votes & Trending in modal only */}
//               <p className="mb-2">
//                 <strong>Votes:</strong> {selectedEvent.votes ?? 0}
//               </p>
//               <p className="mb-2">
//                 <strong>Trending Score:</strong>{" "}
//                 {selectedEvent.trending_score ?? 0}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Image Popup */}
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


// add upcoming events first, then passed events (limit 5), with pagination for upcoming only
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
//   const [now, setNow] = useState(new Date());
//   const [currentPage, setCurrentPage] = useState(1);
//   const eventsPerPage = 20; // show 20 events per page
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
//     const fetchInterval = setInterval(fetchEvents, 10000);
//     return () => clearInterval(fetchInterval);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Unique categories
//   const categories = [
//     "All",
//     ...new Set(
//       events.flatMap((e) => e.categories?.map((cat) => cat.name) || [])
//     ),
//   ];

//   // Filter & search
//   let filteredEvents = events.filter((event) => {
//     const matchesSearch =
//       event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (event.description?.toLowerCase().includes(searchTerm.toLowerCase()) ??
//         false);
//     const matchesCategory =
//       categoryFilter === "All" ||
//       event.categories?.some((cat) => cat.name === categoryFilter);
//     return matchesSearch && matchesCategory;
//   });

//   // Split into upcoming and passed
//   const upcomingEvents = filteredEvents.filter(
//     (event) => new Date(event.date_event) > now
//   );
//   const passedEvents = filteredEvents.filter(
//     (event) => new Date(event.date_event) <= now
//   );

//   // Keep only 2 passed events
//   const limitedPassedEvents = passedEvents.slice(0, 5);

//   // Merge: upcoming first (paginated), passed last page
//   const finalEvents = [...upcomingEvents, ...limitedPassedEvents];

//   // Pagination calculations
//   const totalPages = Math.ceil(finalEvents.length / eventsPerPage);
//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = finalEvents.slice(
//     indexOfFirstEvent,
//     indexOfLastEvent
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Calculate remaining time
//   const getRemainingTime = (dateStr) => {
//     if (!dateStr) return { text: "-", totalSeconds: 0 };
//     const eventDate = new Date(dateStr);
//     const diff = eventDate - now;
//     if (diff <= 0) return { text: "Passed", totalSeconds: 0 };

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     const seconds = Math.floor((diff / 1000) % 60);

//     return {
//       text: `${days}d ${hours}h ${minutes}m ${seconds}s`,
//       totalSeconds: diff / 1000,
//     };
//   };

//   return (
//     <>
//       <Navbar />

//       <section
//         className={`pt-20 max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
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

//         {/* Search & Filter */}
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
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg shadow">
//           <table className="min-w-full border-collapse">
//             <thead
//               className={`${
//                 darkMode
//                   ? "bg-gray-800 text-white"
//                   : "bg-gray-100 text-gray-900"
//               }`}
//             >
//               <tr>
//                 <th className="px-4 py-2 text-left">Event Name</th>
//                 <th className="px-4 py-2 text-left">Date</th>
//                 <th className="px-4 py-2 text-left">Remaining Time</th>
//                 <th className="px-4 py-2 text-left">Categories</th>
//                 <th className="px-4 py-2 text-left">Coins</th>
//                 <th className="px-4 py-2 text-left">Proof</th>
//                 <th className="px-4 py-2 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody
//               className={`${
//                 darkMode
//                   ? "bg-gray-800 text-white"
//                   : "bg-gray-100 text-gray-900"
//               }`}
//             >
//               {currentEvents.length > 0 ? (
//                 currentEvents.map((event) => {
//                   const remaining = getRemainingTime(event.date_event);
//                   const isUrgent =
//                     remaining.totalSeconds <= 3600 &&
//                     remaining.totalSeconds > 0;

//                   return (
//                     <tr
//                       key={event.id}
//                       className={`border-t transition-colors cursor-pointer ${
//                         darkMode
//                           ? "hover:bg-gray-700"
//                           : "hover:bg-gray-300"
//                       } ${
//                         isUrgent
//                           ? "bg-red-100 dark:bg-red-700 text-red-700 dark:text-red-200"
//                           : ""
//                       }`}
//                     >
//                       <td className="px-4 py-2">
//                         {event.title || "No Title"}
//                       </td>
//                       <td className="px-4 py-2">
//                         {event.date_event
//                           ? new Date(event.date_event).toLocaleString()
//                           : "No Date"}
//                       </td>
//                       <td className="px-4 py-2">{remaining.text}</td>
//                       <td className="px-4 py-2">
//                         {event.categories
//                           ?.map((c) => c.name)
//                           .join(", ") || "-"}
//                       </td>
//                       <td className="px-4 py-2">
//                         {event.coins
//                           ?.map((c) => c.symbol)
//                           .join(", ") || "-"}
//                       </td>
//                       <td className="px-4 py-2">
//                         {event.proof && (
//                           <img
//                             src={event.proof}
//                             alt="proof"
//                             onClick={() => setPopupImage(event.proof)}
//                             className="w-16 h-16 object-cover rounded-md cursor-pointer border border-gray-300 hover:scale-105 transition-transform"
//                           />
//                         )}
//                       </td>
//                       <td className="px-4 py-6 flex gap-2 items-center">
//                         <button
//                           onClick={() => setSelectedEvent(event)}
//                           className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
//                         >
//                           Read More
//                         </button>
//                         {event.source && (
//                           <a
//                             href={event.source}
//                             target="_blank"
//                             rel="noreferrer"
//                             className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-600 text-sm flex items-center gap-1"
//                           >
//                             <FaLink /> Source
//                           </a>
//                         )}
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="7"
//                     className={`text-center py-4 ${
//                       darkMode ? "text-gray-400" : "text-gray-500"
//                     }`}
//                   >
//                     No events found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-center mt-4 gap-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => paginate(i + 1)}
//               className={`px-3 py-1 rounded ${
//                 currentPage === i + 1
//                   ? "bg-blue-600 text-white"
//                   : darkMode
//                   ? "bg-gray-700 text-white"
//                   : "bg-gray-200 text-gray-900"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Event Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
//           <div
//             className={`max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-colors duration-300 ${
//               darkMode
//                 ? "bg-gray-900 text-gray-300"
//                 : "bg-white text-gray-900"
//             }`}
//           >
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className={`absolute top-2 right-2 text-xl font-bold hover:text-red-500`}
//             >
//               ✖
//             </button>

//             <h2 className="text-2xl font-bold mb-2">
//               {selectedEvent.title}
//             </h2>
//             <p className="text-xs mb-4">
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

//             <div className="flex-1 overflow-y-auto text-sm">
//               <p className="mb-2 whitespace-pre-line">
//                 {selectedEvent.description ||
//                   "Description not available"}
//               </p>
//               <p className="mb-2">
//                 <strong>Categories:</strong>{" "}
//                 {selectedEvent.categories
//                   ?.map((c) => c.name)
//                   .join(", ") || "-"}
//               </p>
//               <p className="mb-2">
//                 <strong>Coins:</strong>{" "}
//                 {selectedEvent.coins
//                   ?.map((c) => c.symbol)
//                   .join(", ") || "-"}
//               </p>
//               <p className="mb-2">
//                 <strong>Votes:</strong>{" "}
//                 {selectedEvent.votes ?? 0}
//               </p>
//               <p className="mb-2">
//                 <strong>Trending Score:</strong>{" "}
//                 {selectedEvent.trending_score ?? 0}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Image Popup */}
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



// loading spinner only on first load
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
//   const [now, setNow] = useState(new Date());
//   const [lastUpdated, setLastUpdated] = useState(new Date());
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const eventsPerPage = 20;
//   const { darkMode } = useDarkMode();

//   // Fetch events from backend
//   const fetchEvents = async (isInitial = false) => {
//     try {
//       if (isInitial) setLoading(true); // show spinner only on first load
//       const res = await fetch(
//         "https://cryptonewsbackend.up.railway.app/api/events"
//       );
//       const data = await res.json();
//       setEvents(data.events || []);
//       setLastUpdated(new Date()); // update last updated timestamp
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     } finally {
//       if (isInitial) setLoading(false);
//     }
//   };

//   // Fetch events on mount + every 10s
//   useEffect(() => {
//     fetchEvents(true); // initial load with spinner
//     const fetchInterval = setInterval(() => fetchEvents(false), 10000);
//     return () => clearInterval(fetchInterval);
//   }, []);

//   // Timer updates every second (for remaining time)
//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Unique categories
//   const categories = [
//     "All",
//     ...new Set(
//       events.flatMap((e) => e.categories?.map((cat) => cat.name) || [])
//     ),
//   ];

//   // Filter & search
//   let filteredEvents = events.filter((event) => {
//     const matchesSearch =
//       event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (event.description?.toLowerCase().includes(searchTerm.toLowerCase()) ??
//         false);
//     const matchesCategory =
//       categoryFilter === "All" ||
//       event.categories?.some((cat) => cat.name === categoryFilter);
//     return matchesSearch && matchesCategory;
//   });

//   // Split into upcoming and passed
//   const upcomingEvents = filteredEvents.filter(
//     (event) => new Date(event.date_event) > now
//   );
//   const passedEvents = filteredEvents.filter(
//     (event) => new Date(event.date_event) <= now
//   );

//   // Keep only 5 passed events
//   const limitedPassedEvents = passedEvents.slice(0, 5);

//   // Merge: upcoming first + passed last
//   const finalEvents = [...upcomingEvents, ...limitedPassedEvents];

//   // Pagination
//   const totalPages = Math.ceil(finalEvents.length / eventsPerPage);
//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = finalEvents.slice(indexOfFirstEvent, indexOfLastEvent);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Remaining time
//   const getRemainingTime = (dateStr) => {
//     if (!dateStr) return { text: "-", totalSeconds: 0 };
//     const eventDate = new Date(dateStr);
//     const diff = eventDate - now;
//     if (diff <= 0) return { text: "Passed", totalSeconds: 0 };

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     const seconds = Math.floor((diff / 1000) % 60);

//     return {
//       text: `${days}d ${hours}h ${minutes}m ${seconds}s`,
//       totalSeconds: diff / 1000,
//     };
//   };

//   return (
//     <>
//       <Navbar />

//       <section
//         className={`pt-20 max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
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

//         {/* Search & Filter */}
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
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Loading Spinner */}
//         {loading ? (
//           <div className="flex justify-center items-center py-10">
//             <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//           </div>
//         ) : (
//           <>
//             {/* Table */}
//             <div className="overflow-x-auto rounded-lg shadow">
//               <table className="min-w-full border-collapse">
//                 <thead
//                   className={`${
//                     darkMode
//                       ? "bg-gray-800 text-white"
//                       : "bg-gray-100 text-gray-900"
//                   }`}
//                 >
//                   <tr>
//                     <th className="px-4 py-2 text-left">Event Name</th>
//                     <th className="px-4 py-2 text-left">Date</th>
//                     <th className="px-4 py-2 text-left">Remaining Time</th>
//                     <th className="px-4 py-2 text-left">Categories</th>
//                     <th className="px-4 py-2 text-left">Coins</th>
//                     <th className="px-4 py-2 text-left">Proof</th>
//                     <th className="px-4 py-2 text-left">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody
//                   className={`${
//                     darkMode
//                       ? "bg-gray-800 text-white"
//                       : "bg-gray-100 text-gray-900"
//                   }`}
//                 >
//                   {currentEvents.length > 0 ? (
//                     currentEvents.map((event) => {
//                       const remaining = getRemainingTime(event.date_event);
//                       const isUrgent =
//                         remaining.totalSeconds <= 3600 &&
//                         remaining.totalSeconds > 0;

//                       return (
//                         <tr
//                           key={event.id}
//                           className={`border-t transition-colors cursor-pointer ${
//                             darkMode
//                               ? "hover:bg-gray-700"
//                               : "hover:bg-gray-300"
//                           } ${
//                             isUrgent
//                               ? "bg-red-100 dark:bg-red-700 text-red-700 dark:text-red-200"
//                               : ""
//                           }`}
//                         >
//                           <td className="px-4 py-2">
//                             {event.title || "No Title"}
//                           </td>
//                           <td className="px-4 py-2">
//                             {event.date_event
//                               ? new Date(event.date_event).toLocaleString()
//                               : "No Date"}
//                           </td>
//                           <td className="px-4 py-2">{remaining.text}</td>
//                           <td className="px-4 py-2">
//                             {event.categories
//                               ?.map((c) => c.name)
//                               .join(", ") || "-"}
//                           </td>
//                           <td className="px-4 py-2">
//                             {event.coins?.map((c) => c.symbol).join(", ") || "-"}
//                           </td>
//                           <td className="px-4 py-2">
//                             {event.proof && (
//                               <img
//                                 src={event.proof}
//                                 alt="proof"
//                                 onClick={() => setPopupImage(event.proof)}
//                                 className="w-16 h-16 object-cover rounded-md cursor-pointer border border-gray-300 hover:scale-105 transition-transform"
//                               />
//                             )}
//                           </td>
//                           <td className="px-4 py-6 flex gap-2 items-center">
//                             <button
//                               onClick={() => setSelectedEvent(event)}
//                               className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
//                             >
//                               Read More
//                             </button>
//                             {event.source && (
//                               <a
//                                 href={event.source}
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-600 text-sm flex items-center gap-1"
//                               >
//                                 <FaLink /> Source
//                               </a>
//                             )}
//                           </td>
//                         </tr>
//                       );
//                     })
//                   ) : (
//                     <tr>
//                       <td
//                         colSpan="7"
//                         className={`text-center py-4 ${
//                           darkMode ? "text-gray-400" : "text-gray-500"
//                         }`}
//                       >
//                         No events found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* Last Updated */}
//             <p
//               className={`mt-2 text-sm text-center ${
//                 darkMode ? "text-gray-400" : "text-gray-600"
//               }`}
//             >
//               Updated: {lastUpdated.toLocaleTimeString()}
//             </p>

//             {/* Pagination Controls */}
//             <div className="flex justify-center mt-4 gap-2">
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i + 1}
//                   onClick={() => paginate(i + 1)}
//                   className={`px-3 py-1 rounded ${
//                     currentPage === i + 1
//                       ? "bg-blue-600 text-white"
//                       : darkMode
//                       ? "bg-gray-700 text-white"
//                       : "bg-gray-200 text-gray-900"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}
//       </section>

//       {/* Event Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
//           <div
//             className={`max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-colors duration-300 ${
//               darkMode
//                 ? "bg-gray-900 text-gray-300"
//                 : "bg-white text-gray-900"
//             }`}
//           >
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className={`absolute top-2 right-2 text-xl font-bold hover:text-red-500`}
//             >
//               ✖
//             </button>

//             <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
//             <p className="text-xs mb-4">
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

//             <div className="flex-1 overflow-y-auto text-sm">
//               <p className="mb-2 whitespace-pre-line">
//                 {selectedEvent.description || "Description not available"}
//               </p>
//               <p className="mb-2">
//                 <strong>Categories:</strong>{" "}
//                 {selectedEvent.categories?.map((c) => c.name).join(", ") || "-"}
//               </p>
//               <p className="mb-2">
//                 <strong>Coins:</strong>{" "}
//                 {selectedEvent.coins?.map((c) => c.symbol).join(", ") || "-"}
//               </p>
//               <p className="mb-2">
//                 <strong>Votes:</strong> {selectedEvent.votes ?? 0}
//               </p>
//               <p className="mb-2">
//                 <strong>Trending Score:</strong>{" "}
//                 {selectedEvent.trending_score ?? 0}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Image Popup */}
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


// Final Version Status column: Upcoming / Urgent / Passed badges.Urgent events blink red.Passed events dimmed.Live last updated time every second.Search, filter, pagination, modals, and image popups intact.Dark/light mode fully supported.

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../context/ThemeContext";
import { FaLink, FaSearch } from "react-icons/fa";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [popupImage, setPopupImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [now, setNow] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const eventsPerPage = 20;
  const { darkMode } = useDarkMode();

  // Fetch events
  const fetchEvents = async (isInitial = false) => {
    try {
      if (isInitial) setLoading(true);
      const res = await fetch(
        "https://cryptonewsbackend.up.railway.app/api/events"
      );
      const data = await res.json();
      setEvents(data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      if (isInitial) setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(true);
    const fetchInterval = setInterval(() => fetchEvents(false), 10000);
    return () => clearInterval(fetchInterval);
  }, []);

  // Timer updates every second
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Unique categories
  const categories = [
    "All",
    ...new Set(events.flatMap((e) => e.categories?.map((cat) => cat.name) || [])),
  ];

  // Filter & search
  let filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (event.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    const matchesCategory =
      categoryFilter === "All" ||
      event.categories?.some((cat) => cat.name === categoryFilter);
    return matchesSearch && matchesCategory;
  });

  // Split upcoming and passed
  const upcomingEvents = filteredEvents.filter((event) => new Date(event.date_event) > now);
  const passedEvents = filteredEvents.filter((event) => new Date(event.date_event) <= now);

  const limitedPassedEvents = passedEvents.slice(0, 5);
  const finalEvents = [...upcomingEvents, ...limitedPassedEvents];

  // Pagination
  const totalPages = Math.ceil(finalEvents.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = finalEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Remaining time
  const getRemainingTime = (dateStr) => {
    if (!dateStr) return { text: "-", totalSeconds: 0 };
    const eventDate = new Date(dateStr);
    const diff = eventDate - now;
    if (diff <= 0) return { text: "Passed", totalSeconds: 0 };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { text: `${days}d ${hours}h ${minutes}m ${seconds}s`, totalSeconds: diff / 1000 };
  };

  // Status badge
  const getStatus = (remaining) => {
    if (remaining.totalSeconds <= 0) return { text: "Passed", color: "gray" };
    if (remaining.totalSeconds <= 3600) return { text: "Urgent", color: "red" };
    return { text: "Upcoming", color: "green" };
  };

  return (
    <>
      <Navbar />

      <section
        className={`pt-20 max-w-screen-2xl mx-auto p-6 transition-colors duration-300 ${
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

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-between">
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
                darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
              }`}
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className={`px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
              darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Table */}
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full border-collapse">
                <thead className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
                  <tr>
                    <th className="px-4 py-2 text-left">Event Name</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Remaining Time</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Categories</th>
                    <th className="px-4 py-2 text-left">Coins</th>
                    <th className="px-4 py-2 text-left">Proof</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
                  {currentEvents.length > 0 ? (
                    currentEvents.map((event) => {
                      const remaining = getRemainingTime(event.date_event);
                      const status = getStatus(remaining);

                      return (
                        <tr
                          key={event.id}
                          className={`border-t transition-colors cursor-pointer ${
                            status.text === "Urgent" ? "blink-bg" : ""
                          } ${status.text === "Passed" ? "opacity-70" : ""} ${
                            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"
                          }`}
                        >
                          <td className="px-4 py-2">{event.title || "No Title"}</td>
                          <td className="px-4 py-2">{event.date_event ? new Date(event.date_event).toLocaleString() : "No Date"}</td>
                          <td className="px-4 py-2">{remaining.text}</td>
                          <td className="px-4 py-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                status.color === "green" ? "bg-green-200 text-green-800" :
                                status.color === "red" ? "bg-red-200 text-red-800" :
                                "bg-gray-200 text-gray-700"
                              }`}
                            >
                              {status.text}
                            </span>
                          </td>
                          <td className="px-4 py-2">{event.categories?.map((c) => c.name).join(", ") || "-"}</td>
                          <td className="px-4 py-2">{event.coins?.map((c) => c.symbol).join(", ") || "-"}</td>
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
                          <td className="px-4 py-6 flex gap-2 items-center">
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
                                className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-600 text-sm flex items-center gap-1"
                              >
                                <FaLink /> Source
                              </a>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="8" className={`text-center py-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        No events found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Last Updated */}
            <p className={`mt-2 text-sm text-center ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Last Updated: {now.toLocaleTimeString()}
            </p>

            {/* Pagination */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Event Modal & Image Popup same as previous */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className={`max-w-3xl w-full max-h-[85vh] p-6 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"}`}>
            <button onClick={() => setSelectedEvent(null)} className="absolute top-2 right-2 text-xl font-bold hover:text-red-500">✖</button>
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
            <p className="text-xs mb-4">{selectedEvent.date_event ? new Date(selectedEvent.date_event).toLocaleString() : "No Date"}</p>
            {selectedEvent.proof && <img src={selectedEvent.proof} alt="proof" onClick={() => setPopupImage(selectedEvent.proof)} className="w-full h-40 object-cover rounded-md cursor-pointer border mb-4" />}
            <div className="flex-1 overflow-y-auto text-sm">
              <p className="mb-2 whitespace-pre-line">{selectedEvent.description || "Description not available"}</p>
              <p className="mb-2"><strong>Categories:</strong> {selectedEvent.categories?.map((c) => c.name).join(", ") || "-"}</p>
              <p className="mb-2"><strong>Coins:</strong> {selectedEvent.coins?.map((c) => c.symbol).join(", ") || "-"}</p>
              <p className="mb-2"><strong>Votes:</strong> {selectedEvent.votes ?? 0}</p>
              <p className="mb-2"><strong>Trending Score:</strong> {selectedEvent.trending_score ?? 0}</p>
            </div>
          </div>
        </div>
      )}

      {popupImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100]" onClick={() => setPopupImage(null)}>
          <div className="relative max-w-4xl w-full p-4">
            <button onClick={() => setPopupImage(null)} className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-red-400">✖</button>
            <img src={popupImage} alt="proof full" className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      )}

      {/* Blinking CSS */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { background-color: rgba(255, 0, 0, 0.2); }
            25%, 75% { background-color: transparent; }
          }
          .blink-bg {
            animation: blink 1s infinite;
          }
        `}
      </style>
    </>
  );
};

export default EventPage;
