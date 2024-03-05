import React from "react";
import "./header.css";
// import { Image,Box } from "@chakra-ui/react";
import LOGO from "../images/logo.webp";
import marker from "../images/marker.png";
import rightarrow from "../images/right-arrow.png";
import contact from "../images/contact.png";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className="header-section">
      <img src={LOGO} alt="" className="header-bg" />
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
          </div>
          <div className="header-button">
            {user === null ? (
              <>
                <img src={contact} alt="" />
                <button className="head-btn">Sign In for Saved Address</button>
              </>
            ) : (
              //console.log(user.name)
              // user.name
              <p>Delivery available here!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
