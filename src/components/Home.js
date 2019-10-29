import React from 'react';
import Title from './Home/Title';
import Logo from './Home/Logo';
import PlayBtn from './Home/PlayBtn';
import NickName from './Home/NickName';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Logo />
        <NickName />
        <PlayBtn />
      </div>
    );
  }
}

export default Home;
