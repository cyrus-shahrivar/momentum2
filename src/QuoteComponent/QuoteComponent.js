import React, { Component } from 'react';
import './QuoteComponent.css';
import quotes from './Quotes.json';

class QuoteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {quote: '', author: ''};
  }

  getRandomNumber() {
    const quotesArray = quotes.quotes;
    return Math.floor(Math.random() * quotesArray.length);
  }

  componentDidMount() {
    const randomNumber = this.getRandomNumber();
    const quotesArray = quotes.quotes;

    this.setState({quote: quotesArray[randomNumber].quote});
    this.setState({author: '- ' + quotesArray[randomNumber].author})
  }

  render() {
    return (
      <div className="quote-container">
        <div className="quote">
          {this.state.quote}
        </div>
        <div className="author">
          {this.state.author}
        </div>
      </div>
    );
  }
}

export default QuoteComponent;
