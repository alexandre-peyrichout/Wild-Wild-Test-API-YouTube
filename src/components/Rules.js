import React from 'react';
import AriaModal from 'react-aria-modal';
import './Rules.css';

class Rules extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Rule">
        <div className="Rule-box">
          <div className="Rule-Title">WILD WILD RULES</div>
          <ul className="Rule-modal-body">
            <li>
              - Le but du Wild Wild Test est de retrouver le titre des musiques diffusées par le
              perroquet.
            </li>
            <li>- Le score varie en fonction du temps passer sur la réponse.</li>
            <li>- Le timer est de 30 secondes, le nombre total de musiques est de 10.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Rules;
