import React from 'react';
import bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center w-full p-10'>
            <div>
                <h1>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <img className='w-3/12' src={bookimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;