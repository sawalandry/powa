import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Back = ({ name, title, cover }) => {

  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <div>
      <div className="back" data-aos='fade-up' data-aos-delay='100'>
        <div className="container">
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={cover} alt={name} />
      </div>
    </div>
  )
}

export default Back