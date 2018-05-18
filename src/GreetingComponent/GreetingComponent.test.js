import React from 'react';
import ReactDOM from 'react-dom';
import GreetingComponent from './GreetingComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GreetingComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
