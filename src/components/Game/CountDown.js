import React from 'react';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.startCount = false;
    this.state = {
      number: 30 // nombre du compteur en secondes
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000); // effectue tick() toutes les 1000 millisecondes
  }

  componentWillUnmount() {
    clearInterval(this.timerID); // jsp vraiment mais apparemment faut le garder dans l'exemple de l'horloge que j'ai cannibalisé
  }

  tick() {
    this.props.startCount // si le props startCount défini dans Game.js...
      ? this.state.number <= 0 // true : si le state number est inférieur ou égal à 0...
        ? this.setState({ number: this.state.number }) // true : ne pas toucher
        : this.setState({ number: this.state.number - 1 }) // false : nombre - 1
      : this.setState({ number: this.state.number }); // false : ne pas toucher
  }

  render() {
    return <div id="countdown-number">{this.state.number}</div>;
  }
}

export default CountDown;
