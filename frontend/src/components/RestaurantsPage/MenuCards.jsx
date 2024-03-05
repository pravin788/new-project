import React from "react";
import rightMarker from "../images/right-arrow.png";
import "./menucards.css";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
// import food3 from '../images/food3.jpg'
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpg";
import upArrow from '../images/up-arrow.png'

const MenuCards = () => {
  return (
    <div className="food">
      <div className="left-side">
        <h2>Best Restaurants in Jaipur City</h2>
        <div>
          <p>1006 restaurants in Jaipur city</p>
          <div className="more">
            <button>View more restaurants!</button>
            <img src={rightMarker} alt="" />
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="food-card">
          <div className="food-images">
            <img src={food1} alt="" />
            <img src={food4} alt="" />
            <img src={food5} alt="" />
            <img src={food2} alt="" />
          </div>
          <div className="food-desc">
            <div className="desc-text">
              <h2>Sticky Rice</h2>
              <p>Jaipur City . Rice $$</p>
            </div>
            <div className="more-items">
              <p>Popular Items</p>
              <img src={upArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="food-card">
          <div className="food-images">
            <img src={food1} alt="" />
            <img src={food4} alt="" />
            <img src={food5} alt="" />
            <img src={food2} alt="" />
          </div>
          <div className="food-desc">
            <div className="desc-text">
              <h2>Sticky Rice</h2>
              <p>Jaipur City . Rice $$</p>
            </div>
            <div className="more-items">
              <p>Popular Items</p>
              <img src={upArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="food-card">
          <div className="food-images">
            <img src={food1} alt="" />
            <img src={food4} alt="" />
            <img src={food5} alt="" />
            <img src={food2} alt="" />
          </div>
          <div className="food-desc">
            <div className="desc-text">
              <h2>Sticky Rice</h2>
              <p>Jaipur City . Rice $$</p>
            </div>
            <div className="more-items">
              <p>Popular Items</p>
              <img src={upArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="food-card">
          <div className="food-images">
            <img src={food1} alt="" />
            <img src={food4} alt="" />
            <img src={food5} alt="" />
            <img src={food2} alt="" />
          </div>
          <div className="food-desc">
            <div className="desc-text">
              <h2>Sticky Rice</h2>
              <p>Jaipur City . Rice $$</p>
            </div>
            <div className="more-items">
              <p>Popular Items</p>
              <img src={upArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCards;
