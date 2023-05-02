import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='text-center bg-orange-500 mt-16 py-40'>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500' type="name"
                            name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500' type="email"
                            name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500' type="password"
                            name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500' type="Photo URL"
                            name='Photo URL' placeholder="Photo URL" required />
                    </Form.Group>
                    <Button className='bg-green-500 py-2 px-5 rounded-xl' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Link to='/login'>
                    <p className='text-xl mt-7 font-serif font-semibold'>Already Have An Account ? <span className=' underline'>LogIn</span></p>
                </Link>
            </div>
        </div>
    );
};

export default Registration;