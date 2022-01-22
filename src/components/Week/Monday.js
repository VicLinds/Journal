import React, {useState, useEffect} from 'react';

const Monday = () => {
    const getLocalStorage = () => {
        let mondayContent = localStorage.getItem('mondayContent');
        if (mondayContent) {
          return (mondayContent = JSON.parse(localStorage.getItem('mondayContent')));
        } else {
          return [];
        }
      };
      
      const [monday, setMonday] = useState("");

    const [mondayContent, setMondayContent] = useState(getLocalStorage());
    useEffect(() => {
        localStorage.setItem('mondayContent', JSON.stringify(mondayContent));
      }, [mondayContent]);
      
        const handleSubmit = (e) => {
            e.preventDefault();
            if (monday) {
                const newItem = {id: new Date().getTime().toString(), info: monday}
                return (
                    setMondayContent([...mondayContent, newItem]),
                    setMonday("")
                )
            }
        }
    
        const removeItem = (id, weekday) => {
            if (weekday==="monday") {
                return (
                    setMondayContent(mondayContent.filter((item) => item.id !== id))
                )
            }
        }
  return  (
    <section className="monday weekdays vertical">
        <div className="number">24</div>
            <h4>Monday</h4>
            <form onSubmit={handleSubmit}>
                    <input type="text" value={monday} onChange={(e)=>setMonday(e.target.value)}/>
                    <button type="submit">+</button>
            </form>
            <div className="list">
                {mondayContent.map((item)=>{
                    return (
                            <div className="listItem" key={item.id}>{item.info}<button onClick={() => removeItem(item.id, "monday")}>x</button></div>
                    )
                })}
        </div>
    </section>)
};

export default Monday;
