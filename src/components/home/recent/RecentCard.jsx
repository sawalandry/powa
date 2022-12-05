import React, { useEffect } from 'react';
import imag from '../../../images/list/p-1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const listData = [
  {
    id: 1,
    cover: imag,
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: imag,
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: imag,
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: imag,
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: imag,
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: imag,
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
]

const RecentCard = () => {

  useEffect(() => {
    AOS.init()
  }, []);
  
  return (
    <>
      <div className="content grid3 mtop" data-aos="fade-up" data-aos-delay='100'>
        {
          listData.map((val, index) => {
            const { cover, category, location, name, price, type } = val
            return (
              <div className="bax shadow" key={index}  data-aos='fade-up' data-aos-delay='100'>
                <div className="img">
                  <img src={cover} alt={name} />
                </div>
                <div className="text">
                  <div className="category flex">
                    <span
                      style={{
                        background: category === 'For Sale' ? '#25b5791a' : '#ff98001a',
                        color: category === 'For Sale' ? '#25b579' : '#ff9800'
                      }}
                    >
                      {category}
                    </span>
                    <i className='fa fa-heart'></i>
                  </div>
                  <h4>{name}</h4>
                  <p>
                    <i className='fa fa-location-dot'></i> {location}
                  </p>
                </div>
                <div className="button flex">
                  <div>
                    <button className="btn2">
                      {price}
                    </button>
                    <label htmlFor="">/sqft</label>
                  </div>
                  <span>{type}</span>
                </div>
              </div>
            )
            })
        }
      </div>
    </>
  )
}

export default RecentCard