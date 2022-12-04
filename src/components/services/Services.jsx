import React from 'react';
import imgSev from '../../images/services.jpg';
import Back from '../common/Back';
import '../home/feature/feature.css';
import FeaturedCard from '../home/feature/FeaturedCard';


const Services = () => {
  return (
    <>
      <section className="services mb">
        <Back name='Services' title='Services - All Services' cover={imgSev} />
        <div className="featured container">
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services