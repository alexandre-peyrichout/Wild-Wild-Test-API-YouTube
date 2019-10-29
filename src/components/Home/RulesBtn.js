import React from 'react';
import RulesBtn from '../../assets/img/coin.gif'
import './RulesBtn.css';

export default ()=>{
    return (
        <div className="help_coin">
            <a href="http://localhost:3000/"><img src={RulesBtn} id="help_coin" alt="help_button"></img></a> 
        </div>
    )
}