import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='w-4/5 mx-auto mt-6'>
            <h1 id='title' className='text-5xl font-bold'><i class="fa-solid fa-chart-line"></i> Daily Activities</h1>
            <h2 className='text-2xl font-bold mt-16'>Select Today's Activities</h2>
        </div>
    );
};

export default Header;