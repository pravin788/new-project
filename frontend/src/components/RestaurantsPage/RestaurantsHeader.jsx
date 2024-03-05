import React from 'react'
import './restaurantsheader.css'
// import HeaderImage1 from '../images/rest-head-image1.jpg'
import MARKER from '../images/marker.png'
import headFood from '../images/rest-head-image2.jpg'

const RestaurantsHeader = () => {
  return (
    <div className='rest-head'>
        <div className="header-image1">
            {/* <img src={HeaderImage1} alt="" /> */}
        </div>
        <div className='div-1'>
        <div className="rest-head-text">
            <h1 className='rest-head-text-h'>Restaurants near me</h1>
            <p className='p1'>Order online for super-fast delivery or pick-up, powered by QuickBite.</p>
            <p>See who delivers to you</p>
        </div>
        <div className="rest-input-field">
            <img src={MARKER} alt="" />
            <input className='rest-head-input'  type="text"  placeholder='Enter the Delivery address'/>
            <div className='rest-head-btn'>Find Restaurants</div>
        </div>
        </div>
        <div className="div-2">
            <img src={headFood} alt="" />
        </div>
    </div>
  )
}

export default RestaurantsHeader