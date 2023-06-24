import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";
import Contact from "./components/Contact"
import Services from "./components/Services.jsx"

import "./style/App.scss";
import "./style/header.scss";
import "./style/Home.scss";
import "./style/Footer.scss";
import "./style/Contact.scss";
import "./style/Services.scss";

function App() {
  return (
    <>
      <Router>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Services/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
