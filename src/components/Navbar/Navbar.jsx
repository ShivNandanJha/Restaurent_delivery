import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : " "}>
          <a href=""></a>Home
        </li>
        <li className={menu === "menu"?"active":""}>
          <a href=""></a>Menu
        </li>
        <li className={menu === "mobile-app"?"active":""}>
          <a href=""></a>Mobile-App
        </li>
        <li className={menu === "contact-us"?"active":""}>
          <a href=""></a> Contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign-in</button>
      </div>
    </div>
  );
};

export default Navbar;
