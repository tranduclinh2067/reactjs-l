import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import slug from 'vietnamese-slug';

class CardRelated extends Component {
    render() {
        return (
            <div style={{
                border: 'thin solid #000',
                borderTop: 'none',
                borderBottom: 'none',
            }}>
                <Link to={`/carddetail/${slug(this.props.title)}.${this.props.cardID}.html`}>
                    <img style={{
                        width: '110px',
                        borderRadius: '999px',
                        padding: '8px',
                    }} src={this.props.img} alt='img'/>
                </Link>
                <div style={{
                    padding: '5px',
                }}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default CardRelated;
