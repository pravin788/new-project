import React from "react";
import "./header.css";
// import { Image,Box } from "@chakra-ui/react";
import LOGO from "../images/hero_desktop.webp"
import marker from "../images/marker.png"
import rightarrow from "../images/right-arrow.png"
import contact from "../images/contact.png"

const Header = () => {
  return (
    <div className="header-section">
      <img src={LOGO} alt="" className="header-bg"/>
      <div className="header-container">
        <div className="header-tagline">
          <h1>Discover restaurants and more near you.</h1>
        </div>
        <div className="header-input-and-button">
          <div className="header-input">
             <div className="header-input-left">
          <img src={marker} alt="" />
          <input type="text" placeholder="Enter the delivery address" />
             </div>
             <button className="arrow-button">
          <img src={rightarrow} alt="" className="arrow" />
          </button>
          </div >
          <div className="header-button">
          <img src={contact} alt="" />
          <button >Sign In for Saved Address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
