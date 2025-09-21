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

  return (
    <>    
      <Routes>
        <Route path="/" element={ <Home />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/news" element={ <News /> } />
          <Route path="/prices" element={ <Price /> } />
          <Route path="/markets" element={ <Market /> } />"
          <Route path="/analysis" element={ <Analysis /> } />
          <Route path="events" element={ <Event /> } />"
      </Routes>

    </>
  );
}

export default App;
