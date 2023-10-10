import React from "react";
import Heading from "./Heading";
import { Col, Container, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <section className="contact">
      <Container>
        <Heading
          title="Contact Us"
          children="If you have any further inquires, please let us know by filling the form below"
        />

        <div className="form">
          <form className="d-flex flex-column">
         
             <div className="grid ">
                <label>
                  <h4>First Name</h4>

                  <input type="text" name="firstName" required  autoComplete="off"/>
                </label>
              

            
                <label>
                  <h4>Last Name</h4>
                  <input type="text" name="lastName"  autoComplete="off" required/>
                </label>
                </div>
              

              

              
                <label>
                  <h4>Email</h4>

                  <input type="email" name="email" autoComplete="off" required/>
                </label> <br/>
            
                <label>
                  <h4> Message</h4>
                  <textarea name="message" />
                </label>
            

            <button className="downbtn" type="submit">
             <h4>Submit</h4> 
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
