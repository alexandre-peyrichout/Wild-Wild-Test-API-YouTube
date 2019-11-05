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
        {this.props.number === 'https://media.giphy.com/media/j5WNDiz8VRwhSWr3oW/source.gif' ? (
          <img
            src="https://media.giphy.com/media/j5WNDiz8VRwhSWr3oW/source.gif"
            alt="cry"
            className="img-cry"
          />
        ) : (
          <span>{this.props.number}</span>
        )}
      </div>
    );
  }
}

export default CountDown;
