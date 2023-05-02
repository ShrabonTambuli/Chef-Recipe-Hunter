import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='flex justify-evenly items-center bg-orange-500 mt-16 py-40'>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email"
                        name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password"
                        name='password' placeholder="Password" />
                    </Form.Group>
                    <Button className='bg-green-500 py-2 px-5' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Link to='/register'>
                <p className='text-xl mt-7 font-serif font-semibold'><span className=' underline'>Sing up?</span> For new user.</p>
                </Link>
            </div>
            <div>
                <Form.Text className="text-muted text-xl font-serif font-semibold">
                    We'll never share your email with anyone else.
                </Form.Text>
            </div>
        </div>
    );
};

export default LogIn;