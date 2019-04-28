import React, { Component } from 'react';
import './App.css';
import $ from "jquery";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import QuotePage from "./pages/Quotes" ;

class App extends Component {

  constructor() {
    super();
    this.state = { visible: "inline" };
  }

  componentDidMount = () => {

    $(".container").mousemove(function(event) {
      var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
      var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
      $(".wallpaper").css("margin-left", moveX + "px");
      $(".wallpaper").css("margin-top", moveY + "px");
    });
  }

  setVisible = () => {
    if (this.state.visible === "inline") {
      this.setState({ visible: "none" });
    }
  }

  render() {

    const getVisible = { display: this.state.visible }
    

    return (
      <div>
        <div className="container" style={getVisible}>
          
          <div className="wallpaper"></div>
          <h1 className="items" >
            <Link to="/Quotes"> Go to epic dialogs </Link>
          </h1>
        </div>
        <div>
          <Switch>
            <Route exact path="/Quotes" component={QuotePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
