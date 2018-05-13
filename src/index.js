import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Comp01 from './Comp01';
import Comp02 from './Comp02';
import Comp03_Script from './Comp03_Script';
import Comp04_props from './Comp04_props'
import Comp05_function from './Comp05_function';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Comp01 />, document.getElementById('comp01'));
ReactDOM.render(<Comp02 />, document.getElementById('comp02'));
ReactDOM.render(<Comp03_Script />, document.getElementById('comp03_Script'));
ReactDOM.render(<Comp04_props name="react" />, document.getElementById('comp04_props'));
ReactDOM.render(<Comp05_function />, document.getElementById('comp05_function'));
registerServiceWorker();
