import React, { Component } from 'react';
import './App.css';
import Quote from './Quote.js';
import fire from './fire.js';



class App extends Component {

  constructor() {
    super();
    this.state = { person: "", text: "", allData: [] };
  }

  //Lee los datos del cloud firestore
  getData = () => {

    //Conecta con firestore
    const database = fire.firestore();

    //Array con los objetos de la firestore
    var wholeData = [];

    //Lee la coleccion de CitasLegendarias, ordenadas ascendentemente por el atributo person
    database.collection("CitasLegendarias").orderBy("person", "asc").get().then(snapshot => {

      //No se que es snapshot, un array, objeto...

      //Para cada objeto de snapshot lo lee y lo guarda en wholeData
      snapshot.forEach(doc => { console.log(doc.data()); wholeData.push(doc.data()); });

      //Muestra todo el contenido recolectado por wholeData
      console.log(wholeData);

      //Guarda el contenido recolectado por wholeData en allData de state
      //(no se que es state ni como funciona correctamente)
      this.setState({ allData:wholeData });

      //Muestra el contenido de allData
      console.log(this.state.allData);

      //En caso de error lo muestra en consola
    }).catch(error => { console.log("Error!", error); })
  }

  //Añadir objetos a la base de datos
  addData = (data) => {

    //Ni idea de para que sirve
    data.preventDefault();
    //Conecta con firebase
    const database = fire.firestore();

    //Compreba que el campo de person y text no esten vacios
    if (this.state.person !== "" && this.state.text !== "") {

      //Añade a la coleccion una nueva cita
      database.collection("CitasLegendarias").add({
        person: this.state.person,
        text: this.state.text
      });

      //Resetea los valores del state
      this.setState({ person: "", text: "" });

    } else {

      if (this.state.person === "") { console.log("Rellene Person"); }
      if (this.state.text === "") { console.log("Rellene Texto"); }

    }

  }

  //Actualiza el valor del state recogiendo los datos de los inputs, donde e es el input
  updateInput = (e) => {
    //e es el input, target es para coger el type, name... despues coge el valor
    //del campo name que coincide con los atributos de cita y le pone el valor del input
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    //Devuelve un monton de <li> con los objetos en html
    //coge el array de allData y hace un bucle para cada uno de los objetos
    var listOfData = this.state.allData.map((val, i) => {
      //Lee la person del objeto de la coleccion de CitasLegendarias
      var person = val.person
      //Lee el texto de Citas
      var text = val.text
      //Return en html de un <li> mostrando el text y person (no se que hace key={i})
      return (<li key={i}><Quote text={text} person={person}/></li>)
    })

    const borderStyle = { border: "1px solid black" }

    return (
      <div>
        <div style={borderStyle}>
          <h1>Citas</h1>
          <button onClick={this.getData}>Get data</button>
          <ul>{listOfData}</ul>
        </div>
        <div>
          <form>
            <input type="text" name="person" placeholder="Person name"  value={this.state.person} onChange={this.updateInput}/>
            <input type="text" name="text" placeholder="Person text" value={this.state.text} onChange={this.updateInput}/>
            <input type="button" name="bt" value="save" onClick={this.addData}/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
