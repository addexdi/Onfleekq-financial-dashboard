import React from "react";
import "../styles/analytic_card_style.css";

const AnalyticCard = ({ graph, text, number, isLast }) => {
  const cardClassName = `card_wrapper ${isLast ? "last_card_wrapper" : ""}`;
  return (
    <main className={cardClassName}>
      <div>
        <img src={graph} alt="graph" />
      </div>
      <div>
        <div>{text}</div>
        <div>{number}</div>
      </div>
    </main>
  );
};

export default AnalyticCard;
