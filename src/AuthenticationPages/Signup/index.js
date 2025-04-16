import {useState} from 'react'
import './index.css'
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [username , setUsername] = useState("");

    const navigate = useNavigate();

  const handleUsername = (e) =>{
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)

  }

  const handleEmail= (e) => {
    setEmail(e.target.value)
  }


// Signup


    const handleSignup = async(e) => {
        e.preventDefault()
        
        try {

          const res = await fetch("https://revisit-backend-code.onrender.com/api/auth/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username, email, password }),
          });  

          const data = await res.json();
          if (data.token) {
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
          }

        } catch (error) {
    console.error("Error during signup:", error);
    alert("Signup failed: " + error.message);
  }
        


    };
    const handleLogInClick = () => {
      navigate("/login");

    }




  return (
   <div className='d-flex flex-row justify-content-center mt-4'>
     <div className='signup-container'>
        <form onSubmit={handleSignup}> 
            <h1 className='register-heading'>Register</h1>
       
        <div className ="mb-3">
    <label for="exampleInputPassword1" className ="form-label">Username</label>
    <input type="text"
    className ="form-control" 
    id="exampleInputUsername" 
    value={username}
    onChange={handleUsername}/>
  </div>


  <div className ="mb-3">
    <label for="exampleInputEmail1" className ="form-label">Email address</label>
    <input type="email"
     className ="form-control" 
     value={email}
     id="exampleInputEmail1"
      aria-describedby="emailHelp"
       onChange={handleEmail}/>
       
    
  </div>
  <div className ="mb-3">
    <label for="exampleInputPassword1" className ="form-label">Password</label>
    <input type="password" className ="form-control" id="exampleInputPassword1" value={password} onChange={handlePassword}/>
  </div>
  
  <button type="submit" className ="btn btn-primary m-2"  >Sign up</button>
  <button className="btn btn-primary" onClick={handleLogInClick}>Log in</button>
</form>
    </div>

   </div>
  )
}

export default Signup