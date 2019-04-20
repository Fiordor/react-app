import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { contador:0 }
  }

  aumentar() { this.setState({contador:this.state.contador+1}) }

  decrementar() {
    let contador = this.state.contador
    if (contador>0) { this.setState({contador:this.state.contador-1}) }
  }

  render() {
    return (
      <div>
        <h3>{this.state.contador}</h3>
        <input type="button" onClick={this.aumentar.bind(this)} value="Incrementar"/>
        <input type="button" onClick={this.decrementar.bind(this)} value="Decrementar"/>
      </div>
    );
  }
}

export default App;
