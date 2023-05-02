import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* <div className='banner mt-10 text-center border-4'>
                    <h4 className='text-orange-600 font-serif text-2xl'>ONLY THE BEST</h4>
                    <h1 className='text-white font-serif text-7xl leading-tight mt-24'>FRESH <br /> SEAFOOD</h1>
                    <p className='text-white font-serif text-2xl mt-10'>Join us at the table as you dine for the perfect meal.</p>
                    <button className=' bg-orange-600 text-white font-serif text-2xl mt-20 px-7 py-5 rounded-2xl'>BOOK A TABLE</button>
            </div> */}
            <div className='grid grid-cols-1 lg:grid-cols-2 text-center mt-14'>
                <div className='text-center'>
                    <h4 className='text-orange-600 font-serif text-2xl mt-14'>ONLY THE BEST</h4>
                    <h1 className='text-black font-serif text-8xl leading-tight mt-14'>FRESH <br /> SEAFOOD</h1>
                    <p className='text-black font-serif text-2xl mt-6'>Join us at the table as you dine for the perfect meal.</p>
                    <button className=' bg-orange-600 text-black font-serif text-2xl mt-10 px-7 py-5 rounded-2xl'>BOOK A TABLE</button>
                </div>
                <div>
                    <img src="../../../public/images/banner-img2.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;