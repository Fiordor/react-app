import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { contador:0, x:0, y:0 }
  }

  _onMouseMove(e) {
    this.setState({x: e.screenX, y: e.screenY })
  }

  aumentar() { this.setState({contador:this.state.contador+1}) }

  decrementar() {
    let contador = this.state.contador
    if (contador>0) { this.setState({contador:this.state.contador-1}) }
  }

  render() {

    const {x ,y} = this.state

    const stylesOnX = {
      position: "relative",
      width: "5px",
      height: "100%",
      left: this.state.x - 343 + "px",
      backgroundColor: "blue",
    }

    const stylesOnY = {
      position: "relative",
      width: "100%",
      height: "5px",
      top: this.state.y - 662 + "px",
      backgroundColor: "blue",
    }

    return (
      <div className="box" onMouseMove={this._onMouseMove.bind(this)}>

        <div style={stylesOnX}></div>
        <div style={stylesOnY}></div>

        <h1>Mouse coordinates: {x} {y}</h1>

        {/*
        <input type="button" onClick={this.aumentar.bind(this)} value="Incrementar"/>
        <h3>{this.state.contador}</h3>
        <input type="button" onClick={this.decrementar.bind(this)} value="Decrementar"/>
        */}
      </div>
    );
  }
}

export default App;
