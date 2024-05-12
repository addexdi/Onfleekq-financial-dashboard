import React, { useState } from "react";
import { TiHome } from "react-icons/ti";
import { AiOutlinePieChart } from "react-icons/ai";
import { RiChatSmileFill } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import "../styles/sidebar_style.css";

const SideBar = () => {
  const [activetab, setActiveTab] = useState(0);
  const handleChangeTab = (tabName) => {
    setActiveTab(tabName);
  };
  const SideBarMenu = [
    {
      id: 0,
      icon: <TiHome size={25} />,
    },
    {
      id: 1,
      icon: <AiOutlinePieChart size={25} />,
    },
    {
      id: 2,
      icon: <RiChatSmileFill size={25} />,
    },
    {
      id: 3,
      icon: <IoWalletSharp size={25} />,
    },
  ];
  return (
    <main className="side_bar_menu">
      <div className="icon_wrapper">
        {SideBarMenu.map((menu) => {
          return (
            <div key={menu.id} >
              <div
                className={`${activetab === menu.id ? "icon_active" : ""} icon`}
                onClick={() => handleChangeTab(menu.id)}
              >
                {menu.icon}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default SideBar;
