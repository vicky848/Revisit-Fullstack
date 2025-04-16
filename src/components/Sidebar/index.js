import React from 'react'
import { IoMdHome } from "react-icons/io";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoPricetag } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import { MdOutlineMan2 } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { RiCoupon2Line } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdTipsAndUpdates } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import './index.css'


// Used multipal React icon to enhance the sidebar menu
 const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <ul class="list-container">
  <li class="list-group-item text-light">
  
    <i className='icon'><IoMdHome className='home-icon' /></i>
    Dashboard
  </li>
  <li class="list-group-item pb-2 text-light">  <i className='icon'><AiOutlineUnorderedList className='home-icon'  /></i>Orders</li>
  <li class="list-group-item  pb-2  text-light">  <i className='icon'><IoPricetag className='home-icon' /></i>Products</li>
  <li class="list-group-item  pb-2  text-light">  <i className='icon'><FaFolder className='home-icon' /></i>Categories</li>
  <li class="list-group-item  pb-2  text-light">  <i className='icon'><MdOutlineMan2  className='home-icon'/></i>Customers</li>
  <li class="list-group-item  pb-2  text-light">  <i className='icon'><TbReportSearch className='home-icon' /></i>Reports</li>
  <li class="list-group-item  pb-2  text-light">  <i className='icon'><RiCoupon2Line className='home-icon' /></i>Coupons</li>
  <li class="list-group-itemp pb-2  text-light">  <i className='icon'><MdOutlineMessage className='home-icon' /></i>Inbox</li>
</ul>

  <div>
  <h6 className='text-light'>Others Information</h6>
   <ul>
    <li className='text-light'>
        
     <i className='icon' ><FaRegQuestionCircle  className='home-icon'/></i>   Knowledge Base</li>
    <li className='text-light'><i className='icon'><MdTipsAndUpdates className='home-icon' /></i> Product Update</li>
   </ul>

  </div>
  <h6 className='text-light'>Setting</h6>
   <ul>
    <li className='text-light'>
        <i className='icon'><RiAccountCircleFill  className='home-icon'/></i>
        Personal Setting</li>
    <li className='text-light'>
        <i className='icon'><IoSettingsOutline className='home-icon' /></i>
        Global Setting</li>
   </ul>

    </div>
  )
}

export default Sidebar