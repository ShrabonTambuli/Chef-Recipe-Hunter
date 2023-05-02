import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='grid grid-cols-2 text-center items-center px-8 mt-36'>
            <div>
                <img className='rounded-2xl' src="/images/error-page-img.webp" alt="" />
            </div>
            <div>
                <h1 className='font-semibold font-serif text-4xl'>PAGE NOT FOUNT</h1>
                <h1 className='font-semibold font-serif text-4xl'>404</h1>
                <button className='bg-orange-600 px-9 py-5 rounded-3xl text-white mt-4'>
                    <NavLink to="/">GO TO HOME PAGE</NavLink>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;