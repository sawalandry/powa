import React, { useEffect } from 'react';
import Back from '../common/Back';
import Heading from '../common/Heading';
import imag from '../../images/about.jpg';
import img from '../../images/logo/immio.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

const About = () => {

  useEffect(() => {
    AOS.init()
  }, []);
  
  return (
    <div>
      <section className="about">
        <Back name='About Us' title='About Us - Who We Are?' cover={imag} />
        <div className="container flex mtop" data-aos='fade-up' data-aos-delay='100'>
          <div className="left row">
            <Heading title='Our Agency Story' ssubtitle='Check out our company story and work process.' />

            <p data-aos='fade-up' data-aos-delay='100'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Voluptate, doloremque, sed fugiat qui fugit error suscipit 
              delectus enim blanditiis, ratione aut accusantium molestias.
            </p>
            <p data-aos='fade-up' data-aos-delay='100'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Voluptate, doloremque, sed fugiat qui fugit error suscipit 
              delectus enim blanditiis, ratione aut accusantium molestias.
            </p>
            <button className="btn2" data-aos='fade-up' data-aos-delay='100'>
              More About Us
            </button>
          </div>
          <div className="right row" data-aos='fade-up' data-aos-delay='100'>
            <img src={img} alt="green tent" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About