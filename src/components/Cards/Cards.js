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
        <div>
            {
                activities.map(activity => {
                    return <Card key={activities.id} activity={activity}></Card>
                })
            }
        </div>
    );
};

export default Cards;