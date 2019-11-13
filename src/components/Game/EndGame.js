import React from 'react';

class EndGame extends React.Component {
  render() {
    return (
      <div className={this.props.toggleEnd ? 'end-game' : 'end-game-none'}>
        <p className="end-game-pseudo">Bien joué {this.props.nickname} !</p>
        <p className="end-game-score">Ton score est : {this.props.score}</p>
        <div className="end-game-button">
          <button>HOME</button>
          <button>SCORES</button>
        </div>
      </div>
    );
  }
}

export default EndGame;
