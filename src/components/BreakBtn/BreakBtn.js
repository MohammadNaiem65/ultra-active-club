import React from 'react';

const BreakBtn = (props) => {
    const setBreak = time => {
        let localTime = localStorage.getItem('break-time');
        if (localTime) {
            let newLocalTime = parseInt(localTime);
            const updatedTime = time + newLocalTime;
            localStorage.setItem('break-time', updatedTime);
            document.getElementById('break-time').innerText = time;
        }
        else {
            localStorage.setItem('break-time', time);
            document.getElementById('break-time').innerText = time;
        }
    };
    return (
        <div>
            <h1 onClick={() => setBreak(props.time)} id={props.id} className='font-semibold bg-[#FFE3E1] hover:bg-[#FF9494] hover:text-white px-2 py-3 rounded-full cursor-pointer'><span>{props.time}</span>m</h1>
        </div>
    );
};

export default BreakBtn;