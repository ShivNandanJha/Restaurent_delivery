import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <><div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu('home')} className={menu === "home" ? "active" : " "}>Home</li>
      <li onClick={() => setMenu('menu')} className={menu === "menu" ? "active" : ""}>
        <a href=""></a>Menu
      </li>
      <li onClick={() => setMenu('mobile-app')} className={menu === "mobile-app" ? "active" : ""}>
        <a href=""></a>Mobile-App
      </li>
      <li onClick={() => setMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>
        <a href=""></a> Contact us
      </li>
    </ul><div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign-in</button>
      </div>
    </div></>
  );
};

export default Navbar;
