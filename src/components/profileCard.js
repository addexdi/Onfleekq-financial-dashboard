import React from "react";
import Profile from "../assets/icons/profile1.png";
import Time from "../assets/icons/time.png";
import Play from "../assets/icons/play.png";
import star from "../assets/icons/star.png";
import { IoIosArrowForward } from "react-icons/io";
import "../styles/profile_card_style.css";
const ProfileCard = () => {
  const menu = [
    {
      id: 0,
      icon: Play,
      text: "Video",
    },
    {
      id: 1,
      icon: Time,
      text: "15 mins",
    },
    {
      id: 0,
      icon: star,
      text: "12 Likes",
    },
  ];
  return (
    <main className="profile_card_container">
      <div className="details_container">
        <div>
          <img src={Profile} alt="Profile" />
        </div>
        <div>
          <p className="detail_username">Lilly Donavan</p>
          <p className="detail_profession">Business Trainer</p>
        </div>
      </div>
      <div className="detail_title">
        How to properly manage your personal budget
      </div>
      <div className="profile_menu">
        {menu.map((menu) => {
          return (
            <div key={menu.id} className="profile_menu">
              <img src={menu.icon} alt="Play Icon" />
              <p>{menu.text}</p>
            </div>
          );
        })}
      </div>
      <div className="profile_connect">
        <p>5 days ago</p>
        <div className="connect_button">
          <p>Connect</p>
          <IoIosArrowForward />
        </div>
      </div>
    </main>
  );
};

export default ProfileCard;
