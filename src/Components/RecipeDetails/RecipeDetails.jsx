import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const chef = useLoaderData();
    const { Chef_Name, Chef_Picture, Likes, Numbers_of_recipes, a_short_bio_description, Years_of_experience, id } = chef;
    console.log(chef);
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 text-center mt-14'>
                <div className='text-center'>
                    <h4 className='text-orange-600 font-serif font-semibold text-4xl mt-14'>{Chef_Name}</h4>
                    <h1 className='text-black font-serif text-3xl leading-tight mt-8'>Bio--</h1>
                    <p className='text-black font-serif text-2xl mt-6 px-5'>{a_short_bio_description}</p>
                    <hr className='mt-6 mx-14 border-2 border-orange-600' />
                    <div className='flex justify-around mt-8'>
                        <p className='text-black font-serif text-3xl leading-tight'>Likes: {Likes}</p>
                        <p className='text-black font-serif text-3xl leading-tight'>Recipes: {Numbers_of_recipes}</p>
                    </div>
                    <button className=' bg-orange-600 text-black font-serif text-2xl mt-10 px-7 py-4 rounded-2xl'><Link to='/booking' >{Years_of_experience}</Link></button>
                </div>
                <div>
                    <img className='rounded-2xl border-2 border-green-600' src={Chef_Picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;