import React, { useEffect } from 'react';
import { footer } from '../../data/Data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './footer.css';

const Footer = () => {

  useEffect(() => {
    AOS.init()
  }, [])
  



  return (
    <>
      <section className="footerContact">
        <div className="container" data-aos='fade-up' data-aos-delay='100'>
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Question ?</h1>
              <p>We'll help you to grow career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container" data-aos='fade-up' data-aos-delay='100'>
          <div className="box">
            <div className="logo">
              {/* <img src="" alt="" /> */}
              <h1><a href="/">Mars.H</a></h1>
              <h2>Do you Need Your Favority Guest?</h2>
              <p>You're in right way to receive the beatifull guest and Hots plate you like on this web. </p>

              <div className="input flex">
                <input type="text" placeholder='Email Address'  />
                <button className='btn4'>Subscribe</button>
              </div>
            </div>
          </div>

          {
            footer.map((val, index) => (
              <div className="box" key={index}>
                <h3>{val.title}</h3>
                <ul>
                  {
                    val.text.map((items, index) => (
                      <li key={index}>{items.list}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </footer>
      <div className="legal">
        <span>© 2022 Mars. Designed By <a href="https://sawajr.netlify.app">Sawajr.</a></span>
      </div>
    </>
  )
}

export default Footer