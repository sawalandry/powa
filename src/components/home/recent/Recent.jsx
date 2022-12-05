import React, { useEffect } from 'react';
import Heading from '../../common/Heading';
import './recent.css';
import RecentCard from './RecentCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recent = () => {
  
  useEffect(() => {
    AOS.init()
  }, []);
  
  return (
    <>
      <section className="recent padding">
        <div className="container" data-aos='fade-up' data-aos-delay='100'>
          <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent