import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Slider from "./components/Slider/Slider.js";
//import AddEditFood from './components/AddEditFood/addEditFood.js';
//import Home from './components/Home/Home.js';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import './App.css';


function App() {
  return (

    <BrowserRouter>
    <div className="App">
      
      <ToastContainer />
      <Routes>
      <Route path="/" element={[<Header />,<Slider/>]}></Route>
      
      </Routes>
      
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;