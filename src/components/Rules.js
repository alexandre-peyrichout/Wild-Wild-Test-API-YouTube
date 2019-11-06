import React from 'react';
import AriaModal from '../../node_modules/react-aria-modal';
import './Rules.css';

class Rules extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false
    };

    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
    this.onModalEnter = this.onModalEnter.bind(this);
  }

  activateModal = () => {
    this.setState({ modalActive: true });
  };

  deactivateModal = () => {
    this.setState(
      {
        modalHasEntered: false
      },
      () => {
        setTimeout(() => {
          this.setState({
            modalActive: false
          });
        }, 300);
      }
    );
  };

  onModalEnter = () => {
    this.setState({ modalHasEntered: true });
  };

  render() {
    let dialogContentClass = 'modal modal--animated';
    let underlayClass = 'underlay';
    if (this.state.modalHasEntered) {
      dialogContentClass += ' has-entered';
      underlayClass += ' has-entered';
    }
    return (
      <div>
        <button onClick={this.activateModal}>Le pérou</button>
        <AriaModal
          titleText="demo five"
          onEnter={this.onModalEnter}
          onExit={this.deactivateModal}
          focusDialog={true}
          mounted={this.state.modalActive}
          underlayColor={false}
          underlayClass={underlayClass}
          underlayStyle={{ paddingTop: '2em' }}
        >
          <div id="demo-five-modal" className={dialogContentClass}>
            <h2>WILD WILD RULES</h2>
            <ul className="modal-body">
              <li>
                - Le but du Wild Wild Test est de retrouver le titre des musiques diffusées par le
                perroquet.
              </li>
              <li>- Le score varie en fonction du temps passer sur la réponse.</li>
              <li>- Le timer est de 30 secondes, le nombre total de musiques est de 10.</li>
            </ul>
            <footer className="modal-footer">
              <button id="demo-five-deactivate" onClick={this.deactivateModal}>
                LET'S GO !
              </button>
            </footer>
          </div>
        </AriaModal>
      </div>
    );
  }
}

export default Rules;
