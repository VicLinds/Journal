import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
  return <div className="flex link-container">
        <Link className="link-item" to="/">Home</Link>
        <Link className="link-item" to="/week">Week</Link>
        <Link className="link-item" to="/month">Month</Link>
  </div>;
};

export default Navbar;
