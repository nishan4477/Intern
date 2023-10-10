import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import logo from "../assets/Images/Companylogo.png";
import { Link } from 'react-router-dom'



import NavDropdown from "react-bootstrap/NavDropdown";
import { BiBookAlt } from "react-icons/bi";
import {BsLightningCharge, BsSearch} from  "react-icons/bs"
import {AiOutlinePlayCircle} from 'react-icons/ai'
const Navigator = () => {
  return (
    <nav className="navs">
    <Container className="navigator">
      <ul className="flex">
        <li>
          <Link to="/">
        <NavLink to="/"> <img src={logo} alt="" />  </NavLink>
        </Link>
        </li>
        <li>
          <NavLink to="/home">Home </NavLink>
        </li>
        <li>
          <NavLink to="">About Us </NavLink>
        </li>
        <li>
          <NavLink to="">Case Studies </NavLink>
        </li>
        <NavDropdown 
          id="nav-dropdown-dark-example"
          title="Resources"
          menuVariant="light"
        >
          <NavDropdown.Item href="">
            <div className="dropdown  ">
              
                <div  className="icons">
                  <BiBookAlt   size={24} color='#1D6FA3 '/>
                </div>
             
              <div className="text">
                <h3>Blog</h3>
                <p>The latest industry news, updates and info</p>
              </div>
            </div>
          </NavDropdown.Item>
          <NavDropdown.Item href="">
          <div className="dropdown  ">
              
              <div  className="icons">
                <BsLightningCharge  size={24} color='#1D6FA3 ' />
              </div>
           
            <div className="text">
              <h3>Customer stories</h3>
              <p>Learn how our customers are making big changes.</p>
            </div>
          </div>
          </NavDropdown.Item>
          <NavDropdown.Item href="">
          <div className="dropdown  ">
              
              <div  className="icons">
                <AiOutlinePlayCircle  size={24} color='#1D6FA3 ' />
              </div>
           
            <div className="text">
              <h3>Video tutorials</h3>
              <p>Get up and running on new features and techniques.</p>
            </div>
          </div>
          </NavDropdown.Item>
        </NavDropdown>
        <button className="btn ms-auto"><BsSearch size={20} color="white"/></button>
      </ul>
    
    </Container>
    </nav>
   
  );
};

export default Navigator;
