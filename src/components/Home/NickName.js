import React, { Component } from 'react';
import './NickName.css';

const MAX_LENGTH = 10;

export default class NickName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleChange = event => {
    event.target.value.length <= MAX_LENGTH && this.setState({ name: event.target.value });
  };

  render() {
    let max = this.state.name.length >= MAX_LENGTH;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="nickName">
            Pick-up a name !
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              className={max ? 'length-maximum-reached' : 'length-ok'}
            />
          </label>
          {/* <input type="submit" value="Envoyer" /> */}
        </form>
      </div>
    );
  }