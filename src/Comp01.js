import React, { Component } from 'react';
import './ComponentCSS.css';


class Comp01 extends Component {
    render() {
        return (
            <div className="ComponentCSS">
                <h1>How to make React components.</h1>
                <p>React Component </p>
                <p>Make by class</p>
                <Component01 />
            </div>
        );
    }
}

function Component01()
{
    return(
        <div>
            <p>Make by function</p>
        </div>
    );
}


export default Comp01;