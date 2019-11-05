import React from 'react';
import Title from './Home/Title';
import Logo from './Home/Logo';
import './Home.css';
import NickName from './Home/NickName';
import ChooseTheme from './Home/ChooseTheme';
import RulesBtn from './Home/RulesBtn';
import PlayBtn from './Home/PlayBtn';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idSongs: ''
    };
    this.goToPlaylist = this.goToPlaylist.bind(this);
  }

  goToPlaylist(value) {
    this.setState({
      idSongs: value
    });
  }

  render() {
    return (
      <div className="home">
        <Title />
        <Logo />
        <div className="threeflex">
          <NickName />
          <ChooseTheme parentMethodChoosePlaylist={this.goToPlaylist} value={this.state.idSongs} />
          <PlayBtn />
        </div>
        <RulesBtn />
      </div>
    );
  }
}

export default Home;
