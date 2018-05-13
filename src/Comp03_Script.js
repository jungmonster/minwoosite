import React, { Component } from 'react';
import './ComponentCSS.css';

class Comp03_Script extends Component {
    render() {
        return (
            <div className="ComponentCSS">
                <h1>Script Component</h1>
                <div>
                    <h3>Use IIFE (Immediately Invoked Function Expression)</h3>
                    <p></p>
                    {
                        1 + 1 === 2
                            ? (<div>O!!</div>)
                            : (<div>X!!</div>)
                    }
                    <p></p>
                    {
                        1 + 1 === 2 && (<div>O!!</div>)
                    }
                    <p></p>
                    {
                        (function()
                        {
                            const value = 1;
                            if (value === 1) return (<div>One</div>);
                            else if (value === 2) return (<div>Two</div>);
                            else return (<div>Other</div>);
                        }
                        )()
                    }
                    <p></p>
                    {
                        ( ()=> {
                            const value = 2;
                            if (value === 1) return (<div>One</div>);
                            else if (value === 2) return (<div>Two</div>);
                            else return (<div>Other</div>);
                        })()
                    }
                </div>
            </div>
        );
    }
}


export default Comp03_Script;