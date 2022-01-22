import React, {useState, useEffect} from 'react';

const Saturday = () => {
    const getLocalStorage = () => {
        let saturdayContent = localStorage.getItem('saturdayContent');
        if (saturdayContent) {
          return (saturdayContent = JSON.parse(localStorage.getItem('saturdayContent')));
        } else {
          return [];
        }
      };
      
      const [saturday, setSaturday] = useState("");

    const [saturdayContent, setSaturdayContent] = useState(getLocalStorage());
    useEffect(() => {
        localStorage.setItem('saturdayContent', JSON.stringify(saturdayContent));
      }, [saturdayContent]);
      
        const handleSubmit = (e) => {
            e.preventDefault();
            if (saturday) {
                const newItem = {id: new Date().getTime().toString(), info: saturday}
                return (
                    setSaturdayContent([...saturdayContent, newItem]),
                    setSaturday("")
                )
            }
        }
    
        const removeItem = (id, weekday) => {
            if (weekday==="saturday") {
                return (
                    setSaturdayContent(saturdayContent.filter((item) => item.id !== id))
                )
            }
        }
  return  (
  <section className="saturday weekdays mini">
        <div className="flex">
            <div className="number">23</div>
                <h4>Saturday</h4>
        </div>
            <form onSubmit={handleSubmit}>
                    <input type="text" value={saturday} onChange={(e)=>setSaturday(e.target.value)}/>
                    <button type="submit">+</button>
            </form>
            <div className="list">
                {saturdayContent.map((item)=>{
                    return (
                            <div className="listItem" key={item.id}>{item.info}<button onClick={() => removeItem(item.id, "saturday")}>x</button></div>
                    )
                })}
        </div>
    </section>)
};

export default Saturday;
