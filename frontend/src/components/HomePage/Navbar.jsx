import { useState,useEffect } from "react";
import React from "react";
import "./navbar.css"
import Avatar from 'react-avatar';
// import Logout from "./Logout";

import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  
  const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 100;
          console.log('isScrolled:', isScrolled);
          setScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      // console.log('scrolled:', scrolled);
      
        
         
      

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('userInfo');
    navigate('/')
}
  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className={`nav-left ${scrolled ? "scrolled-left" : ""}`}>
        <h2>QUICK BITE</h2>
      </div>
      <div className="nav-right">


        {   user === null ?  <>
        <Link to="/SignUp"><button m={"15px"} className="signUp">SignUp</button></Link>
        <Link to="/SignIn"><button m={"15px"}className="signIn">SignIn</button></Link>
        </> :  
       // console.log(user.name)
       <button className="profile-btn" onClick={logout}>
       <Avatar  name={user.name} round={true}  size="60" color={'#f44322'} fgColor="whitesmoke"/> 
       </button>
        }
        
        
        
      </div>
    </div>
    
  );
};

export default Navbar;
