import React from 'react';
import AllCar from '../../AllCar/AllCar';
import Footer from '../../Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;