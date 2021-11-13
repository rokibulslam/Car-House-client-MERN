import React from 'react';

import Footer from '../../Footer/Footer';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';

import Navigation from '../Navigation/Navigation';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Cars></Cars>
            <Reviews></Reviews>
            <Article></Article>
            <Footer></Footer>
        </div>
    );
};

export default Home;