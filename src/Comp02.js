import React, { Component } from 'react';
import './ComponentCSS.css';
import './CompStyle.css';

class Comp02 extends Component {
    render() {
        return (
            <div className="ComponentCSS">
                <h1>component 02</h1>
                <p>React Component </p>
                < StyleComp01 />
                < StyleComp02 />
            </div>
        );
    }
}

function StyleComp01()
{
    const style = {
        backgroundColor: "#888",
        WebkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
    };
    return (
        <div style={style}>
            <p>This style use const style value</p>
        </div>
    );
}

function StyleComp02()
{
    return (
        <div className="CompStyle">
            <p className="CompStyle-p">This style use .css file</p>
        </div>
    );
}


export default Comp02;