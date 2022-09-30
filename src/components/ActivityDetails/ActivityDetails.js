import React from 'react';

const ActivityDetails = () => {
    let localTime = localStorage.getItem('break-time');
    if (localTime === null) {
        localTime = 0 + '0';
    }
    else {
        localTime = parseInt(localTime);
    }
    return (
        <div>
            <h2 className='text-xl font-bold'>Activity Detail:</h2>
            <div className='bg-[#FFF5E4] mt-4 rounded-lg flex justify-between p-2 gap-1 text-md'>
                <h2 className='font-semibold'>Activity Time: </h2>
                <h2><span id='activity-time'>00</span> m</h2>
            </div>
            <div className='bg-[#FFF5E4] mt-4 rounded-lg flex justify-between p-2 gap-1 text-md'>
                <h2 className='font-semibold'>Break Time: </h2>
                <h2><span id='break-time'>{localTime}</span> m</h2>
            </div>
        </div>
    );
};

export default ActivityDetails;