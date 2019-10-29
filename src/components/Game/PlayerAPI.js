import React from 'react';
import YouTube from 'react-youtube';

class PlayerAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '3',
      width: '3',
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
          height={this.state.height}
          width={this.state.width}
          videoId={this.state.videoId}
          opts={this.state.opts}
          onReady={this._onReady}
        />

        <button onClick={() => this.changeSong('jRP5mpZVmN8')}>Play a song</button>
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
