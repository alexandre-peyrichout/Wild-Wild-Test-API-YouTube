import React from 'react';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.startCount = false;
    this.state = {
      number: 30
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.props.startCount
      ? this.state.number <= 0
        ? this.setState({ number: this.state.number })
        : this.setState({ number: this.state.number - 1 })
      : this.setState({ number: this.state.number });
  }

  render() {
    return <div id="countdown-number">{this.state.number}</div>;
  }
}

export default CountDown;
