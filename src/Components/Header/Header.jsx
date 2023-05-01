import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='grid grid-cols-3 gap-4 px-24 mt-9'>
            <div>
                <img src="/images/logo.png" alt="" />
            </div>
            <div>
                <ul className='flex font-serif'>
                    <li>
                        <NavLink to='/home' className={({ isActive }) => (isActive ? 'text-orange-600' : '')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'text-orange-600' : '')}>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to='/applied-jobs' className={({ isActive }) => (isActive ? 'text-orange-600' : '')}>Applied Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-orange-600' : '')}>Blog</NavLink>
                    </li>
                </ul>
            </div>
            <div className='text-center'>
                <button className='btns font-serif'>Star Applying</button>
            </div>
        </nav>
    );
};

export default Header;