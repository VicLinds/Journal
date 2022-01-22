import {useState} from "react";
import Sunday from "./Sunday"
import Monday from "./Monday"
import Tuesday from "./Tuesday"
import Wednesday from "./Wednesday"
import Thursday from "./Thursday"
import Friday from "./Friday"
import Saturday from "./Saturday"

import "./Week.css"

const Week = () => {
 
  return <div className="container">
      <div className="page">
          <header>January</header>
          <div className="week">
            < Sunday />
            < Monday />
            < Tuesday />
          </div>
          <footer></footer>
      </div>
      <div className="page">
          <header>From 23 until 29 </header>
          <div className="week">
          < Wednesday />
        < Thursday />
        < Friday />
         < Saturday />
  </div>
 
          </div>
          <footer></footer>
      </div>

};

export default Week;