import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimeComponent from './TimeComponent/TimeComponent';
import GreetingComponent from './GreetingComponent/GreetingComponent';
import QuoteComponent from './QuoteComponent/QuoteComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TimeComponent />, document.getElementById('time'));
ReactDOM.render(<GreetingComponent />, document.getElementById('greeting'));
ReactDOM.render(<QuoteComponent />, document.getElementById('quote'));
registerServiceWorker();
