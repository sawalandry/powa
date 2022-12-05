import React, { useEffect } from 'react';
import { price } from '../../data/Data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PriceCard = () => {

  useEffect(() => {
    AOS.init()
  }, []);
  
  return (
    <div>
      <div className="content flex mtop">
        {
          price.map((item, index) => (
            <div className="box shadow" key={index} data-aos='fade-up' data-aos-delay='100'>
              <div className="topbtn">
                <button className="btn3">{item.best}</button>
              </div>
              <h3>{item.plan}</h3>
              <h1>
                <span>$</span>
                {item.price}
              </h1>
              <p>{item.ptext}</p>

              <ul>
                {
                  item.list.map((val, index) => {
                    const { icon, text, change } = val
                    return (
                      <li key={index}>
                        <label
                          style={{
                            background: change === 'color' ? '#dc35451f' : '#27ae601f',
                            color: change === 'color' ? '#dc3848' : '#27ae60',
                          }}
                        >
                          {icon}
                        </label>
                        <p>{text}</p>
                      </li>
                    )
                  })
                }
              </ul>

              <button 
                className="btn5"
                style={{
                  background: item.plan === 'Standard' ? '#27ae60' : '#fff',
                  color: item.plan === 'Standard' ? '#fff' : '#27ae60',
                }}
              >
                Start {item.plan}
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PriceCard