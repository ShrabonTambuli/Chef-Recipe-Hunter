import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const LogIn = () => {
    const { singIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length > 6) {
            setError('Please add less then 6 characters in your password');
        }

        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                setError('');
                event.target.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogle = () => {
        googleSignIn();
        navigate(from, { replace: true })
    }

    const handleGithub = () => {
        githubSignIn();
        navigate(from, { replace: true })
    }

    return (
        <div className='flex justify-evenly items-center bg-slate-700 mt-16 py-40'>
            <div className='text-center'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500 text-white' type="email"
                            name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500 text-white' type="password"
                            name='password' placeholder="Password" required />
                    </Form.Group>
                    <p className='font-semibold text-red-300'>{error}</p>
                    <Button className='bg-green-500 py-2 px-5 mt-5 rounded-xl font-serif font-semibold' variant="primary" type="submit">
                        LogIn
                    </Button>
                </Form>
                <Link to='/registration'>
                    <p className='text-xl mt-7 font-serif font-semibold text-white'><span className=' underline'>Sing up</span> ?  For new user.</p>
                </Link>
                <div className='flex justify-around mt-6'>
                    <button onClick={handleGoogle}>
                        <img className='w-14 rounded-2xl' src="/images/google.avif" alt="" />
                    </button>
                    <button onClick={handleGithub}>
                        <img className='w-14 rounded-2xl' src="/images/github.png" alt="" />
                    </button>
                </div>
            </div>
            <div>
                <Form.Text className="text-muted text-xl font-serif font-semibold text-white">
                    We'll never share your email with anyone else.
                </Form.Text>
            </div>
        </div>
    );
};

export default LogIn;