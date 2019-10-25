import React from 'react';
import './App.css';
import YouTube from 'react-youtube';
import Countdown from 'react-countdown-now';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: '',
      opts: {
        playerVars: {
          autoplay: 1,
          enablejsapi: 1,
          origin: 'http://localhost:3000'
        }
      }
    };
    this.changeSong = this.changeSong.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <YouTube className="yt-hidden" videoId={this.state.videoId} opts={this.state.opts} />
          <button onClick={() => this.changeSong('KR1Uy47KdF4')}>Titanic</button>
          <button onClick={() => this.changeSong('jRP5mpZVmN8')}>Friends</button>
          <button onClick={() => this.changeSong('jVm1NbrXaXc')}>Pokémon</button>
          <Countdown date={Date.now() + 45000} renderer={props => <div>{props.seconds}</div>} />
        </div>
      </div>
    );
  }

  changeSong(video) {
    this.setState({ videoId: video });
  }
}

export default App;
