import React, {useState, useEffect} from 'react';

const Friday = () => {
    const getLocalStorage = () => {
        let fridayContent = localStorage.getItem('fridayContent');
        if (fridayContent) {
          return (fridayContent = JSON.parse(localStorage.getItem('fridayContent')));
        } else {
          return [];
        }
      };
      
    const [friday, setFriday] = useState("");

    const [fridayContent, setFridayContent] = useState(getLocalStorage());
    useEffect(() => {
        localStorage.setItem('fridayContent', JSON.stringify(fridayContent));
      }, [fridayContent]);
      
        const handleSubmit = (e) => {
            e.preventDefault();
            if (friday) {
                const newItem = {id: new Date().getTime().toString(), info: friday}
                return (
                    setFridayContent([...fridayContent, newItem]),
                    setFriday("")
                )
            }
        }
    
        const removeItem = (id, weekday) => {
            if (weekday==="friday") {
                return (
                    setFridayContent(fridayContent.filter((item) => item.id !== id))
                )
            }
        }
  return  (
  <section className="friday weekdays mini">
        <div className="flex">
            <div className="number">23</div>
                <h4>Friday</h4>
        </div>
            <form onSubmit={handleSubmit}>
                    <input type="text" value={friday} onChange={(e)=>setFriday(e.target.value)}/>
                    <button type="submit">+</button>
            </form>
            <div className="list">
                {fridayContent.map((item)=>{
                    return (
                            <div className="listItem" key={item.id}>{item.info}<button onClick={() => removeItem(item.id, "friday")}>x</button></div>
                    )
                })}
        </div>
    </section>)
};

export default Friday;
