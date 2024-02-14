import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Card from './components/Card';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
  
    
    <Routes>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>



    
  )
  
  
}

export default App;
