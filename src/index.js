import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Comp01 from './Comp01';
import Comp02 from './Comp02';
import Comp03_Script from './Comp03_Script';
import Comp04_props from './Comp04_props'
import Comp05_function from './Comp05_function';
import Comp06_defaultproperty from './Comp06_defaultproperty';
import Comp07_State from './Comp07_State';
import Comp08_LifeCycle from './Comp08_LifeCycle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Comp01 />, document.getElementById('comp01'));
ReactDOM.render(<Comp02 />, document.getElementById('comp02'));
ReactDOM.render(<Comp03_Script />, document.getElementById('comp03_Script'));
ReactDOM.render(<Comp04_props name="react" />, document.getElementById('comp04_props'));
ReactDOM.render(<Comp05_function />, document.getElementById('comp05_function'));
ReactDOM.render(<Comp06_defaultproperty/>, document.getElementById('comp06_defaultproperty'));
ReactDOM.render(<Comp07_State/>, document.getElementById('comp07_state'));
ReactDOM.render(<Comp08_LifeCycle />, document.getElementById('comp08_lifecycle'));
registerServiceWorker();
