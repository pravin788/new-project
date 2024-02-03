import React from "react";
import "./navbar.css"
// import { Box,Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <h2>QUICK BITE</h2>
      </div>
      <div className="nav-right">
        <button m={"15px"} className="signUp">SignUp</button>
        <button m={"15px"}className="signIn">SignIn</button>
        
      </div>
    </div>
    
  );
};

export default Navbar;
