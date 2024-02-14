import React from "react";
import "./navbar.css"
import Avatar from 'react-avatar';

import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className="nav">
      <div className="nav-left">
        <h2>QUICK BITE</h2>
      </div>
      <div className="nav-right">


        {   user === null ?  <>
        <Link to="/SignUp"><button m={"15px"} className="signUp">SignUp</button></Link>
        <Link to="/SignIn"><button m={"15px"}className="signIn">SignIn</button></Link>
        </> :  
       // console.log(user.name)
       <button className="profile-btn">
       <Avatar name={user.name} round={true}  size="60" color={'whitesmoke'} fgColor="black"/> 
       </button>
        }
        
        
        
      </div>
    </div>
    
  );
};

export default Navbar;
