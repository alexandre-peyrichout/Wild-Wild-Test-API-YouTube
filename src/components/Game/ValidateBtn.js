import React from 'react';

class ValidateBtn extends React.Component {
  render() {
    return (
      <button onClick={this.props.parentMethodValidate} className="validate">
        OK
      </button>
    );
  }
}

export default ValidateBtn;
