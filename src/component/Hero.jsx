import React, { useState } from "react";
import "./hero.scss";
import { Container, NavLink, Row, Col } from "react-bootstrap";
// import Navigator from './Navigator'
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";



const Hero = ({search, onClickSearch}) => {

  return (
    <section className="hero">




      {search && (
        <div className="searchbox">
            <Container>
          <div className="search__container">
          
            <input
              type="text"
              className="search__icon"
              name="searchbox"
              placeholder="Search"
            ></input>
            <button onClick={() => onClickSearch()} className="cross">
              <RxCrossCircled size={30} color="black" />
            </button>
            
          </div>
          </Container>
        </div>
      )}

      <Container>
        <div className="hero__content">
          <h2>Beautiful analytics to grow smarter</h2>
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>

          <button className="btn">
            Why Catalog? <AiOutlineArrowRight size={20} color="white" />{" "}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
