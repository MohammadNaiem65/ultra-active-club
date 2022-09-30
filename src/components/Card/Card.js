import React from 'react';
import './Card.css'

const Card = (props) => {
    const { image, title, age, time } = props.activity;
    return (
        <div className='bg-[#FFD1D1] p-5 rounded-lg font-semibold'>
            <img className='rounded-lg' src={image} alt="" />
            <h2 className='text-xl mt-2'>{title}</h2>
            <h3>For Age: {age}</h3>
            <h3>Time Required: {time}</h3>
            <button className='w-full mt-3 py-2 bg-[#FF9494] hover:bg-[#FFE3E1] rounded-lg'>Add To List</button>
        </div>
    );
};

export default Card;