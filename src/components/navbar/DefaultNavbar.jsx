import React from 'react';
import styles from './navbar.module.css'; 

import { NavLink } from "react-router-dom";

const DefaultNavbar = () => {
  return (
    <header>
      <div className={`container ${styles.header_container}`}>
        <h2 id="logo">FASCO</h2>

        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Deals</NavLink></li>
            <li><NavLink to="">New Arrivals</NavLink></li>
            <li><NavLink to="/">Packages</NavLink></li>
          </ul>

          <div id="btns-container">
            <button className={`${styles.btn} ${styles.signin}`}>Sign in</button>
            <button className={`${styles.btn} ${styles.signup}`}>Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default DefaultNavbar;
