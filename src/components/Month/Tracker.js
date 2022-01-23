import React, {useState} from 'react';

const Tracker = () => {
  const [toggleCircle, setToggleCircle] = useState(false)
  
  return <div>
      <button className="tracker-circle"></button>
  </div>;
};

export default Tracker;
