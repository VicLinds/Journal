import React, {useState} from 'react';
import "./Week.css"

const Week = () => {
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
  
    const [sunday, setSunday] = useState("");
    const [monday, setMonday] = useState("");
    const [tuesday, setTuesday] = useState("");
    const [wednesday, setWednesday] = useState("");
    const [thursday, setThursday] = useState("");
    const [friday, setFriday] = useState("");
    const [saturday, setSaturday] = useState(""); 
 
    const [sundayContent, setSundayContent] = useState([]);
    const [mondayContent, setMondayContent] = useState([]);
    const [tuesdayContent, setTuesdayContent] = useState([]);
    const [wednesdayContent, setWednesdayContent] = useState([]);
    const [thursdayContent, setThursdayContent] = useState([]);
    const [fridayContent, setFridayContent] = useState([]);
    const [saturdayContent, setSaturdayContent] = useState([]); 
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (sunday) {
            const newItem = {id: new Date().getTime().toString(), info: sunday}
            return (
                setSundayContent([...sundayContent, newItem]),
                setSunday("")
            )
        }

    }

    const removeItem = (id, weekday) => {
        if (weekday==="sunday") {
            return (
                setSundayContent(sundayContent.filter((item) => item.id !== id))
            )
        }

    }
  
  return <div className="container">
      <div className="page first">
          <header>January</header>
          <div className="week">
              <section className="Sunday weekdays vertical">
                  <div className="number">23</div>
                  <h4>Sunday</h4>
                  <form onSubmit={handleSubmit}>
                        <input type="text" value={sunday} onChange={(e)=>setSunday(e.target.value)}/>
                        <button type="submit">+</button>
                  </form>
                  <div className="list">
                      {sundayContent.map((item)=>{
                          return (
                                <div className="listItem" key={item.id}>{item.info}<button onClick={() => removeItem(item.id, "sunday")}>x</button></div>
                          )
                      })}
                  </div>
              </section>
              <section className="Monday weekdays vertical">
                  <h4>Monday</h4>
                  <div className="number">24</div>
                  <input type="text" />
              </section>
              <section className="Tuesday weekdays horizontal">
                  <h4>Tuesday</h4>
                  <div className="number">25</div>
              </section>
          </div>
          <footer></footer>
      </div>
      <div className="page second">
          <header>From 23 until 29 </header>
          <div className="week">
          <section className="Wednesday weekdays vertical"><h4>Wednesday</h4><div className="number">26</div></section>
              <section className="Thursday weekdays vertical"><div className="number">27</div><h4>Thursday</h4></section>
              <section className="Friday weekdays mini"><div className="flex">
                  <h4>Friday</h4><div className="number">28</div>
              </div></section>
              <section className="Saturday weekdays mini"><div className="flex">
              <div className="number">29</div><h4>Saturday</h4>
              </div></section>
  </div>
 
          </div>
          <footer></footer>
      </div>

};

export default Week;
