import React, { Component } from 'react';
import './style.scss';

import CardContent from '../CradContent';

class Card extends Component {
    render() {
        return (
            <div className='control-card'>
                <CardContent content='This is a card demo*'>Today is beautiful, Happy Coding ^^</CardContent>
                <CardContent content='This is a card demo*'>Today is beautiful, Happy Coding ^^</CardContent>
                <CardContent content='This is a card demo*'>Today is beautiful, Happy Coding ^^</CardContent>
                <CardContent content='This is a card demo*'>Today is beautiful, Happy Coding ^^</CardContent>
                <CardContent content='This is a card demo*'>Today is beautiful, Happy Coding ^^</CardContent>
                <CardContent content='This is a card demo*'>Today is beautiful, Happy Coding ^^</CardContent>
                <CardContent content='This is a card demo*'>Today is beautiful, Happy Coding ^^</CardContent>
                <CardContent content='This is a card demo*'>Today is beautiful, Happy Coding ^^</CardContent>
                <CardContent content='This is a card demo*'>Today is beautiful, Happy Coding ^^</CardContent>
                <CardContent content='This is a card demo*'>Today is beautiful, Happy Coding ^^</CardContent>
            </div>
        );
    }
}

export default Card;
