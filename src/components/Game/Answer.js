import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>
          <input
            id="input-answer"
            className="input-answer"
            type="text"
            name="answer"
            value={this.props.parentAnswer}
            onChange={this.props.parentMethodAnswer}
            placeholder="Write your answer here"
          />
        </label>
      </div>
    );
  }
}

export default Answer;
