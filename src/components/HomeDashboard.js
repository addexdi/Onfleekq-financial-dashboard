import React from "react";
import Navbar from "../layouts/NavBar";
import AnalyticCard from "./analyticCard";
import "../styles/home_dashboard_style.css";
import TransactionCard from "./transactionCard";
import TimeCard from "./timeCard";
import ProfileCard from "./profileCard";
import StatistcisImage from "../assets/images/chart large.png";
import first from '../assets/images/first.png'
import second from '../assets/images/second.png'
import third from '../assets/images/third.png'
const HomeDashboard = () => {
  const analyticCardProps = [
    {
      id: 0,
      text: "Visitors",
      graph: first,
      number: "10,000",
    },
    {
      id: 1,
      text: "Customers",
      graph: second,
      number: "10,000",
    },
    {
      id: 2,
      text: "Orders",
      graph: third,
      number: "10,000",
    },
  ];

  return (
    <main>
      <Navbar />
      <main className="dashboard_body">
        <div className="analytic_card_body">
          <div className="analytic_card">
            {analyticCardProps.map((prop, index) => {
              const isLast = index === analyticCardProps.length - 1;
              return (
                <AnalyticCard
                  number={prop.number}
                  text={prop.text}
                  graph={prop.graph}
                  key={index}
                  isLast={isLast}
                />
              );
            })}
          </div>
          <div className="statistics_image">
            <img
              src={StatistcisImage}
              alt="Statistics"
              className="statics"
            />
          </div>
          <div>
            <div className="card_details">
              <TimeCard />
              <ProfileCard />
            </div>
          </div>
        </div>

        <div className="transaction_card">
          <TransactionCard />
        </div>
      </main>
    </main>
  );
};

export default HomeDashboard;
