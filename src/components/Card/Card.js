import React from 'react';

const Card = (props) => {
    const { id, image, title, age, time } = props.activity;
    const addActivityTime = (time) => {
        let previousTime = document.getElementById('activity-time');
        const previousTimeString = previousTime.innerText;
        let previousTimeFinal = parseInt(previousTimeString);
        previousTime.innerText = previousTimeFinal + time;
    }
    return (
        <div className='bg-[#FFD1D1] p-5 rounded-lg font-semibold md:flex justify-between items-center'>
            <img className='rounded-lg w-80 h-[13.5rem]' src={image} alt="" />
            <div className='w-48'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <h3>For Age: {age}</h3>
                <h3>Time Required: <span id={id}>{time}</span>m</h3>
                <button onClick={() => addActivityTime(time)} className='w-full mt-3 py-2 bg-[#FF9494] hover:bg-[#f2a4b1] hover:text-white rounded-lg'>Add To List</button>
            </div>
        </div>
    );
};

export default Card;