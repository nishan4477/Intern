import React from "react";
import "./footer.scss";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/Images/Companylogo.png";
import { Link } from "react-router-dom";
import {BsTwitter, BsYoutube} from "react-icons/bs"
import {ImLinkedin2} from "react-icons/im"
import logos from "../assets/Images/cc-logo.png"


const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <div className="footer__content">
            <div className="footer__left">
              <div className="main__logo">
                <img src={logo} alt="" />
                </div>
                <p>
                  We are a collaboration of non-government organisation and
                  professionals working to ensure that government spending.
                </p>
                <div className="social__logo">
                  <div className="logo__circle">
                  <a className="logo" href="https://twitter.com " target="_blank">
                    <BsTwitter size={20} color="#3A3D43" />

                      </a>
                  </div>
                  <div className="logo__circle"> <a className="logo" href="https://linkedin.com " target="_blank">
                    <ImLinkedin2 size={20} color="#3A3D43"/></a></div>
                 
                  <div className="logo__circle"> <a className="logo" href="https://youtube.com " target="_blank"><BsYoutube size={20} color="#3A3D43"/>
                    </a></div>
                 
                </div>
              
            </div>

            <div className="list">
              <ul>
                <li>
                  <h3>Links</h3>
                </li>
                <li>
                  <Link to="">Campaigns</Link>
                </li>
                <li>
                  <Link to="">Resources</Link>
                </li>
                <li>
                  <Link to="">News</Link>
                </li>
                <li>
                  <Link to="">About Us</Link>
                </li>
              </ul>
            </div>

            <div className="list">
              <ul>
                <li>
                  <h3>Resources</h3>
                </li>
                <li>
                  <Link to="">Transperency Toolkit</Link>
                </li>
                <li>
                  <Link to="">Evidence</Link>
                </li>
                <li>
                  <Link to="">Best Practices</Link>
                </li>
              </ul>
            </div>

            <div className="list"> 
              <ul>
                <li>
                  <h3>Work With Us</h3>
                </li>
                <li>
                  <Link to="">Contact Us</Link>
                </li>
                <li>
                  <Link to="">Join Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="terms" > 
      <Container>
        <div className="flex">
          <p>Terms and Conditions</p>
          
         <img src={logos} alt="" />
        </div>
      </Container>

      </div>
    </>
  );
};

export default Footer;
