import React, { Component } from 'react';
import './style.scss';
import data from '../../data/card-data.json'; 

import CardContent from '../CradContent';

class Card extends Component {
    render() {
        return (
            <div className='control-card'>

                {
                    data.map((value, key) => {
                        return <CardContent key={key} title={value.title} img={value.img}>{value.content}</CardContent>
                    })
                }
                
            </div>
        );
    }
}

export default Card;
