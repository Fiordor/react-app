import React, { Component } from "react";
import Quote from '../Quote.js';
import fire from '../fire.js';

import { Route, Link, Switch, Redirect } from "react-router-dom";
import UserPage from "./User";

class Quotes extends Component {

    //constructor del Component
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

    //Se lanza nada mas terminar de cargar la pagina
    componentDidMount = () => { this.getData(); }

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

        return(
            <div>
                <h1>Citas</h1>
                <button onClick={this.getData}>Upload</button>
                <ul>{listOfData}</ul>

                <div>
                    <p><Link to="/User"> Go to epic dialogs </Link></p>

                    <Switch>
                        <Route exact path="/User" component={UserPage}/>
                    </Switch>                    
                </div>

            </div>
        );
    }
}

export default Quotes;