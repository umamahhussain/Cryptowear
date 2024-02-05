// import React, { useContext,useRef,useEffect,useState } from 'react'
import { Outlet, Link,useNavigate } from "react-router-dom";
// import M from 'materialize-css'

const NavBar = () => {

  const navigate=useNavigate();
  
  const rendercreatepost=()=>
{
  if(localStorage.getItem('jwt'))
  return[
  <li>
     <Link to="/additem">Add Item</Link>
  </li>,
   <li>
   <button className="btn" style={{ backgroundColor: "cadetblue", color: "white",margin:"4px" }}
      type="submit" name="action" 
      onClick={()=>
      {
       localStorage.clear();
       navigate('/home')
      }}>
       Log Out</button>
 </li>
   ]
}


  return (
    <div className="navbar">
      <nav>
        <div className="nav-wrapper black">
          <Link to={"/home"} className="brand-logo" style={{cursor:'pointer',textShadow: "0px 0px 8px white"}} >Stitch n Supply</Link>
          <ul className="right hide-on-med-and-down">
          <li>
        <Link to="/login">Admin Dashboard</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/payment">Payment</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {rendercreatepost()}
          </ul>
        </div>
      </nav>
      <Outlet />
</div>
          
   
  )
}

export default NavBar;