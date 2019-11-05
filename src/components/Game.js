import React from 'react';
import CountDown from './Game/CountDown';
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
      fakeDiv: 'fake-div',
      numberCount: 'Go',
      isPlaying: false,
      classCount: 'default',
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
    if (this.state.numberCount === 'Go') {
      this.setState({
        fakeDiv: 'fake-div-loading',
        numberCount: 'Loading',
        videoId: video,
        classCount: 'loading'
      });
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.setVolume(100);
  }

  _onPlay() {
    console.log('playing');
    this.setState({
      fakeDiv: 'fake-div',
      numberCount: 30,
      isPlaying: true,
      classCount: 'playing'
    });
    // quand la musique commence, le state booléen isPlaying devient true
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000); // effectue tick() toutes les 1000 millisecondes
  }

  componentWillUnmount() {
    clearInterval(this.timerID); // jsp vraiment mais apparemment faut le garder dans l'exemple de l'horloge que j'ai cannibalisé
  }

  tick() {
    this.state.isPlaying // si le props startCount défini dans Game.js...
      ? this.state.numberCount <= 0 // true : si le state number est inférieur ou égal à 0...
        ? this.setState({ numberCount: this.state.numberCount }) // true : ne pas toucher
        : this.setState({ numberCount: this.state.numberCount - 1 }) // false : nombre - 1
      : this.setState({ numberCount: this.state.numberCount }); // false : ne pas toucher
  }

  render() {
    return (
      <div className="game-parent">
        <Title />
        <div className="fake-div-parent">
          {/*fake divs importantes pour l'anim du loading*/}
          <div className={this.state.fakeDiv}></div>
          <CountDown
            onClick={() => this.changeSong('OS6ioiNFmkk')}
            className={this.state.classCount}
            number={this.state.numberCount}
          />
        </div>

        <Answer />
        <div className="row">
          <SkipBtn />
          <ValidateBtn />
        </div>
        <p className="nick">Nickname</p>
        <Score />
        <YouTube
          className="yt-hidden"
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
