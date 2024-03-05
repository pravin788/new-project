import React from 'react'
import cardImage from '../images/cardImage.jpg'
import Mobile from "../images/mobile.jpg"
import Store from "../images/store.jpg"

import "./card.css"

const Card = () => {
  return (
    <div className='grids'>
        <div className='grid'>
        <img src={cardImage} alt="" className='card-image' />
        <h2 className='headings'>Become a Dasher</h2>
        <p>As a delivery driver, you'll make reliable money—working anytime, anywhere.</p>
        <a href="earningpage.com" target='/blank'>Start earning</a>
        </div>
        <div className='grid'>
        <img src={Store} alt="" className='card-image' />
        <h2 className='headings'>Become a Partner</h2>
        <p>Grow your business and reach new customers by partnering with us.</p>
        <a href="earningpage.com">Sign Up your store</a>
        </div>
        <div className='grid'>
        <img src={Mobile} alt="" className='card-image' />
        <h2 className='headings'>Get the Best QuickBite Experience</h2>
        <p>Experience the best your neighborhood has to offer, all in one app.</p>
        <a href="earningpage.com">Get the app</a>
        </div>
    </div>
  )
}

export default Card