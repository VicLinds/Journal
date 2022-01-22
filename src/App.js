import './App.css';
import Navbar from "./components/Navbar"
import Week from "./components/Week/Week"
import Home from "./components/Home"
import Error from "./components/Error"
import Month from "./components/Month/Month"
import {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      < Navbar />
      <Switch>
        <Route exact path="/">< Home /></Route>
        <Route exact path="/week">< Week /></Route>
        <Route exact path="/month">< Month /></Route>
        <Route path="*"><Error /></Route>
      </Switch>
    </Router>
  );
}

export default App;
