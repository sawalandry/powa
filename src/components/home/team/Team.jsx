import React from 'react';
import Heading from '../../common/Heading';
import './team.css';
import imag from "../../../images/customer/team-1.jpg";
import imag1 from "../../../images/customer/team-2.jpg";
import imag2 from "../../../images/customer/team-4.jpg";
import imag3 from "../../../images/customer/team-2.jpg";
import imag4 from "../../../images/customer/team-5.jpg";
import imag5 from "../../../images/customer/team-3.jpg";


const teamData = [
  {
    list: "50",
    cover: imag,
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [<i className='fa-brands fa-facebook-f'></i>, <i className='fa-brands fa-linkedin'></i>, <i className='fa-brands fa-twitter'></i>, <i className='fa-brands fa-instagram'></i>],
  },
  {
    list: "70",
    cover: imag1,
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [<i className='fa-brands fa-facebook-f'></i>, <i className='fa-brands fa-linkedin'></i>, <i className='fa-brands fa-twitter'></i>, <i className='fa-brands fa-instagram'></i>],
  },
  {
    list: "80",
    cover: imag2,
    address: "Denever, USA",
    name: "Anna K. Young",
    icon: [<i className='fa-brands fa-facebook-f'></i>, <i className='fa-brands fa-linkedin'></i>, <i className='fa-brands fa-twitter'></i>, <i className='fa-brands fa-instagram'></i>],
  },
  {
    list: "51",
    cover: imag3,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [<i className='fa-brands fa-facebook-f'></i>, <i className='fa-brands fa-linkedin'></i>, <i className='fa-brands fa-twitter'></i>, <i className='fa-brands fa-instagram'></i>],
  },
  {
    list: "42",
    cover: imag4,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [<i className='fa-brands fa-facebook-f'></i>, <i className='fa-brands fa-linkedin'></i>, <i className='fa-brands fa-twitter'></i>, <i className='fa-brands fa-instagram'></i>],
  },
  {
    list: "38",
    cover: imag5,
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [<i className='fa-brands fa-facebook-f'></i>, <i className='fa-brands fa-linkedin'></i>, <i className='fa-brands fa-twitter'></i>, <i className='fa-brands fa-instagram'></i>],
  },
]
const Team = () => {
  return (
    <>
      <div className="team background">
        <div className="container">
          <Heading title='Our Featured Agents' 
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
          />

          <div className="content rescol mtop grid3">
            {
              teamData.map((val, index) => (
                <div className="box" key={index}>
                  <button className="btn3">
                    {val.list} Listing
                  </button>
                  <div className="details">
                    <div className="img">
                      <img src={val.cover} alt={val.name} />
                      <i className='fa-solid fa-circle-check'></i>
                    </div>
                    <i className='fa fa-location-dot'></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>

                    <ul>
                      {
                        val.icon.map((icon, index) => (
                          <li key={index}>{icon}</li>
                        ))
                      }
                    </ul>
                    <div className="button flex">
                      <button>
                        <i className='fa fa-envelope'></i>
                        Message
                      </button>
                      <button className="btn4">
                        <i className="fa fa-phone-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Team