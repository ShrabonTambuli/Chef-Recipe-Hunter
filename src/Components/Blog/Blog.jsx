import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <h1 className='text-4xl font-serif underline mt-16 text-center'>Blog Section</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 px-6'>
                <div className='bg-green-600 rounded-lg px-4 py-5'>
                    <h1 className='text-2xl font-serif font-semibold'>1. Tell us the differences between uncontrolled and controlled components?</h1>
                    <p className='text-lg font-serif mt-3'>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                </div>
                <div className='bg-green-600 rounded-lg px-4 py-5'>
                    <h1 className='text-2xl font-serif font-semibold'>
                        2. How to validate React props using PropTypes?
                    </h1>
                    <p className='text-lg font-serif mt-3'>
                        Ans: propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.
                    </p>
                </div>
                <div className='bg-green-600 rounded-lg px-4 py-5'>
                    <h1 className='text-2xl font-serif font-semibold'>
                        3. Tell us the difference between nodejs and express js?
                    </h1>
                    <p className='text-lg font-serif mt-3'>
                        Ans: NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                    </p>
                </div>
                <div className='bg-green-600 rounded-lg px-4 py-5'>
                    <h1 className='text-2xl font-serif font-semibold'>
                        4. What is a custom hook, and why will you create a custom hook?
                    </h1>
                    <p className='text-lg font-serif mt-3'>
                        Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;