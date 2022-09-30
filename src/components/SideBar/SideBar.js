import React from 'react';
import AddBreak from '../AddBreak/AddBreak';
import UserInfo from '../UserInfo/UserInfo';

const SideBar = () => {
    return (
        <div className='w-[19rem] p-5 bg-[#FFE3E1]'>
            <UserInfo></UserInfo>
            <hr className='border-2 border-[#FFF5E4] bg-[#FFF5E4] rounded-xl mx-auto my-6 w-3/4' />
            <AddBreak></AddBreak>
            <hr className='border-2 border-[#FFF5E4] bg-[#FFF5E4] rounded-xl mx-auto my-6 w-3/4' />
        </div>
    );
};

export default SideBar;