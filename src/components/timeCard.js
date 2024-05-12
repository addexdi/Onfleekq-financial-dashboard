import React from "react";
import Line from "../assets/images/graph line.svg";
import ChartWave from "../assets/images/chart wave.svg";
import "../styles/time_card_stle.css";
const TimeCard = () => {
  return (
    <main className="graph_part">
      <div className="graph_text">Spent time</div>
      <div>
        <div className="line_graph">
          <img src={Line} alt="Line graph" />
          <div className="graph_time">4h 21min</div>
          <div className="box"></div>
        </div>
        <div className="wave_graph">
          <img src={ChartWave} alt="Line graph" />
        </div>
      </div>
      <div className="day">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
    </main>
  );
};

export default TimeCard;
