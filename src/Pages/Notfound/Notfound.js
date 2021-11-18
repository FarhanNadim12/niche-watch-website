import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'
const Notfound = () => {
    return (
        <div className='w-100 '>
            <div className='w-50 m-auto mt-5 text-center'>
                <img className='w-75' src="https://previews.123rf.com/images/ontsunan/ontsunan1908/ontsunan190800038/128509740-404-error-page-not-found-vector-illustration-background-flat-cartoon-character-graphic-design-landin.jpg" alt="" />
                <div className='m-auto mt-3'>
                    <Link to='/home' className=''>
                        <button className='ps-3 pe-3 pt-2 pb-2 button'>Home</button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Notfound;