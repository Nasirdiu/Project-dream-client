import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Design from './Design';
import Review from './Review';
import ReviewAdd from './ReviewAdd';
import Services from './Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Design></Design>
            <Services/>
            <ReviewAdd></ReviewAdd>
            <Contact></Contact>
        </div>
    );
};

export default Home;