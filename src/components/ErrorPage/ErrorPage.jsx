import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-3xl  text-center'>Page not found</h1>
            <div className='mx-96 my-4 ' ><Link to="/" className='mx-50 bg-[#23BE0A] btn'><button>Go to back home</button></Link></div>
            
        </div>
    );
};

export default ErrorPage;