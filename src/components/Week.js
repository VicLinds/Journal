import "./Week.css"

// bullet journal 26 x 38

import React from 'react';

const Week = () => {
  return <div className="container">
      <div className="page first">
          <header>January</header>
          <div className="week">
              <section className="Sunday weekdays vertical">
                  <div className="number">23</div>
                  <h4>Sunday</h4>
              </section>
              <section className="Monday weekdays vertical">
                  <h4>Monday</h4>
                  <div className="number">24</div>
              </section>
              <section className="Tuesday weekdays horizontal">
                  <h4>Tuesday</h4>
                  <div className="number">25</div>
              </section>
          </div>
          <footer></footer>
      </div>
      <div className="page second">
          <header>From 23 until 29 </header>
          <div className="week">
          <section className="Wednesday weekdays vertical"><h4>Wednesday</h4><div className="number">26</div></section>
              <section className="Thursday weekdays vertical"><div className="number">27</div><h4>Thursday</h4></section>
              <section className="Friday weekdays mini"><div className="flex">
                  <h4>Friday</h4><div className="number">28</div>
              </div></section>
              <section className="Saturday weekdays mini"><div className="flex">
              <div className="number">29</div><h4>Saturday</h4>
              </div></section>
  </div>
 
          </div>
          <footer></footer>
      </div>

};

export default Week;
