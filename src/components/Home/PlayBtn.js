import React from 'react';
import './PlayBtn.css';

export default class PlayBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { character: '' };
  }

  render() {
    return <div className="playBtn" onClick={() => {}}></div>;
  }
}
