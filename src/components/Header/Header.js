import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='mt-12'>
                <h1 id='title' className='text-5xl font-bold'><i className="fa-solid fa-chart-line"></i> Daily Activities</h1>
                <h2 className='text-2xl font-bold mt-16'>Select Today's Activities</h2>
                <div className='border-2 border-[#FFE3E1] bg-[#FFE3E1] rounded-xl mt-1 w-2/4'>  </div>
            </div>
        </div>
    );
};

export default Header;