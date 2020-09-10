import React, { Component } from 'react';
import './style.scss';

class Login extends Component {
    render() {
        return (
            <div className='control-login'>
                <div className='avatar-login'></div>
                <div className='label-input'>
                    <label>Email or number phone
                        <input type='text' name='accound' placeholder='example@gmail.com'/>
                    </label>
                    <label>Password
                        <input type='password' name='password' />
                    </label>
                </div>
                <div className='check-login'>
                    <div className='check-box'>
                        <input type='checkbox' />
                        <span style={{
                            paddingLeft : '10px',
                        }}>
                            Not a robot!!!
                        </span>
                    </div>
                    <p style={{
                        cursor : 'pointer',
                        textDecoration : 'underline',
                        textAlign : 'center'
                    }}>
                        Forget password...
                    </p>
                </div>
                <div className='button-login'>
                    <div className='button-ok'>Ok</div>
                    <div className='button-cancel'>Cancel</div>
                </div>
            </div>
        );
    }
}

export default Login;
