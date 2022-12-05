import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heading = ({ title, subtitle }) => {
  useEffect(() => {
    AOS.init()
  }, []);
  
  

  return (
    <div className='heading' data-aos='fade-up' data-aos-delay='100'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default Heading