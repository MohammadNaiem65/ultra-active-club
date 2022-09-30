import React from 'react';

const AddBreak = () => {
    return (
        <div>
            <h2 className='text-xl font-bold'>Add A Break</h2>
            <div className='bg-[#FFF5E4] mt-4 rounded-lg flex justify-between p-2 gap-1'>
                <h1 className='font-semibold bg-[#FFE3E1] hover:bg-[#FF9494] hover:text-white px-2 py-3 rounded-full cursor-pointer'>10m</h1>
                <h1 className='font-semibold bg-[#FFE3E1] hover:bg-[#FF9494] hover:text-white px-2 py-3 rounded-full cursor-pointer'>15m</h1>
                <h1 className='font-semibold bg-[#FFE3E1] hover:bg-[#FF9494] hover:text-white px-2 py-3 rounded-full cursor-pointer'>20m</h1>
                <h1 className='font-semibold bg-[#FFE3E1] hover:bg-[#FF9494] hover:text-white px-2 py-3 rounded-full cursor-pointer'>25m</h1>
                <h1 className='font-semibold bg-[#FFE3E1] hover:bg-[#FF9494] hover:text-white px-2 py-3 rounded-full cursor-pointer'>30m</h1>
            </div>
        </div>
    );
};

export default AddBreak;