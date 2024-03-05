import React,{useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name , setName] = useState()
    const [email, setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
       
        axios.post("http://localhost:5000/SignUp", { name, email, password })
        .then(userData => {console.log(userData)
        localStorage.setItem("userInfo", JSON.stringify(userData.data));
        navigate("/")
        })
        .catch(err => console.log(err))

    }

    return (
        <div className="">
            <div className="">
            <h2><center>Sign Up</center></h2>
    
            
                    <div className="">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" 
                        placeholder='Enter Name' 
                        autoComplete='off' 
                        name='email' 
                        className=''
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <button type="submit" onClick={handleSubmit} className="">
                        Sign Up
                    </button>
                    
                    <p>Already have an account?</p>
                    <Link to="/SignIn" className="">
                    SignIn
                    </Link>
                
            </div>
        </div>
      );

}



export default SignUp;

