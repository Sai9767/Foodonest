import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer.js";
import Header from "./components/Header/Header.js";
//import Slider from "./components/Slider/Slider.js";
import AddEditFood from './components/AddEditFood/addEditFood.js';
import RequestFood from './components/RequestFood/RequestFood.js';
import Home from './components/Home/Home.js';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import './App.css';
//srivas - vignesh 9700800819

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Header/>
      
      <ToastContainer />
      <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/addEditFood' element={<AddEditFood/>}/>
      <Route path='/RequestFood' element={<RequestFood/>}/>
      </Routes>
      
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;