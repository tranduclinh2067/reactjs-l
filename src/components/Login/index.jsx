import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect : false,
            sex : 'male'
        }
    }

    isChange = (event) => {
        const name = event.target.name; 
        const value = event.target.value;

        this.setState({
            [name] : value
        })
    }

    isFileChange = (event) => {
        const file = event.target.files[0].name;

        this.setState({
            file : file
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect : true
        });
    }

    render() {
        if(this.state.isRedirect) {
            console.log(this.state);
            return <Redirect to='/' />
        }
        return (
            <div className='control-login'>
                <div className='avatar-login'></div>
                <form name='send'>
                    <div className='label-input'>
                        <label>Email or number phone
                            <input onChange={(event) => this.isChange(event)} type='text' name='account' placeholder='example@gmail.com'/>
                        </label>
                        <label>Password
                            <input onChange={(event) => this.isChange(event)} type='password' name='password' />
                        </label>
                        <hr/>
                        <label>Sex
                            <select value={this.state.sex} onChange={(event) => this.isChange(event)} name="sex" id="cars">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                        <hr/>
                        <label>File
                            <input onChange={(event) => this.isFileChange(event)} type='file' name='file' />
                        </label>
                    </div>
                    <div className='check-login'>
                        <div className='check-box'>
                            <input onChange={(event) => this.isChange(event)} name='robot' type='checkbox' />
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
                        {/* <div className='button-ok'>Ok</div> */}
                        <button type='submit' onClick={(event) => this.submitForm(event)} className='button-ok'>Ok</button>
                        <div className='button-cancel'>Cancel</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
