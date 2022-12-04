import React from 'react';
import Back from '../common/Back';
import Heading from '../common/Heading';
import imag from '../../images/about.jpg';
import img from '../../images/logo/immio.jpg';
import './about.css';

const About = () => {
  return (
    <div>
      <section className="about">
        <Back name='About Us' title='About Us - Who We Are?' cover={imag} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title='Our Agency Story' ssubtitle='Check out our company story and work process.' />

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, doloremque, sed fugiat qui fugit error suscipit delectus enim blanditiis, ratione aut accusantium molestias.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, doloremque, sed fugiat qui fugit error suscipit delectus enim blanditiis, ratione aut accusantium molestias.</p>
            <button className="btn2">
              More About Us
            </button>
          </div>
          <div className="right row">
            <img src={img} alt="green tent" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About