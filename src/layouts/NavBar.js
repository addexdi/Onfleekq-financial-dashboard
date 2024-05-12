import React from "react";
import searchIcon from "../assets/icons/search icon.svg";
import "../styles/navbar_style.css";
import bell from "../assets/icons/bell.png";
import profile from "../assets/icons/profile.png";
const Navbar = () => {
  const navbarMenu = [
    {
      id: 0,
      name: "Feedback",
    },
    {
      id: 1,
      name: "Contacts",
    },
    {
      id: 2,
      name: "Help",
    },
  ];
  return (
    <main className="navbar_container">
      <div className="search_menu_container">
        <div className="search_container">
          <img src={searchIcon} alt="Search Icon" />
          <input type="text" className="input" placeholder="search" />
        </div>
        <div className="menu_items">
          {navbarMenu.map((menu) => {
            return (
              <div key={menu.id} className="menu_icon_list">
                <div className={``}>{menu.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="menu_icon">
        <img src={bell} alt="Bell Icon" className="bell_icon" />
        <img src={profile} alt="Profile Icon" className="profile_icon" />
      </div>
    </main>
  );
};

export default Navbar;
