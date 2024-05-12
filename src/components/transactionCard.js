import React from "react";
import EditIcon from "../assets/icons/edit icon.png";
import "../styles/transaction_card_style.css";
import ProgressBar from "./progressbar";
import cardImage from "../assets/images/card.png";
import TransactionIcon from "../assets/icons/transaction.png";
import Taxi from "../assets/icons/taxi.png";
import Netflix from "../assets/icons/netflix.png";
import Shop from "../assets/icons/shop.png";
const TransactionCard = () => {
  const transactionDetails = [
    {
      id: 0,
      purpose: "Taxi",
      time: "01:21 PM",
      price: "$920",
      image: Taxi,
    },
    {
      id: 1,
      purpose: "Shopping",
      time: "11:15 AM",
      price: "$142.00",
      image: Shop,
    },
    {
      id: 3,
      purpose: "Netflix",
      time: "Jan 10, 2020",
      price: "$24.99",
      image: Netflix,
    },
  ];
  return (
    <main className="card_body">
      <div className="edit_icon_container">
        <img src={EditIcon} alt="Edit Icon" className="edit_icon" />
      </div>
      <div className="transaction_progress_bar_container">
        <div></div>
        <div className="progress_component">
          <ProgressBar />
        </div>
        <div className="transaction_price">10,000</div>
      </div>
      <div className="card_text">
        <div>My card</div>
        <div>..</div>
      </div>
      <div className="card_container">
        <img src={cardImage} alt="card" className="card_image" />
      </div>
      <div className="card_transaction">
        <div>Transaction</div>
        <div>
          <img src={TransactionIcon} alt="Transaction Icon" />
        </div>
      </div>
      {transactionDetails.map((detail) => {
        return (
          <div className="transaction_card_entry">
            <div>
              <img src={detail.image} alt="Taxi Icon" />
            </div>
            <div className="transaction_card_entry_detail">
              <div>{detail.purpose}</div>
              <div>{detail.time}</div>
            </div>
            <div className="transaction_card_entry_detail">{detail.price}</div>
          </div>
        );
      })}
    </main>
  );
};

export default TransactionCard;
