import React, { useEffect, useState } from 'react';
import './App.css';
import { Menu, Words } from './Components/components';
import data from "./text.json"
import { Route, Routes } from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Home from './pages/Home';


function App(add: any) {

  return (
    <div className="App">
      <Menu add={add}  ></Menu>
    </div>
  );
}

export default App;
