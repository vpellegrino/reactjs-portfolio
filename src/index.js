import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import App from './components/App';
import Header from './components/Header';
import './index.css';

ReactDOM.render((
    <HashRouter>
        <Route exact path='/' render={() => <Header><App/></Header>}/>
    </HashRouter>),
    document.getElementById('root')
);
