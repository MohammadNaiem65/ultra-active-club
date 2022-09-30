import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div>
            <img className='card-image' src={props.activity.image} alt="" />
            <h1>name: {props.activity.title}</h1>
        </div>
    );
};

export default Card;