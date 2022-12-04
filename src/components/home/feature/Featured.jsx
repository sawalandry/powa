import React from 'react';
import Heading from '../../common/Heading';
import FeaturedCard from './FeaturedCard';
import './feature.css';

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading title='Featured Property.' subtitle='Find All Type of Property.' />
          <FeaturedCard /> 
        </div>
      </section>
    </>
  )
}

export default Featured