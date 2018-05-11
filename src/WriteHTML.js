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

export default WriteHTML;