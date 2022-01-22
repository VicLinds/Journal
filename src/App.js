import './App.css';
import Navbar from "./components/Navbar"
import Week from "./components/Week/Week"
import {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Week />

  );
}

export default App;
