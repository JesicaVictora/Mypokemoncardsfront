//import {useState} from "react";
import {
  BrowserRouter as Router
} from "react-router-dom"; 
import './App.css';
import { Routes } from './core/Routes/Routes';
import { Menu } from './core/Menu/Menu';

function App() {

  return (
    <Router>
    <div className="App">
      <Menu></Menu>
      <div className="container">
        <Routes></Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
