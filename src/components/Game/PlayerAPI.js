import React from 'react';
import YouTube from 'react-youtube';

class PlayerAPI extends React.Component {
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
      <div>
        <YouTube
          className="yt-hidden"
          videoId={this.state.videoId}
          opts={this.state.opts}
          onReady={this._onReady}
        />
        <button onClick={() => this.changeSong('KR1Uy47KdF4')}>Titanic</button>
        <button onClick={() => this.changeSong('jRP5mpZVmN8')}>Friends</button>
        <button onClick={() => this.changeSong('jVm1NbrXaXc')}>Pokémon</button>
      </div>
    );
  }

  changeSong(video) {
    this.setState({ videoId: video });
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.setVolume(100);
  }
}

export default PlayerAPI;
