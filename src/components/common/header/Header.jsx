import React, { useState, useEffect } from 'react';
import './header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { nav } from '../../data/Data';
import { Link } from 'react-router-dom';

  
  const Header = () => {
    useEffect(() => {
      AOS.init();
    
    }, []);
    const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flex" data-aos='fade-up' data-aos-delay='100'>
          <div className="logo">
            {/* <img src="" alt="" srcset="Our Logo" /> */}
            <h1><a href="/">Mars.H</a></h1>
          </div>
          <div className="nav">
            <ul className={navList ? 'small' : 'flex'}>
              {
                nav.map((list, index) => (
                  <li key={index}>
                    <Link to={list.path} className='me'>{list.text}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>2</span> My List
            </h4>
            <button className="btn1">
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header