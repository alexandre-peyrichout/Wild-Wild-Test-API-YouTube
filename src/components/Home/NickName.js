import React from 'react';
import './NickName.css';
import PlayBtn from '../Home/PlayBtn';

const MAX_LENGTH = 50;

export default class NickName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', nameValidate: false };
  }

  handleChange = event => {
    event.target.value.length <= MAX_LENGTH && this.setState({ name: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const newNameValidate = !this.state.nameValidate;
    this.state.name !== '' && this.setState({ nameValidate: newNameValidate });
  };

  render() {
    console.log('nameValidate: ' + this.state.nameValidate);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Write a name"
            type="text"
            id="name"
            onChange={this.handleChange}
            className="NickName"
          />

          {/* { <input type="submit" value="Envoyer" /> } */}
          {this.state.nameValidate && <PlayBtn />}
        </form>
      </div>
    );
  }
}
