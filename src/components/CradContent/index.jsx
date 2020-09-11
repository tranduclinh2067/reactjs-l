import React, { Component } from 'react';
import './style.scss';

class CardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    itemCard = () => (
        <div className='item-card'>
            <div className='avatar-card'>
                <img src={this.props.img} alt='img' />
            </div>
            <div style={{
                    textAlign : 'center'
                }}>
                <h2 style={{
                    paddingBottom : '10px',
                }}>{this.props.title}</h2>
                <p>{this.props.children}</p>
                <div className='control-button-card'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );

    render() {
        return (
            <div>
                {this.itemCard()}
            </div>
        );
    }
}

export default CardContent;
