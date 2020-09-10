import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from '../../components/Main';
import Card from '../../components/Card';
import Login from '../../components/Login';

class Directional extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/card">
                        <Card />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Directional;
