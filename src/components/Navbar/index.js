import React from 'react'
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import './index.css'

const Navbar = ({ searchItem, setSearchItem }) => {


  const navigate = useNavigate();

  // for access input value 

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
};

// for logout
  
const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};

// i have added bootstarp and css to navbar


  return (
    <nav className ="navbar navbar-expand-lg bg-dark bg-body-dark">
    <div className ="container-fluid">
      <a className ="navbar-brand text-light fw-bold" href="/"> <i className='icon'><MdShoppingCart /></i>fastcart</a>
      <button className ="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className ="navbar-toggler-icon"></span>
      </button>
      <div className ="collapse navbar-collapse" id="navbarText">
        <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
          <li className ="nav-item">
           
            <input
           className="form-control mt-3"
            type="search"
            value={searchItem}
            onChange={handleSearch}
           placeholder="Search"
           aria-label="Search"
        />
            
         
          </li>
          
        </ul>
        <span className ="navbar-text  text-light">
        <i className="nav-item text-light"><BiMessageDetail className='icon' /></i>
        <i className="nav-item text-light"> <MdNotifications className='icon' /></i>
        <button className='log-out-button' onClick={handleLogout}>Log out</button>
        </span>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
