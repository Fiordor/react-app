import React from "react";
import './App.css';

const Quote = (props) => {

    return(

        <div className="quote">
            <cite>"{props.text}"</cite>
            <p>-{props.person}-</p>
        </div>

    );
}

export default Quote;