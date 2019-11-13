import React from 'react';
import './Score.css';

class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="score-show">
        <div className={this.props.transferAnswerState ? 'ball spring' : 'ball'}>
          <p>Score: {this.props.transferScore} </p>
        </div>
        <p className="score-tracks-number">Song {this.props.transferTurnSong} / 10</p>
      </div>
    );
  }
}

export default Score;
