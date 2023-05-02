import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsSection from '../ChefsSection/ChefsSection';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 text-center mt-14'>
                <div className='text-center'>
                    <h4 className='text-orange-600 font-serif text-2xl mt-14'>ONLY THE BEST</h4>
                    <h1 className='text-black font-serif text-8xl leading-tight mt-14'>FRESH <br /> SEAFOOD</h1>
                    <p className='text-black font-serif text-2xl mt-6'>Join us at the table as you dine for the perfect meal.</p>
                    <button className=' bg-orange-600 text-black font-serif text-2xl mt-10 px-7 py-5 rounded-2xl'>BOOK A TABLE</button>
                </div>
                <div>
                    <img src="/images/banner-img2.webp" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-center text-5xl font-serif font-semibold mt-16'>Chefs--Section</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 px-10 mt-14'>
                    {
                        chefs.map(chef => <ChefsSection key={chef.id} chef={chef} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;