import React, { Component } from 'react';
import './GreetingComponent.css';
import { getGreeting } from './GreetingHelpers';

class GreetingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {greeting: getGreeting()};
  }

  updateGreeting() {
    this.setState({greeting: getGreeting()});
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.updateGreeting();
    }, 20000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="greet">
          {this.state.greeting}
      </div>
    );
  }
}

export default GreetingComponent;
