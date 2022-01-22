import React, {useState, useEffect} from 'react';

const Tuesday = () => {
    const getLocalStorage = () => {
        let tuesdayContent = localStorage.getItem('tuesdayContent');
        if (tuesdayContent) {
          return (tuesdayContent = JSON.parse(localStorage.getItem('tuesdayContent')));
        } else {
          return [];
        }
      };
      
      const [tuesday, setTuesday] = useState("");

    const [tuesdayContent, setTuesdayContent] = useState(getLocalStorage());
    useEffect(() => {
        localStorage.setItem('tuesdayContent', JSON.stringify(tuesdayContent));
      }, [tuesdayContent]);
      
        const handleSubmit = (e) => {
            e.preventDefault();
            if (tuesday) {
                const newItem = {id: new Date().getTime().toString(), info: tuesday}
                return (
                    setTuesdayContent([...tuesdayContent, newItem]),
                    setTuesday("")
                )
            }
        }
    
        const removeItem = (id, weekday) => {
            if (weekday==="tuesday") {
                return (
                    setTuesdayContent(tuesdayContent.filter((item) => item.id !== id))
                )
            }
        }
  return  (
    <section className="tuesday weekdays horizontal flex">
            <div className="day-header">
                <div className="number">25</div>
                    <h4>Tuesday</h4>
                    <form onSubmit={handleSubmit}>
                            <input type="text" value={tuesday} onChange={(e)=>setTuesday(e.target.value)}/>
                            <button type="submit">+</button>
                    </form>
            </div>
        <div className="horizontal-list">
                {tuesdayContent.map((item)=>{
                    return (
                            <div className="listItem" key={item.id}>{item.info}<button onClick={() => removeItem(item.id, "tuesday")}>x</button></div>
                    )
                })}
         </div>
    </section>)
};

export default Tuesday;
