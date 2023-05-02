import React from 'react';

const BestSpecialties = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20'>
            <div>
                <img src="/images/BestSpecialties-1.jpg" alt="" />
                <h2 className='text-xl font-serif text-white mt-4'>Broiled Lobster Tails</h2>
                <p className='text-md font-serif mt-3 text-slate-400'>A secret family recipe and our signature dish.</p>
            </div>
            <div>
                <img src="/images/BestSpecialties-2.jpg" alt="" />
                <h2 className='text-xl font-serif text-white mt-4'>Organic Cranberry and Apple</h2>
                <p className='text-md font-serif mt-3 text-slate-400'>A secret family recipe and our signature dish.</p>
            </div>
            <div>
                <img src="/images/BestSpecialties-3.jpg" alt="" />
                <h2 className='text-xl font-serif text-white mt-4'>Fresh chilled salmon</h2>
                <p className='text-md font-serif mt-3 text-slate-400'>A secret family recipe and our signature dish.</p>
            </div>
        </div>
    );
};

export default BestSpecialties;