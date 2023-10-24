import React, { useState } from "react";
import logo from "../assets/Images/Companylogo.png";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiBookAlt } from "react-icons/bi";
import { BsLightningCharge, BsSearch } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";

import { Container, NavLink } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaBars} from "react-icons/fa"
import {RxCross2} from "react-icons/rx"

import "./nav.scss";
export default function NavBar({onClickSearch}) {
    const [mobileNav,setMobileNav] = useState(false);

  return (
    <nav className="navs">
      <Container className="navigator">

        <div className="logo"> <img src={logo} alt="" /></div>

        <button onClick={()=>setMobileNav(!mobileNav)} className="toggle__button">
            {mobileNav ? <RxCross2 size={24} color="white"/> :<FaBars size={24} color="white"/> }</button> 
       <div className="nav__links">
       <ul className= {`desktop__menu ${mobileNav ? 'active' : ""}  `} >
       
       <li>
         <NavLink to="/home">Home </NavLink>
       </li>
       <li>
         <NavLink to="">About Us </NavLink>
       </li>
       <li>
         <NavLink to="">Case Studies </NavLink>
       </li>
       <li>
       <NavDropdown
         id="nav-dropdown-dark-example"
         title="Resources"
         menuVariant="light"
       >
         <NavDropdown.Item href="">
           <div className="dropdown  ">
             <div className="icons">
               <BiBookAlt size={24} color="#1D6FA3 " />
             </div>

             <div className="text">
               <h3>Blog</h3>
               <p>The latest industry news, updates and info</p>
             </div>
           </div>
         </NavDropdown.Item>
         <NavDropdown.Item href="">
           <div className="dropdown  ">
             <div className="icons">
               <BsLightningCharge size={24} color="#1D6FA3 " />
             </div>

             <div className="text">
               <h3>Customer stories</h3>
               <p>Learn how our customers are making big changes.</p>
             </div>
           </div>
         </NavDropdown.Item>
         <NavDropdown.Item href="">
           <div className="dropdown  ">
             <div className="icons">
               <AiOutlinePlayCircle size={24} color="#1D6FA3 " />
             </div>

             <div className="text">
               <h3>Video tutorials</h3>
               <p>Get up and running on new features and techniques.</p>
             </div>
           </div>
         </NavDropdown.Item>
       </NavDropdown>
       </li>
       <button  onClick={() => onClickSearch()} className="btn ">
            <BsSearch size={20} color="white" />
          </button>

    
       
       
     </ul>
       </div>
       
      
       
        
       
      </Container>
    </nav>

  );
}
