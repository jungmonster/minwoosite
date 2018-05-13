import React, { Component } from 'react';
import './ComponentCSS.css';

class Comp04_props extends Component {
    render() {
        return (
            <div className="ComponentCSS">
                <h1>component 04</h1>
                <div>Get Property data from props variable ex) <b>{this.props.name}</b></div>
                <p>Set Property Value</p>
                <Default_props name="data" />
                <p>Defalut Property Value </p>
                <Default_props  />
            </div>
        );
    }
}

class Default_props extends Component {
    static defaultProps = {
        name : 'default name'
    }
    render() {
        return (
            <div>
                <b>{this.props.name}</b>
            </div>
        );
    }
}


export default Comp04_props;