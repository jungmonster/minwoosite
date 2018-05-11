import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Image from './img/sd.png'

class WriteHTML extends Component {
    render() {
        return (
            <div className="Write-HTML">
            <HelloWorld name="para" test="test-data" />
            <ImageCall />
            <MakeCard />
              <img src={logo} className="App-logo" alt="logo" />  
            </div>
        );
    }
}

function HelloWorld (props) {
    return (
        <div>
            <h1> Function Call and send parameter {props.name} ! </h1>
            <h2> Test Parameter {props.test} </h2>
        </div>
    );
}

function ImageCall () {
    return (
        <div>
            <p>View Image</p>
            <img src={Image} alt="im" />
        </div>
    );
}

function MakeCard(){
    var cardStyle = {
        height: 200,
        width: 150,
        padding: 10,
        backgroundColor: "#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
    };
    return (
        <div style={cardStyle}>
        </div>
    );
}

export default WriteHTML;