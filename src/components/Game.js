import React from 'react';
import CountDown from './Game/CountDown';
import PlayerAPI from './Game/PlayerAPI';
import Score from './Game/Score';
import SkipBtn from './Game/SkipBtn';
import Answer from './Game/Answer';
import ValidateBtn from './Game/ValidateBtn';

class Game extends React.Component {
  render() {
    return (
      <div>
        <img
          alt="placeholder"
          src="https://thumbs.gfycat.com/PalatableFelineDipper-size_restricted.gif"
        />
        <CountDown />

        <PlayerAPI />
        <Answer />
        <ValidateBtn />
        <SkipBtn />
        <Score />
      </div>
    );
  }
}

export default Game;
