import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import Auth from './components/Auth/Auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App({}) {
  return (
    
    <>
      <Auth />
    </>
  );
}

export default App;
