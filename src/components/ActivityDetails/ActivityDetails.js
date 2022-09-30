import React from 'react';

const ActivityDetails = () => {
    return (
        <div>
            <h2 className='text-xl font-bold'>Add A Break</h2>
            <div className='bg-[#FFF5E4] mt-4 rounded-lg flex justify-between p-2 gap-1 text-md'>
                <h2 className='font-semibold'>Activity Time: </h2>
                <h2>100m</h2>
            </div>
            <div className='bg-[#FFF5E4] mt-4 rounded-lg flex justify-between p-2 gap-1 text-md'>
                <h2 className='font-semibold'>Break Time: </h2>
                <h2>100m</h2>
            </div>
        </div>
    );
};

export default ActivityDetails;