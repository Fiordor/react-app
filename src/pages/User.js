import React, { Component } from "react";
import fire from '../fire.js';


class User extends Component {

    //constructor del Component
    constructor() {
        super();
        this.state = { person: "", text: "", allData: [] };
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
        return(
            <div>
                <form>
                    <input type="text" name="person" placeholder="Person name"  value={this.state.person} onChange={this.updateInput}/>
                    <input type="text" name="text" placeholder="Person text" value={this.state.text} onChange={this.updateInput}/>
                    <input type="button" name="bt" value="save" onClick={this.addData}/>
                </form>
            </div>            
        );
    }
}

export default User;