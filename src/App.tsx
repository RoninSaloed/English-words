import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import React from 'react';
import { Menu, Result, Words } from "./Components/components"
import firstLevel from "./levelFirst.json"


function App() {

  return (
    <div className="App">
      <Menu></Menu>
    </div>
  );
}
export default App;
