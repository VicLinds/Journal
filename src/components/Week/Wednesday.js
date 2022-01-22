import React, {useState, useEffect} from 'react';

const Wednesday = () => {
    const getLocalStorage = () => {
        let wednesdayContent = localStorage.getItem('wednesdayContent');
        if (wednesdayContent) {
          return (wednesdayContent = JSON.parse(localStorage.getItem('wednesdayContent')));
        } else {
          return [];
        }
      };
      
      const [wednesday, setWednesday] = useState("");

    const [wednesdayContent, setWednesdayContent] = useState(getLocalStorage());
    useEffect(() => {
        localStorage.setItem('wednesdayContent', JSON.stringify(wednesdayContent));
      }, [wednesdayContent]);
      
        const handleSubmit = (e) => {
            e.preventDefault();
            if (wednesday) {
                const newItem = {id: new Date().getTime().toString(), info: wednesday}
                return (
                    setWednesdayContent([...wednesdayContent, newItem]),
                    setWednesday("")
                )
            }
        }
    
        const removeItem = (id, weekday) => {
            if (weekday==="wednesday") {
                return (
                    setWednesdayContent(wednesdayContent.filter((item) => item.id !== id))
                )
            }
        }
  return  (
    <section className="wednesday weekdays vertical">
        <div className="number">26</div>
            <h4>Wednesday</h4>
            <form onSubmit={handleSubmit}>
                    <input type="text" value={wednesday} onChange={(e)=>setWednesday(e.target.value)}/>
                    <button type="submit">+</button>
            </form>
            <div className="list">
                {wednesdayContent.map((item)=>{
                    return (
                            <div className="listItem" key={item.id}>{item.info}<button onClick={() => removeItem(item.id, "wednesday")}>x</button></div>
                    )
                })}
        </div>
    </section>)
};

export default Wednesday;
