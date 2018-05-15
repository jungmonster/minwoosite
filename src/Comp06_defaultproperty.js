import React, { Component } from 'react';
import './ComponentCSS.css';


class Comp06_defaultproperty extends Component {
    static defaultProps = {
        name : "default data"
    }
    render() {
        return (
            <div className="ComponentCSS">
                <h1>React Default Property</h1>
                <p>Data :  <b>{this.props.name}</b></p>
                <Other_Method/>
            </div>
        );
    }
}

class Other_Method extends Component {
    render() {
        return (
            <div>
                <p>Other Data :  <b>{this.props.other_data}</b></p>
            </div>
        );
    }
}

Other_Method.defaultProps = {
    other_data : "other default data"
}



export default Comp06_defaultproperty;