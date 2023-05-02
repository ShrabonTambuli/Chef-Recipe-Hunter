import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='grid grid-cols-2 text-center items-center px-8 mt-36'>
            <div>
                <img className='rounded-2xl' src="/images/error-page-img.webp" alt="" />
            </div>
            <div>
                <button className='bg-orange-600 px-9 py-5 rounded-3xl text-white'>
                    <NavLink to="/">GO TO HOME PAGE</NavLink>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;