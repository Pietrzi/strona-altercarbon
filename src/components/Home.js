import React from 'react';
import Engage from './Engage';

import logo from '../assets/log.png';

const Home = () => {
    return (
        <>
            <section className="home-section">
            <img src={logo} alt="logo CarbonZero"/>
                {/* <img src={require('../assets/log.png')} alt="logo CarbonZero"/> */}
            </section>
            <Engage />
        </>
    )
}

export default Home
