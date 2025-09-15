import React from "react";
import {Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import News from "./pages/NewsPage";
import Price from "./pages/PricePage";
import Market from "./pages/MarketPage";
import Analysis from "./pages/AnalysisPage";
import Event from "./pages/EventPage";


function App() {
  // const [darkMode, setDarkMode] = useState(true); //default dark mode

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  return (
    <>
  
      {/* <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen"> */}
     
      <Routes>
        <Route path="/" element={ <Home />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/news" element={ <News /> } />
          <Route path="/prices" element={ <Price /> } />
          {/* <Route path="/prices/:coinId" element={ <Price /> } /> */}
          <Route path="/markets" element={ <Market /> } />"
          <Route path="/analysis" element={ <Analysis /> } />
          <Route path="events" element={ <Event /> } />"

      {/* </div> */}
      </Routes>

    </>
  );
}

export default App;
