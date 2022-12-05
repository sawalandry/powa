import React, { useEffect } from 'react';
import image from '../../../images/hero/h1.png';
import image1 from '../../../images/hero/h2.png';
import image2 from '../../../images/hero/h3.png';
import image3 from '../../../images/hero/h4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const featuredData = [
  {
    cover: image,
    name: "House & Villa",
    total: "155 Properties",
  },
  {
    cover: image1,
    name: "Apartment",
    total: "300 Properties",
  },
  {
    cover: image2,
    name: "Office & Studio",
    total: "80 Properties",
  },
  {
    cover: image3,
    name: "villa & Condo",
    total: "80 Properties",
  },
  {
    cover: image3,
    name: "Family House",
    total: "122 Properties",
  },
]

const FeaturedCard = () => {

  useEffect(() => {
    AOS.init()
  }, []);
  
  return (
    <>
      <div className="content grid5 mtop" data-aos="fade-up" data-aos-delay='100'>
        {
          featuredData.map((items, index) => (
            <div className="box" key={index} data-aos="fade-up" data-aos-delay='100'>
              <img src={items.cover} alt={items.name} />
              <h4>{items.name}</h4>
              <label>{items.total}</label>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default FeaturedCard