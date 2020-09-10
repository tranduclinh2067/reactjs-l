import React, { Component } from 'react';
import './style.scss';

import MainContent from '../MainContent';

class Main extends Component {
    render() {
        return (
            <div>
                <MainContent position='left'> Box and content... </MainContent>
                <MainContent position='left'> Box and content... </MainContent>
                <MainContent position='right'> Box and content... </MainContent>
                <MainContent position='left'> Box and content... </MainContent>
                <MainContent position='right'> Box and content... </MainContent>
                <MainContent position='right'> Box and content... </MainContent>
                <MainContent position='left'> Box and content... </MainContent>
                <MainContent position='right'> Box and content... </MainContent>
                <MainContent position='left'> Box and content... </MainContent>
                <MainContent position='right'> Box and content... </MainContent>
                <MainContent position='left'> Box and content... </MainContent><MainContent position='right'> Box and content... </MainContent>
                <MainContent position='left'> Box and content... </MainContent>
            </div>
        );
    }
}

export default Main;
