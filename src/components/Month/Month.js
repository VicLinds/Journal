import React, {useState} from 'react';
import "./Month.css"

const Month = () => {
  const [singleTask, setSingleTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = {id: new Date().getTime().toString(), title: singleTask};
      
      return (
        setTasks([...tasks, newTask]),
        setSingleTask(""));
  }

    const removeItem = (id) => {
        return (setTasks(tasks.filter((item)=>item.id !== id)))
    }

    return <div className="container">
        <div className="page">
            <header>January</header>
        </div>
        <div className="page">
            <header>Tracker</header>
            
            <form onSubmit={handleSubmit}>
                <label>Enter Task:</label>
                <input type="text" value={singleTask} onChange={(e)=>setSingleTask(e.target.value)}></input>
                <button type="submit">+</button>
            </form>
            <div>
                {tasks.map((item)=>{
                    return (<div key={item.id}>{item.title}
                    <button onClick={() => removeItem(item.id)}>x</button>
                    </div>)
                })}
            </div>
        </div>
    </div>;
};

export default Month;
