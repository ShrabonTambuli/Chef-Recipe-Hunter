import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='text-center bg mt-14'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 px-28 text-center mt-8'>
                <div>
                    <p className='font-semibold font-serif text-xl'>ABOUT US</p>
                    <p className='mt-3'>Sodexo India Signs Celebrity Chef Ajay <br /> Chopra To Enhance Food Experience. Sodexo India On-site Services announced that it has signed an agreement with celebrity Chef Ajay Chopra, an acclaimed and popular name in the Indian culinary industry.</p>
                </div>
                <div>
                    <p className='font-semibold font-serif text-xl'>SERVICE</p>
                    <p className='mt-3'>Bengli Food</p>
                    <p className='mt-3'>Fresh Food Serve</p>
                    <p className='mt-3'>Latest Food Making  </p>
                </div>
                <div>
                    <p className='font-semibold font-serif text-xl'>CONTACT US</p>
                    <p className='mt-3'>524 Broadway , NYC</p>
                    <p className='mt-3'>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <div>
                <p className='font-semibold'>Copyright © 2021 Ginyro. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;