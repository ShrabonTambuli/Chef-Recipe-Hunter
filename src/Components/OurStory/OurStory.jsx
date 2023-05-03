import React from 'react';
import { Link } from 'react-router-dom';

const OurStory = () => {
    return (
        <div className='px-8 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center text-center'>
            <div>
                <img src="/images/Ourstory-img.webp" alt="" />
            </div>
            <div>
                <h1 className='text-6xl font-serif'>OUR STORY</h1>
                <p className='text-xl font-serif mt-10'>Enjoying sustainable seafood makes us happy as a green-rated clam! <br /> But how do you purchase a good clam from your local market? And, once you have them, how do you cook them? Monterey Bay Aquarium Executive Chef Matthew Beaudin gives his best tips for how to choose and prepare clams below. </p>
                <button className='mt-10 bg-green-500 px-6 py-3 rounded-2xl font-serif'><Link to='/booking' >BOOK A TABLE</Link></button>
            </div>
        </div>
    );
};

export default OurStory;