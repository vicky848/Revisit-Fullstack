import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handlePassword = (e) => {
        setPassword(e.target.value)
    
      }
    
      const handleEmail= (e) => {
        setEmail(e.target.value)
      }
    
    
    

// Login




    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch(" https://revisit-backend-code.onrender.com/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
    
        const data = await res.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
        }
      };
    



      const handleSignupClick = () => {
        navigate("/signup");
    };





  return (
   <div className='d-flex flex-row justify-content-center'>
     <div className='login-container mt-5'>
          <h1 className='login-heading'>Login</h1>
       
        <form onSubmit={handleLogin}>
  <div className ="mb-3">
    <label for="exampleInputEmail1" className ="form-label">Email address</label>
    <input type="email" value={email} className ="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={handleEmail}
    
    />
    
  </div>
  <div className ="mb-3">
    <label for="exampleInputPassword1" className ="form-label">Password</label>
    <input type="password" value={password} className ="form-control" id="exampleInputPassword1"
     onChange={handlePassword}
    
    />
  </div>
 
  <div className="button-container">
  <button type="submit" className ="btn btn-primary m-3">Log in
  

  </button>
  <button className="btn btn-primary" onClick={handleSignupClick}>Signup</button>
  </div>
</form>
    </div>
   </div>
  )
}

export default Login