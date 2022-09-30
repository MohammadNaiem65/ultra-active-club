import React from 'react';

const SideBar = () => {
    return (
        <div className='bg-[#FFE3E1]'>
            <div className='flex items-center'>
                <img className='w-16' src={require('./image/user-avatar.png')} alt="Image of user" />
                <div className='font-semibold ml-3'>
                    <h3>Jhankar Mahbub Jr</h3>
                    <div className='flex items-center'>
                        <i class="fa-solid fa-location-dot"></i><p className='ml-1'>Sydney, Australia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;