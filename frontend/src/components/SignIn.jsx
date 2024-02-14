import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignIn() {    

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
       
        axios.post("http://localhost:5000/login", { email, password })
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate("/")
            }else{
                navigate("/SignUp")
                alert("You are not registered to this service")

            }
       
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="">
        <div className="">
            <h2><center>Login</center></h2>
            
                
                <div className="">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='' 
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='' 
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type="submit" onClick={handleSubmit()} className="">
                    Login
                </button>
               
                <p>Don't have an account?</p>
                <Link to="/SignUp" className="">
                    Sign Up
                </Link>
            
        </div>
    </div>
  );
}

export default SignIn;