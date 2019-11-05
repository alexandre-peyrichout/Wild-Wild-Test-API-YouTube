import React from 'react';
import Title from './Home/Title';
import Logo from './Home/Logo';
import PlayBtn from './Home/PlayBtn';
import NickName from './Home/NickName';
import ChooseTheme from './Home/ChooseTheme';
import RulesBtn from './Home/RulesBtn';

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
      <div>
        <RulesBtn />
        <Title />
        <Logo />
        <NickName />
        <ChooseTheme parentMethodChoosePlaylist={this.goToPlaylist} value={this.state.idSongs} />
        <PlayBtn />
      </div>
    );
  }
}

export default Home;
