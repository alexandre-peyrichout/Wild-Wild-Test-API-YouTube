import React from 'react';
import Title from './Home/Title';
import Logo from './Home/Logo';
import './Home.css';
import NickName from './Home/NickName';
import ChooseTheme from './Home/ChooseTheme';
import Burger from './Burger';
import PlayBtn from './Home/PlayBtn';
import RulesBtn from './Home/RulesBtn';
import Rules from './Rules';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idSongs: '',
      show: false
    };
    this.goToPlaylist = this.goToPlaylist.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  goToPlaylist(value) {
    this.setState({
      idSongs: value
    });
  }

  openModal() {
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div className="home">
        <Rules modal={this.state.show} parentMethod2={this.closeModal} />
        <Burger />
        <RulesBtn parentMethod={this.openModal} />
        <Title />
        <Logo />
        <div className="home-nickname-play">
          <NickName />
          <ChooseTheme parentMethodChoosePlaylist={this.goToPlaylist} value={this.state.idSongs} />
          <PlayBtn theme={this.state.idSongs} />
        </div>
      </div>
    );
  }
}

export default Home;
