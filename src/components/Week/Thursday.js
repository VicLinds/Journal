import React, {useState, useEffect} from 'react';

const Thursday = () => {
    const getLocalStorage = () => {
        let thursdayContent = localStorage.getItem('thursdayContent');
        if (thursdayContent) {
          return (thursdayContent = JSON.parse(localStorage.getItem('thursdayContent')));
        } else {
          return [];
        }
      };
      
      const [thursday, setThursday] = useState("");

    const [thursdayContent, setThursdayContent] = useState(getLocalStorage());
    useEffect(() => {
        localStorage.setItem('thursdayContent', JSON.stringify(thursdayContent));
      }, [thursdayContent]);
      
        const handleSubmit = (e) => {
            e.preventDefault();
            if (thursday) {
                const newItem = {id: new Date().getTime().toString(), info: thursday}
                return (
                    setThursdayContent([...thursdayContent, newItem]),
                    setThursday("")
                )
            }
        }
    
        const removeItem = (id, weekday) => {
            if (weekday==="thursday") {
                return (
                    setThursdayContent(thursdayContent.filter((item) => item.id !== id))
                )
            }
        }
  return  (
    <section className="thursday weekdays vertical">
        <div className="number">23</div>
            <h4>Thursday</h4>
            <form onSubmit={handleSubmit}>
                    <input type="text" value={thursday} onChange={(e)=>setThursday(e.target.value)}/>
                    <button type="submit">+</button>
            </form>
            <div className="list">
                {thursdayContent.map((item)=>{
                    return (
                            <div className="listItem" key={item.id}>{item.info}<button onClick={() => removeItem(item.id, "thursday")}>x</button></div>
                    )
                })}
        </div>
    </section>)
};

export default Thursday;
