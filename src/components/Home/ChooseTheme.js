import React, { Component } from 'react';
import Select from 'react-select';
import './ChooseTheme.css';

const options = [
  { value: 'tekno', label: 'TEKNO BOOM BOOM' },
  { value: 'teenmovies', label: 'TEEN MOVIES' },
  { value: 'scarymovies', label: 'SCARY MOVIES' },
  { value: 'wildwildwest', label: 'WILD WILD WEST' },
  { value: 'geekmusics', label: 'GEEK MUSICS' }
];

//const ChooseTheme = () => <Select options={options} styles={colourStyles} />;

export default () => (
  <Select
    className="chooseTheme"
    options={options}
    defaultValue={options}
    label="Single select"
    options={options}
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
