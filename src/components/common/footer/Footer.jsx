import React from 'react';
import { footer } from '../../data/Data';
import './footer.css';

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
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
        <div className="container">
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
        <span>© 2022 Mars. Designed By <a href="/">Sawajr.</a></span>
      </div>
    </>
  )
}

export default Footer