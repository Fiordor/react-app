import React, { Component } from 'react';

import { Route, Link, Switch, Redirect } from "react-router-dom";

import HomePage from "./Home";
import QuotePage from "./Quotes" ;
import UserPage from "./User" ;

class Home extends Component {

    render() {

        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Quotes">Quotes</Link></li>
                    <li><Link to="/User">User</Link></li>
                </ul>
    
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/Quotes" component={QuotePage} />
                    <Route path="/User" component={UserPage}/>
                </Switch>
            </div>
        );
    }

}

export default Home;