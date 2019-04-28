import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

//--Codigo no predeterminado----------------------------------------------------

import HomePage from "./App";
import QuotePage from "./pages/Quotes" ;
import UserPage from "./pages/User" ;

import { Route, Link, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/Quotes" component={QuotePage} />
            <Route path="/User" component={UserPage}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);

//------------------------------------------------------------------------------

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
