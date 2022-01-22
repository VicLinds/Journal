import './App.css';
import Navbar from "./components/Navbar"
import Week from "./components/Week"
import {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  //grocery bud
  // const getLocalStorage = () => {
  //   let list = localStorage.getItem('list');
  //   if (list) {
  //     return (list = JSON.parse(localStorage.getItem('list')));
  //   } else {
  //     return [];
  //   }
  // };

  // const [list, setList] = useState(getLocalStorage());

  // useEffect(() => {
  //   localStorage.setItem('list', JSON.stringify(list));
  // }, [list]);

  // const [showNavbar, setShowNavbar] = useState(true)
  // const [weight, setWeight] = useState("");
  // const [result, setResult] = useState([])

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   setResult([...result, weight]);
  //   setWeight("");
  // }

  // const toggleNav = () => {
  //   setShowNavbar(!showNavbar)
  // }
  
  return (
    <Week />
    // <div className="Container">
    //   {showNavbar ? <Navbar /> : null}
    //   <button onClick={toggleNav}>toggle nav</button>

    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="weight">Weight : </label>
    //       <input type="text" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
    //     </div>
    //     <button type="submit">Enter weight</button>
    //   </form>

    // <div>
    //   {result.map((item, index)=> {
    //    return <div key={index}>{item} </ div>
    //   })}
    // </div>

    // </div>
  );
}

export default App;
