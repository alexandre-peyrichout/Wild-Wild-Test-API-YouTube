import React, { Component } from 'react';
import Select from 'react-select';
import './ChooseTheme.css';

const options = [
  { value: 'tekno', label: 'TEKNO BOOM BOOM' },
  { value: 'teenmovies', label: 'TEEN MOVIES' },
  { value: 'scarymovies', label: 'SCARY MOVIES' },
  { value: 'wildwildwest', label: 'WILD WILD WEST' },
  { value: 'retrogaming', label: 'RETRO GAMING' }
];

class ChooseTheme extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.value);
    this.props.parentMethodChoosePlaylist(event.value);
  }

  render() {
    return (
      <Select
        onChange={this.handleChange}
        placeholder="Pick a theme !"
        defaultValue={this.props.value}
        className="chooseTheme"
        options={options}
        label="Single select"
        theme={theme => ({
          ...theme,
          borderRadius: 15,
          colors: {
            ...theme.colors,
            primary25: '#62F6B4',
            primary: 'black'
          }
        })}
      />
    );
  }
}

export default ChooseTheme;
