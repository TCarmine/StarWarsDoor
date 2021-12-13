import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import Auth from './components/Auth/Auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/StarWars/NavBar'
import Home from './components/StarWars/Home'
import About from './components/StarWars/About'
import Error from './components/StarWars/Error'
import PeopleList from './components/StarWars/PeopleList'



function App({}) {
  return (
    
/*     <>
      <Auth />
    </> */
    <Router>
     <NavBar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/people/:id" element={<PeopleList />} />
       <Route exact path="/about" element={<About />} />
       <Route exact path="*" element={<Error />} />
     </Routes>
    </Router> 
  );
}

export default App;
