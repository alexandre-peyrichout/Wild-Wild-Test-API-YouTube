import React from 'react';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.go = this.go.bind(this);
  }

  go() {
    this.props.onClick();
  }

  render() {
    return (
      <div onClick={this.go} className={this.props.className} id="countdown-number">
        {this.props.number}
      </div>
    );
  }
}

export default CountDown;
