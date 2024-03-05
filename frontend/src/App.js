import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Card from './components/Card';
import SignUp from './components/HomePage/SignUp';
import SignIn from './components/HomePage/SignIn';
import Home from './components/HomePage/Home';
import RestaurantsHome from './components/RestaurantsPage/RestaurantsHome';

import {Route,Routes} from 'react-router-dom'


function App() {
  return (
  
    
    <Routes>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Restaurants' element={<RestaurantsHome/>}/>
    </Routes>



    
  )
  
  
}

export default App;
