import React from 'react';
import './PlayBtn.css';
import { NavLink } from 'react-router-dom';

export default class PlayBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { character: '' };
  }

  render() {
    return (
      <div className="playBtn">
        <NavLink activeClassName="active" to="/Game">
          <div className="swal2-success-line-tip"></div>
          <div className="swal2-success-line-long"></div>
        </NavLink>
      </div>
    );
  }
}
