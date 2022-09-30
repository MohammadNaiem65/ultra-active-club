import React from 'react';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import AddBreak from '../AddBreak/AddBreak';
import UserInfo from '../UserInfo/UserInfo';

const SideBar = () => {
    return (
        <div className='w-[19rem] p-5 bg-[#FFE3E1]'>
            <UserInfo></UserInfo>
            <hr className='border-2 border-[#FFF5E4] bg-[#FFF5E4] rounded-xl mx-auto my-6 w-3/4' />
            <AddBreak></AddBreak>
            <hr className='border-2 border-[#FFF5E4] bg-[#FFF5E4] rounded-xl mx-auto my-6 w-3/4' />
            <ActivityDetails></ActivityDetails>
            <hr className='border-2 border-[#FFF5E4] bg-[#FFF5E4] rounded-xl mx-auto my-6 w-3/4' />
            <button className='w-full mt-3 py-2 font-bold bg-[#FF9494] hover:bg-[#f2a4b1] hover:text-white rounded-lg'>Activity Completed</button>
        </div>
    );
};

export default SideBar;