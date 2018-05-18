import React from 'react';
import ReactDOM from 'react-dom';
import QuoteComponent from './QuoteComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuoteComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
