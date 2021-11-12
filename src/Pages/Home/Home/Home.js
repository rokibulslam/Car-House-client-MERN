import React from 'react';
import AllCycle from '../../AllCycle/AllCycle';
import Banner from '../Banner/Banner';
import Cycles from '../Cycles/Cycles';
import Navigation from '../Navigation/Navigation';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Cycles></Cycles>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;