import React from 'react';
import Game from '../Game.js';

class Answer extends Game {
  constructor(props) {
    super(props);
    this.state = {
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ answer: event.target.value });
    console.log(this.state.answer);
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.answer);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <label>
          <input
            className="input-answer"
            type="text"
            name="answer"
            value={this.state.answer}
            onChange={this.handleChange}
            placeholder="Write your answer here"
          />
          <button onClick={this.handleSubmit}>VALIDER</button>
        </label>
      </div>
    );
  }
}

export default Answer;
