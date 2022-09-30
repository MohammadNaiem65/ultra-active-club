import React from 'react';

const UserInfo = () => {
    return (
        <div className='mt-5'>
            <div className='flex items-center'>
                <img className='w-16' src={require('./image/user-avatar.png')} alt="" />
                <div className='font-semibold ml-3'>
                    <h3 className='text-lg'>Jhankar Mahbub Jr</h3>
                    <div className='flex items-center texl-md'>
                        <i class="fa-solid fa-location-dot"></i><p className='ml-1'>Sydney, Australia</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#FFF5E4] mt-4 rounded-lg flex justify-between p-2'>
                <div className='flex flex-col items-center'>
                    <h1><span className='text-2xl font-bold'>76</span><span><small>kg</small></span></h1>
                    <p className='font-semibold'>Weight</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1><span className='text-2xl font-bold'>5.6</span></h1>
                    <p className='font-semibold'>Height</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1><span className='text-2xl font-bold'>25</span><span><small>yrs</small></span></h1>
                    <p className='font-semibold'>Age</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;