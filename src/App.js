import {useState} from "react";
import {
  BrowserRouter as Router
} from "react-router-dom"; 
import './App.css';
import { Routes } from './core/Routes/Routes';
import { Menu } from './core/Menu/Menu';
import { LoadingContext } from "./core/Loading/contexts/LoadingContext";
import { Loading } from "./core/Loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
    <div className="App">
      <Menu></Menu>
      <div className="App_container">
      <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      <Loading></Loading>
      <Routes></Routes>
    </LoadingContext.Provider>
      </div>
    </div>
    </Router>
  );
}

export default App;
