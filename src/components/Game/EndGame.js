import React from 'react';
import { Link } from 'react-router-dom';

class EndGame extends React.Component {
  render() {
    return (
      <div className={this.props.toggleEnd ? 'end-game' : 'end-game-none'}>
        <p className="end-game-pseudo">Bien joué {this.props.nickname} !</p>
        <p className="end-game-score">Ton score est : {this.props.score}</p>
        <div className="end-game-button">
          <Link to="/">
            <button>HOME</button>
          </Link>
          <Link to="/Highscores">
            <button>SCORES</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EndGame;
