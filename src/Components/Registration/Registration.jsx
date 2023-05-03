import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then ((result)=>{
            const createdUser = result.user;
            updateProfile(result.user, {
                displayName: name, photoURL: photo
            })
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error);

        })
    }

    return (
        <div className='text-center mt-16 py-40 bg-orange-600'>
            <div>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500 text-white' type="name"
                            name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500 text-white' type="email"
                            name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500 text-white' type="password"
                            name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                        <Form.Control className='px-24 py-2 text-center rounded-xl border-2 bg-slate-800 border-green-500 text-white' type="text"
                            name='photo' placeholder="Photo URL" required />
                    </Form.Group>
                    <Button className='bg-green-500 py-2 px-5 rounded-xl ' variant="primary" type="submit">
                        Register
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