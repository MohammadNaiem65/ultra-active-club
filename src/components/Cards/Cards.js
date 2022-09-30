import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-5 gap-x-4 gap-y-8'>
            {
                activities.map(activity => {
                    return <Card key={activities.id} activity={activity}></Card>
                })
            }
        </div>
    );
};

export default Cards;