import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }
  render() {
    return <div>{this.state.score}</div>;
  }
}

export default Score;
