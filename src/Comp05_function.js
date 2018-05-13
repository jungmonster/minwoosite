import React, { Component } from 'react';
import './ComponentCSS.css';


class Comp05_function extends Component {
    render() {
        return (
            <div className="ComponentCSS">
                <h1>Function Component</h1>
                <MyName name="minwoo" />
                <GetData name="minwoo" />
            </div>
        );
    }
}

const MyName = ({ name }) => {
    return (
      <div>
        Hello! My name is {name}.
      </div>
    );
};

function GetData(proprs) {
    return (
        <div>
            Get Data {proprs.name}.
        </div>
    );
}

export default Comp05_function;