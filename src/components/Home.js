import React from 'react';
import Title from './Home/Title';
import Logo from './Home/Logo';
import PlayBtn from './Home/PlayBtn';
import NickName from './Home/NickName';
import RulesBtn from './Home/RulesBtn';

class Home extends React.Component {
  render() {
    return (
      <div>
        <RulesBtn />
        <Title />
        <Logo />
        <NickName />
        <PlayBtn />
      </div>
    );
  }
}

export default Home;
