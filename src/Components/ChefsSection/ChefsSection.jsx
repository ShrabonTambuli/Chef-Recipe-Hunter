import React from 'react';
import {HandThumbUpIcon } from '@heroicons/react/24/solid'
import { Card, CardGroup } from 'react-bootstrap';

const ChefsSection = ({ chef }) => {
    const { Chef_Name, Chef_Picture, Likes, Numbers_of_recipes, View_Recipes_Button, Years_of_experience, id } = chef;
    return (
        <div>
            <CardGroup>
                <Card className='rounded-xl bg-orange-500 pb-5'>
                    <Card.Img className='w-full h-80 rounded-2xl p-1' variant="top" src={Chef_Picture} />
                    <Card.Body className='ps-6'>
                        <Card.Title className='text-3xl font-serif font-semibold'>{Chef_Name}</Card.Title>
                        <Card.Text className='text-lg font-sans font-semibold mt-2'>
                       Numbers of recipes:      {Numbers_of_recipes}
                        </Card.Text>
                        <Card.Text className='text-lg font-sans font-semibold inline-flex mt-2'>
                        Likes: {Likes}<HandThumbUpIcon className="h-6 w-6 text-blue-500 ms-1" /></Card.Text>
                        <Card.Text className='text-lg font-sans font-semibold mt-2'>      {Years_of_experience}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center px-5 mt-8'>
                        <button className='bg-stone-500 w-full py-2 rounded-2xl text-white font-serif font-semibold'>{View_Recipes_Button}</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default ChefsSection;