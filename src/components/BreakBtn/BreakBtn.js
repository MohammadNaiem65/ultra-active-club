import React from 'react';

const BreakBtn = (props) => {
    const addBreak = id => document.getElementById('break-time').innerText = id;
    return (
        <div>
            <h1 onClick={() => addBreak(props.id)} id={props.id} className='font-semibold bg-[#FFE3E1] hover:bg-[#FF9494] hover:text-white px-2 py-3 rounded-full cursor-pointer'><span>{props.time}</span>m</h1>
        </div>
    );
};

export default BreakBtn;