import React from 'react';
import MainSquare from '../../components/MainSquare/MainSquare'

const Home = () => {
    return (
        <div>
            <MainSquare route="about" text="About"/>
            <MainSquare route="portfolio" text="Portfolio"/>
            <MainSquare route="contact" text="Contact" />
        </div>
    );
};

export default Home;