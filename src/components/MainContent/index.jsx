import React, { Component } from 'react';
import './style.scss';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai : true,
        }
    }
// ------------------------

    alertPossition = (x) => {
        alert(x.toUpperCase());
    };

    clickEdit = () => {
        this.setState({
            trangthai : false
        })
    };

    clickSave = () => {
        this.setState({
            trangthai : true
        })
        console.log(this.intermediaries.value);
    };

    checkEdit = () => {
        if(this.state.trangthai === true) {
            return this.renderButton();
        }
        else {
            return this.renderForm();
        }
    };


// ------------------------

    renderButton = () => (
        <div style={{ 
            width : '50%',
            float : 'left',
            lineHeight : '40px',
            paddingLeft : '40px'
           }}>
            <div className='edit' onClick={ () => this.clickEdit() }>Edit</div>
            <div className='remove'>Remove</div>
            <div className='possition' onClick={this.alertPossition.bind(this, this.props.position)}>Possition?</div>
        </div>
    );
    
    renderForm = () => (
        <div style={{ 
            width : '50%',
            float : 'left',
            lineHeight : '40px',
            paddingLeft : '40px'
            }}>
            <input style={{
                display : 'inline-block',
                border : 'thin solid #000',
                borderRadius : '999px',
                outline : 'none',
                width : '165px',
                marginLeft: '25px',
                height : '30px',
                padding : '0 10px',
            }} defaultValue={this.props.children} ref={(dataInput) => { this.intermediaries = dataInput }} type='text' name='text'/>
            <div style={{
                display : 'inline',
                paddingLeft : '25px',
                cursor : 'pointer'
            }} onClick={ () => this.clickSave() }>Save</div>
        </div>
    );

    renderBlockPosition = () => (
        <div className='position-block'>
            <div>
                <p style={{
                    lineHeight : '230px',
                    textAlign : 'center'
                }}>{this.props.content}</p>
            </div>
            <div>
                <div style={{
                    display : 'block', 
                    margin : '0 auto',
                    width : '50px',
                    border : 'thin solid #000',
                    borderTop : 'none',
                    borderBottom : 'none'
                }}>
                    <p style={{
                        textAlign : 'center'
                    }}>Ok</p>
                </div>
            </div>
        </div>
    );
// ------------------------

    mainContent = () => (
        <div style={{ 
            width : '50%',
            float : 'left',
            borderRight : 'thin solid #000',
            paddingRight : '30px'
            }}>
            <div className='icon-content' style={{ float : this.props.position }}></div>
            <span style={{lineHeight : '40px', padding : '0 20px'}}>{this.props.children}</span>
        </div>
    );
    
// -------------------
    
    render() {
        return (
            <div className='control-maincontent'>
                
                {this.mainContent()}
                {this.checkEdit()}

            </div>
        );
    }
}

export default MainContent;
