import React, {useState, useEffect} from 'react';

const Sunday = () => {
    const getLocalStorage = () => {
        let sundayContent = localStorage.getItem('sundayContent');
        if (sundayContent) {
          return (sundayContent = JSON.parse(localStorage.getItem('sundayContent')));
        } else {
          return [];
        }
      };
      
      const [sunday, setSunday] = useState("");

    const [sundayContent, setSundayContent] = useState(getLocalStorage());
    useEffect(() => {
        localStorage.setItem('sundayContent', JSON.stringify(sundayContent));
      }, [sundayContent]);
      
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
  return  (
    <section className="sunday weekdays vertical">
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
    </section>)
};

export default Sunday;
