import React, {useState} from 'react';
import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import './Header.css';

// Images
import homeImage from './../../img/VectorHome.png';
import newPlanImage from './../../img/NewPlan.png';
import hamburgerImage from './../../img/Hamburger.png';
const Header = () => {
    return (
        <div>
            {/* <header>
            <img src={Logo} alt="Logo" />
            </header> */}
            <nav
            style={{
                borderBottom: '2px solid #1F4068',
                padding: '1rem',
                backgroundColor: '#000000',
                fontSize: '1.5rem',
            }}
            >
            <div id="btn">
                <Link to="/">
                    <img src= {homeImage} alt="home"/>
                </Link>
                <Link to="/new-plan">
                    <img src= {newPlanImage} alt="New Plan" />
                </Link>
                <Link to="/more">
                    <img src= {hamburgerImage} alt="Hamburger Menu" />
                </Link>
            </div>
            </nav>
      </div>
    )
}

export default Header;
