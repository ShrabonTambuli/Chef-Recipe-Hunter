import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetails = () => {
    const chef = useLoaderData();
    const { Chef_Name, Chef_Picture, Likes, Numbers_of_recipes, a_short_bio_description, Years_of_experience } = chef;

    const { recipe_name, recipe_name2, recipe_name3, recipe_img, recipe_img2, recipe_img3, recipe_cooking_method, recipe_cooking_method2, recipe_cooking_method3, recipe_rating, recipe_rating2, recipe_rating3, Favorite_button, Favorite_button2, Favorite_button3 } = chef;

    const [show, setShow] = useState(true)
    const [view, setView] = useState(true)
    const [see, setSee] = useState(true)

    const notify = () => {
        toast("This Recipe Is My Favorite!!");
        if (show == true) {
            setShow(false);
        }
    }
    const notify2 = () => {
        toast("This Recipe Is My Favorite!!");
        if (view == true) {
            setView(false);
        }
    }
    const notify3 = () => {
        toast("This Recipe Is My Favorite!!");
        if (see == true) {
            setSee(false);
        }
    }

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 text-center mt-14'>
                <div className='text-center'>
                    <h4 className='text-orange-600 font-serif font-semibold text-4xl mt-4'>{Chef_Name}</h4>
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
            <div>
                <h1 className='text-center mt-16 text-4xl font-serif font-semibold'>--:Recipes:--</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 ms-10'>
                    <Card className='border-2 border-orange-600 rounded-xl pb-4' style={{ width: '24rem' }}>
                        <Card.Img className='p-2 rounded-2xl h-72 w-full' variant="top" src={recipe_img} />
                        <Card.Body className='px-2'>
                            <Card.Title className='font-semibold font-serif text-xl'>{recipe_name}</Card.Title>
                            <Card.Text className='font-serif text-lg mt-4'><span className='font-semibold'>Cooking Method:</span> <br />{recipe_cooking_method}
                            </Card.Text>
                            <ListGroup.Item className='mt-4 font-serif font-semibold'><span className='font-semibold'>Rating:</span> {recipe_rating}</ListGroup.Item>
                        </Card.Body>
                        <Card.Body className='px-2 mt-6 font-serif font-semibold text-xl text-white'>
                            {
                                show && (<button onClick={notify} className='bg-orange-600 w-full rounded-2xl py-2'>{Favorite_button}</button>)

                            }
                            <ToastContainer />
                        </Card.Body>
                    </Card>
                    <Card className='border-2 border-orange-600 rounded-xl pb-4' style={{ width: '24rem' }}>
                        <Card.Img className='p-2 rounded-2xl h-72 w-full' variant="top" src={recipe_img2} />
                        <Card.Body className='px-2'>
                            <Card.Title className='font-semibold font-serif text-xl'>{recipe_name2}</Card.Title>
                            <Card.Text className='font-serif text-lg mt-4'><span className='font-semibold'>Cooking Method:</span> <br />{recipe_cooking_method2}
                            </Card.Text>
                            <ListGroup.Item className='mt-4 font-serif font-semibold'><span className='font-semibold'>Rating:</span> {recipe_rating2}</ListGroup.Item>
                        </Card.Body>
                        <Card.Body className='px-2 mt-6 font-serif font-semibold text-xl text-white'>
                            {
                                view && (<button onClick={notify2} className='bg-orange-600 w-full rounded-2xl py-2'>{Favorite_button2}</button>)

                            }
                            <ToastContainer />
                        </Card.Body>
                    </Card>
                    <Card className='border-2 border-orange-600 rounded-xl pb-4' style={{ width: '24rem' }}>
                        <Card.Img className='p-2 rounded-2xl h-72 w-full' variant="top" src={recipe_img3} />
                        <Card.Body className='px-2'>
                            <Card.Title className='font-semibold font-serif text-xl'>{recipe_name3}</Card.Title>
                            <Card.Text className='font-serif text-lg mt-4'><span className='font-semibold'>Cooking Method:</span> <br />{recipe_cooking_method3}
                            </Card.Text>
                            <ListGroup.Item className='mt-4 font-serif font-semibold'><span className='font-semibold'>Rating:</span> {recipe_rating3}</ListGroup.Item>
                        </Card.Body>
                        <Card.Body className='px-2 mt-6 font-serif font-semibold text-xl text-white'>
                            {
                                see && (<button onClick={notify3} className='bg-orange-600 w-full rounded-2xl py-2'>{Favorite_button3}</button>)

                            }
                            <ToastContainer />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;