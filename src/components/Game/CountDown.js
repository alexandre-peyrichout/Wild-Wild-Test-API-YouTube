import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Countdown date={Date.now() + 45000} renderer={props => <div>{props.seconds}</div>} />;
  }
}

export default CountDown;
