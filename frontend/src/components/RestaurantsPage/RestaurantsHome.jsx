import React from 'react'
import RestaurantsNavbar from './RestaurantsNavbar'
import RestaurantsHeader from './RestaurantsHeader'
import MenuCards from './MenuCards'

const RestaurantsHome = () => {
  return (
    <div>
      <RestaurantsNavbar/>
       <RestaurantsHeader/>
       <MenuCards/>
       <MenuCards/>
       <MenuCards/>
       <MenuCards/>
       <MenuCards/>
       <MenuCards/>
    </div>
  )
}

export default RestaurantsHome