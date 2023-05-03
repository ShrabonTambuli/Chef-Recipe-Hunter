import React from 'react';
import './Home.css'
import { Link, useLoaderData } from 'react-router-dom';
import ChefsSection from '../ChefsSection/ChefsSection';
import OurStory from '../OurStory/OurStory';
import BestSpecialties from '../BestSpecialties/BestSpecialties';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 text-center mt-14'>
                <div className='text-center'>
                    <h4 className='text-orange-600 font-serif text-2xl mt-14'>ONLY THE BEST</h4>
                    <h1 className='text-black font-serif text-7xl leading-tight mt-14'>FRESH <br /> SEAFOOD</h1>
                    <p className='text-black font-serif text-2xl mt-6'>Join us at the table as you dine for the perfect meal.</p>
                    <button className=' bg-green-500 text-black font-serif text-2xl mt-10 px-7 py-4 rounded-2xl'><Link to='/booking' >BOOK A TABLE</Link></button>
                </div>
                <div>
                    <img src="/images/banner-img2.webp" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-center text-5xl font-serif font-semibold mt-16 underline'>Chefs--Section</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 px-10 mt-14'>
                    {
                        chefs.map(chef => <ChefsSection key={chef.id} chef={chef} />)
                    }
                </div>
            </div>
            <div className='text-center mt-14'>
                <h1 className='text-5xl font-serif underline'>Story--Section</h1>
                <OurStory />
            </div>
            <div className='bg2 text-center py-20 px-10'>
                <h1 className='text-white text-5xl font-serif'>BEST SPECIALTIES</h1>
                <BestSpecialties/>
            </div>
        </div>
    );
};

export default Home;