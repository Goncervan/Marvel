import React from "react";
import { HashRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Series from './components/Series'
import Comics from './components/Comics'
import Details from "./components/Details";
import Landing from "./components/Landing";
import dotenv from 'dotenv'
import axios from "axios";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001"

function App() {
  return (
    <HashRouter>
      <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing/>}/> 
        <Route exact path='/characters' element={<Home/>}/> 
        <Route path='/details/:id' element={<Details/>}/> 
        <Route exact path='/series' element={<Series/>}/>
        <Route exact path='/comics' element={<Comics/>}/>
      </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
