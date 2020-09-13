import React, { Component } from 'react';
import './style.scss';
import dataCard from '../../data/card-data.json'; 

import CardContent from '../CardContent';

class Card extends Component {
    render() {
        return (
            <div className='control-card'>

                {
                    dataCard.map((value, key) => {
                        return <CardContent key={key} cardID={value.id} title={value.title} img={value.img}>{value.content}</CardContent>
                    })
                }
                
            </div>
        );
    }
}

export default Card;
