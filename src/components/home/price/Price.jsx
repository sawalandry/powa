import React, { useEffect } from 'react';
import Heading from '../../common/Heading';
import './price.css';
import PriceCard from './PriceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Price = () => {

  useEffect(() => {
    AOS.init()
  }, []);
  
  return (
    <>
      <section className="price padding">
        <div className="container"data-aos='fade-up' data-aos-delay='100'>
          <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price