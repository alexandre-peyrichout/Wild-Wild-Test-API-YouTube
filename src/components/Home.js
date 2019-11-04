import React from 'react';
import Title from './Home/Title';
import Logo from './Home/Logo';
import './Home.css';
import NickName from './Home/NickName';
import RulesBtn from './Home/RulesBtn';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <RulesBtn />
        <Title />
        <Logo />
        <NickName />
      </div>
    );
  }
}

export default Home;
