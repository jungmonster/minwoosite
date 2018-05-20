import React, { Component } from 'react';
import './ComponentCSS.css';


class Comp07_State extends Component {
    render() {
        return (
            <div className="ComponentCSS">
                <h1>Component 07 State</h1>
                <Counter />
            </div>
        );
    }
}

class Counter extends Component {
    /* Class Field*/
    state = {
        number:0
    }
    handleIncrease = () => {
        this.setState({
            number: this.state.number +1
        });
    }
    handleDecrease = () => {
        this.setState({
            number: this.state.number -1
        });
    }

    render(){
        return (
            <div>
                <hi>Counter </hi>
                <div>State Value is {this.state.number}</div>
                <button onClick={this.handleIncrease}>+ button</button>
                <button onClick={this.handleDecrease}>- button</button>
            </div>
        );
    }

}



export default Comp07_State;