import React from 'react';
import './Highscores.css';
import Burger from './Burger';
import RulesBtn from './Home/RulesBtn';

class Highscores extends React.Component {
  componentDidMount() {
    document.getElementById('paper').style.animation = 'paper .7s linear';

    document.getElementById('nail-ul').style.animation = 'nailed 3.1s linear';
    document.getElementById('nail-ur').style.animation = 'nailed 2.3s linear';
    document.getElementById('nail-dr').style.animation = 'nailed 4.7s linear';
    document.getElementById('nail-dl').style.animation = 'nailed 3.3s linear';

    document.getElementById('paper').style.display = 'flex';
    document.getElementById('nail-ul').style.display = 'flex';
    document.getElementById('nail-ur').style.display = 'flex';
    document.getElementById('nail-dr').style.display = 'flex';
    document.getElementById('nail-dl').style.display = 'flex';

    const list = document.getElementById('paper').querySelectorAll('.Score-Div');
    list.forEach(function(userItem) {
      userItem.style.display = 'flex';
    });
  }

  componentWillUnmount() {
    const list = document.getElementById('paper').querySelectorAll('.Score-Div');
    list.forEach(function(userItem) {
      userItem.style.display = 'none';
    });

    document.getElementById('paper').style.display = 'none';
    document.getElementById('nail-ul').style.display = 'none';
    document.getElementById('nail-ur').style.display = 'none';
    document.getElementById('nail-dr').style.display = 'none';
    document.getElementById('nail-dl').style.display = 'none';
  }

  render() {
    return (
      <div id="highscore" className="Main-Highscores">
        <div id="paper" className="Main-Paper">
          <div id="nail-ul" className="nail nail-ul"></div>
          <div id="nail-ur" className="nail nail-ur"></div>
          <div id="nail-dr" className="nail nail-dr"></div>
          <div id="nail-dl" className="nail nail-dl"></div>
          <div className="Score-Div">
            <h3 className="Score-Title">HIGHSCORES</h3>

            <ul className="Score-List">
              <li className="Score-List-Element">
                <span className="Score-List-Player">Player1</span>
                <span className="Score-List-Score">000</span>
              </li>

              <li className="Score-List-Element">
                <span className="Score-List-Player">Player2</span>
                <span className="Score-List-Score">000</span>
              </li>

              <li className="Score-List-Element">
                <span className="Score-List-Player">Player3</span>
                <span className="Score-List-Score">000</span>
              </li>

              <li className="Score-List-Element">
                <span className="Score-List-Player">Player4</span>
                <span className="Score-List-Score">000</span>
              </li>

              <li className="Score-List-Element">
                <span className="Score-List-Player">Player5</span>
                <span className="Score-List-Score">000</span>
              </li>

              <li className="Score-List-Element">
                <span className="Score-List-Player">Player6</span>
                <span className="Score-List-Score">000</span>
              </li>

              <li className="Score-List-Element">
                <span className="Score-List-Player">Player7</span>
                <span className="Score-List-Score">000</span>
              </li>

              <li className="Score-List-Element">
                <span className="Score-List-Player">Player8</span>
                <span className="Score-List-Score">000</span>
              </li>

              <li className="Score-List-Element">
                <span className="Score-List-Player">Player9</span>
                <span className="Score-List-Score">000</span>
              </li>

              <li className="Score-List-Element">
                <span className="Score-List-Player">Player10</span>
                <span className="Score-List-Score">000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Highscores;
