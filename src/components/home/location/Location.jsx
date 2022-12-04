import React from 'react';
import Heading from '../../common/Heading';
import './location.css';
import Item from '../../../images/location/city-1.png';
import Item1 from '../../../images/location/city-4.png';
import Item2 from '../../../images/location/city-6.png';
import Item3 from '../../../images/location/city-2.png';
import Item4 from '../../../images/location/city-5.png';
import Item5 from '../../../images/location/city-3.png';

const locationData = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: Item
  },
  {
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: Item1
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: Item2
  },
  {
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: Item3
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: Item4
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: Item5
  },
]

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading title='Explore By Location' 
            subtitle='Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam.'
          />

          <div className="content grid3 mtop">
            {
              locationData.map((item, index) => (
                <div className="box" key={index}>
                  <img src={item.cover} alt={item.name} />
                  <div className="overlay">
                    <h5>{item.name}</h5>
                    <p>
                      <label>{item.Villas}</label>
                      <label>{item.Offices}</label>
                      <label>{item.Apartments}</label>
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Location