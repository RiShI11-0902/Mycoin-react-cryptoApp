import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Coin from "./components/Coin";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Saved from "./components/Saved";


function App() {
  return (
    <>
      <Router>
      <Home />
        <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/coins" element={<Coin />}/>
          <Route path="/exchanges" element={<Exchanges />}/>
          <Route path="/coin/:id" element={<CoinDetails />}/>
          <Route path="/saved" element={<Saved />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
