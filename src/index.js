import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './style.scss';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header';
import Directional from './router/Directional';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div style={{padding : '0 60px'}}>
        <Header />
        <Directional />
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
