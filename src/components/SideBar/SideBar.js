import React from 'react';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import AddBreak from '../AddBreak/AddBreak';
import UserInfo from '../UserInfo/UserInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideBar = () => {
    const showToastMessage = () => {
        toast.success('Successfully Activities Completed!', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    return (
        <div className='w-[19rem] h-screen p-5 bg-[#FFE3E1]'>
            <UserInfo></UserInfo>
            <hr className='border-2 border-[#FFF5E4] bg-[#FFF5E4] rounded-xl mx-auto my-6 w-3/4' />
            <AddBreak></AddBreak>
            <hr className='border-2 border-[#FFF5E4] bg-[#FFF5E4] rounded-xl mx-auto my-6 w-3/4' />
            <ActivityDetails></ActivityDetails>
            <hr className='border-2 border-[#FFF5E4] bg-[#FFF5E4] rounded-xl mx-auto my-6 w-3/4' />
            <button onClick={showToastMessage} className='w-full mt-3 py-2 font-bold bg-[#FF9494] hover:bg-[#f2a4b1] hover:text-white rounded-lg'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default SideBar;