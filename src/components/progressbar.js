import React from "react";
import "../styles/progress_bar_style.css";
import ProgressLine from "../assets/icons/progress line.svg";
const ProgressBar = () => {
  return (
    <div className="progress_bar ">
      <main className="progress_bar_container">
        <div className="progress_number">38%</div>
      </main>
      <div className="progress_line">
        <img src={ProgressLine} alt="Progress Line" />
      </div>
    </div>
  );
};

export default ProgressBar;
