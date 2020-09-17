import React, { Component } from 'react';
import dataCard from '../../data/card-data.json';
import CardRelated from '../CardRelated';

class CardDetail extends Component {
    render() {

        let count = 1;
        
        return (
            <div>
                {
                    dataCard.map((value, key) => {
                        if (value.id === parseInt(this.props.match.params.id)) {
                            return (
                                <div>
                                    <div key={key} style={{
                                        width: '400px',
                                        height: '350px',
                                        display: 'block',
                                        margin: '10px auto 5px',
                                        textAlign: 'center',
                                    }}>
                                        <div>
                                            <img src={value.img} alt='img' style={{
                                                display: 'inline-block',
                                            }} />
                                        </div>
                                        <div>
                                            <h3 style={{
                                                padding: '20px 0'
                                            }}>{value.title}</h3>
                                            <p>{value.content}</p>
                                        </div>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        margin: '0 auto 10px',
                                        width: '80%',
                                        height: '160px',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                        {
                                            dataCard.map((value, key) => {
                                                if (value.id !== parseInt(this.props.match.params.id)) {
                                                    if (count < 4) {
                                                        count++;
                                                        return(
                                                            <div style={{
                                                                display: 'inline-block',
                                                                width: 'auto',
                                                                textAlign: 'center',
                                                            }}>
                                                                <CardRelated key={key}
                                                                cardID={value.id}
                                                                title={value.title}
                                                                img={value.img}
                                                                content={value.content}
                                                                ></CardRelated>
                                                            </div>
                                                        )
                                                    }
                                                }
                                                return true;
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }
                        return true;
                    })
                }
            </div>
        );
    }
}

export default CardDetail;
