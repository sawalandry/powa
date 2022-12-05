import React, { useEffect } from 'react';
import './award.css';
import Heading from '../../common/Heading';
import AOS from 'aos';
import 'aos/dist/aos.css';


const awardsData = [
   {
    icon: <i className='fa-solid fa-trophy'></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i className='fa-solid fa-briefcase'></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i className='fa-solid fa-lightbulb'></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i className='fa-solid fa-heart'></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
]


const Award = () => {

  useEffect(() => {
    AOS.init()
  }, []);
  

  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading title='Over 1M Happy Users Being With Us Still They Love Our Services.'
            subtitle='Our Award.'
          />
          <div className="content grid4 mtop" data-aos='fade-up' data-aos-delay='100'>
            {
              awardsData.map((val, index) => (
                <div className="box" key={index} data-aos='fade-up' data-aos-delay='100'>
                  <div className="icon">
                    <span>{val.icon}</span>
                  </div>
                  <h1>{val.num}</h1>
                  <p>{val.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Award