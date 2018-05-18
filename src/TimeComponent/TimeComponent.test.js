import React from 'react';
import ReactDOM from 'react-dom';
import TimeComponent from './TimeComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
