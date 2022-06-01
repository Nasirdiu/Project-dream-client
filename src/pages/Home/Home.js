import React from 'react';
import Banner from './Banner';
import Design from './Design';
import Review from './Review';
import Services from './Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Design></Design>
            <Services/>
            <Review></Review>
        </div>
    );
};

export default Home;