import React from 'react';
import Card from './../card/Card';

const Cards = () => {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <Card type='card' />
                <Card type='card' />
                <Card type='card' />
            </div>
        </div>
    );
};

export default Cards;
