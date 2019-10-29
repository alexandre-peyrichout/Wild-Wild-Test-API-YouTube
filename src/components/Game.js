import React from 'react';
import CountDown from './Game/CountDown';
// import PlayerAPI from './Game/PlayerAPI';
import YouTube from 'react-youtube';
import Score from './Game/Score';
import SkipBtn from './Game/SkipBtn';
import Answer from './Game/Answer';
import ValidateBtn from './Game/ValidateBtn';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,

      height: '3',
      width: '3',
      videoId: '',
      opts: {
        playerVars: {
          autoplay: 1,
          start: 13,
          enablejsapi: 1,
          origin: 'http://localhost:3000'
        }
      }
    };
    this.changeSong = this.changeSong.bind(this);
    this._onPlay = this._onPlay.bind(this);
  }

  changeSong(video) {
    this.setState({ videoId: video });
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.setVolume(100);
  }

  _onPlay() {
    this.setState({ isPlaying: true });
  }

  render() {
    return (
      <div>
        <img
          alt="placeholder"
          src="https://thumbs.gfycat.com/PalatableFelineDipper-size_restricted.gif"
        />

        <div>
          <YouTube
            className="yt-hidden"
            height={this.state.height}
            width={this.state.width}
            videoId={this.state.videoId}
            opts={this.state.opts}
            onReady={this._onReady}
            onPlay={this._onPlay}
          />

          <button onClick={() => this.changeSong('JvKoBnv96PM')}>Play a song</button>
        </div>

        <CountDown startCount={this.state.isPlaying} />
        <Answer />
        <ValidateBtn />
        <SkipBtn />
        <Score />
      </div>
    );
  }
}

export default Game;
