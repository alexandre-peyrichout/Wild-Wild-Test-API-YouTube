import React from 'react';
import CountDown from './Game/CountDown';
// import PlayerAPI from './Game/PlayerAPI';
import YouTube from 'react-youtube';
import Score from './Game/Score';
import SkipBtn from './Game/SkipBtn';
import Answer from './Game/Answer';
import ValidateBtn from './Game/ValidateBtn';
import './Game.css';
import Title from './Home/Title';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_style: 'ready',
      start_value: 'Start',
      isPlaying: false,
      classCount: 'default',
      height: '3',
      width: '3',
      videoId: '',
      opts: {
        playerVars: {
          autoplay: 1,
          start: 0,
          enablejsapi: 1,
          origin: 'http://localhost:3000'
        }
      }
    };
    this.changeSong = this.changeSong.bind(this);
    this._onPlay = this._onPlay.bind(this);
  }

  changeSong(video) {
    this.setState({
      videoId: video,
      classCount: 'loading',
      start_style: 'loading-btn',
      start_value: ''
    });
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.setVolume(100);
  }

  _onPlay() {
    this.setState({
      isPlaying: true,
      classCount: 'default',
      start_style: 'ready',
      start_value: 'Good Luck !'
    }); // quand la musique commence, le state booléen isPlaying devient true
  }

  render() {
    return (
      <div className="game-parent">
        <Title />
        <CountDown className={this.state.classCount} startCount={this.state.isPlaying} />
        {/*définir la props startCount selon le state isPlaying*/}
        <button className={this.state.start_style} onClick={() => this.changeSong('OS6ioiNFmkk')}>
          {this.state.start_value}
        </button>
        <Answer />
        <div>
          <SkipBtn />
          <ValidateBtn />
        </div>
        <p className="nick">Nickname</p>
        <Score />
        <YouTube
          className="yt-hidden"
          height={this.state.height}
          width={this.state.width}
          videoId={this.state.videoId}
          opts={this.state.opts}
          onReady={this._onReady}
          onPlay={this._onPlay}
        />
      </div>
    );
  }
}

export default Game;
