import React from "react";
import "./restaurantnavbar.css";
import MENU from "../images/menu.png";
import Home from "../HomePage/Home";

const RestaurantsNavbar = () => {
  return (
    <div className="rest-nav">
      <div className="rest-nav-top">
        <div className="rest-nav-top-left">
          <div className="rest-menu-div">
            <button className="menu-btn">
              <img src={MENU} alt="" />
            </button>
          </div>
          <div className="rest-name">
            <h2>QUICK BITE</h2>
          </div>
        </div>
        <div className="rest-nav-top-right">
          <div>
            <button className="rest-signup">SignUp</button>
          </div>
          <div>
          <button className="rest-signin">SignIn</button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="rest-nav-down">
        <p className="rest-nav-down-ptag">
          <a href={<Home />}>Home</a>/Restaurants
        </p>
      </div>
    </div>
  );
};

export default RestaurantsNavbar;
