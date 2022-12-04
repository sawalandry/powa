import React from 'react';
import img from "../../images/pricing.jpg";
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <div>
      <section className="contact mb">
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className="container">
          <form action="" className="shadow">
            <h4>Fill Up The Form</h4> <br />
            <div>
              <input type="text" placeholder='Enter Your Full Name' />
              <input type="text" placeholder='Enter Your Email' />
            </div>
            <input type="text" placeholder='Subject' />
            <textarea cols="30" rows="10"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact