import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='grid grid-cols-1 lg:grid-cols-3 items-center gap-4 px-24 mt-9'>
            <div>
                <img src="/images/logo.png" alt="" />
            </div>
            <div className='mx-auto'>
                <ul className='flex font-serif'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-orange-600' : '')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-orange-600' : '')}>Blog</NavLink>
                    </li>
                </ul>
            </div>
            <div className='mx-auto inline-flex items-center'>
                <div className='font-semibold font-serif text-xl'>
                    <button className='bg-orange-500 px-4 py-2 rounded-2xl'>
                        <NavLink to='/login' >LogIn</NavLink>
                    </button>
                </div>
                <img className='w-16 h-16 rounded-full ms-6' src="/images/Chef.jpg" alt="" />
                <div className='font-semibold font-serif text-xl ms-6'>
                    <button className='bg-orange-500 px-4 py-2 rounded-2xl'>
                        <NavLink to='/' >LogOut</NavLink>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;