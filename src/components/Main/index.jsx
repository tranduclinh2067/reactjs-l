import React, { Component } from 'react';
import './style.scss';

import dataMain from '../../data/main-data.json';

import MainContent from '../MainContent';

class Main extends Component {
    render() {
        return (
            <div>
                {

                    dataMain.map((value, key) => {
                        return <MainContent key={key} color={value.color}>{value.content}</MainContent>
                    })

                }
            </div>
        );
    }
}

export default Main;
