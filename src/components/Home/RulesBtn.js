import React from 'react';
import RulesBtn from '../../assets/img/star_help.gif';
import './RulesBtn.css';

export default () => {
  return (
    <div className="help_coin">
      <img src={RulesBtn} class="test" id="help_coin" alt="help_button"></img>
      <div className="side back"></div>
    </div>
  );
};
