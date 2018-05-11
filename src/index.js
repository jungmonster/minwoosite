import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WriteHTML from './WriteHTML';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<WriteHTML />, document.getElementById('writeHTML'));
registerServiceWorker();
