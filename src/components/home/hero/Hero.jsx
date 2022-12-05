import React, { useEffect } from 'react';
import Heading from '../../common/Heading';
import './hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  
    useEffect(() => {
      AOS.init();
    
    }, [])

  return (
    <>
      <section className="hero">
        <div className="container" data-aos="fade-up" data-aos-delay='100'>
          <Heading title='Search Your Next Home' subtitle='Find new & featured property located in your local city.'/>

          <div className='form' data-aos="zoom-in-down" data-aos-delay='100'>
            <div className="box">
              <span>City/Street</span>
              <input type="text" placeholder='Location' />
            </div>
            <div className="box">
              <span>Property Type</span>
              <input type="text" placeholder='Property Type' />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input type="text" placeholder='Price Range' />
            </div>
            <div className="box">
              <h4>Advance Filter</h4>
            </div>
            <button className="btn1">
              <i className='fa fa-search'></i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}


export default Hero;