import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from '../../components/Main';
import Card from '../../components/Card';
import CardDetail from '../../components/CardDetail';
import Login from '../../components/Login';

class Directional extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact={true} path='/' component={Main} />
                    <Route path='/card/' component={Card} />
                    <Route path='/carddetail/:slug.:id.html' component={CardDetail} />
                    <Route path='/login' component={Login} />
                </Switch>
            </div>
        );
    }
}

export default Directional;
