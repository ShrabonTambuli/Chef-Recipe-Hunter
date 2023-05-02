import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='banner mt-10 text-center'>
            <div className='pt-28 pb-24'>
                <h4 className='text-orange-600 font-serif text-2xl'>ONLY THE BEST</h4>
                <h1 className='text-white font-serif text-7xl leading-tight mt-24'>FRESH <br /> SEAFOOD</h1>
                <p className='text-white font-serif text-2xl mt-10'>Join us at the table as you dine for the perfect meal.</p>
                <button className=' bg-orange-600 text-white font-serif text-2xl mt-20 px-7 py-5 rounded-2xl'>BOOK A TABLE</button>
            </div>
        </div>
    );
};

export default Home;