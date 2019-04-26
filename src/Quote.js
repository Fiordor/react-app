import React from "react";
import './App.css';

function Quote(props) {

    return(

        <div className="quote">
            <cite>"{props.text}"</cite>
            <p>-{props.person}-</p>
        </div>

    );
}

export default Quote;