import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='flex justify-evenly items-center bg-orange-500 mt-16 py-40'>
            <div className='text-center'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500' type="email"
                        name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500' type="password"
                        name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button className='bg-green-500 py-2 px-5 mt-5 rounded-xl' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Link to='/registration'>
                <p className='text-xl mt-7 font-serif font-semibold'><span className=' underline'>Sing up</span> ?  For new user.</p>
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