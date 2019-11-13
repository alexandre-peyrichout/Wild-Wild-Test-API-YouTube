import React, { useState } from 'react';
import './Score.css';

class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class={this.props.transferAnswerState ? 'ball spring' : 'ball'}>
        <p className="score">Score: {this.props.transferScore} </p>
      </div>
    );
  }
}

export default Score;
