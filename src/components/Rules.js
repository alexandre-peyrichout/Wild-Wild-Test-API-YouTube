import React from 'react';
import './Rules.css';

const Rules = props => {
  if (props.modal === true) {
    return (
      <div className="Rule">
        <div className="Rule-box">
          <div className="Rule-Title">RULES</div>
          <div className="Rule-text">
            <p className="Rule-text-phrase">
              Bienvenue sur le Wild Wild Test !<br />
              Le blind-test du Far West !
            </p>
            <br />
            <span class="yellow"> &#9733;</span> <br />
            Rentre ton pseudo
            <br />
            <span class="yellow"> &#9733;</span> <br />
            Choisis ton thème
            <br />
            <span class="yellow"> &#9733;</span> <br />
            Tu as 30 sec par musique
            <br />
            <span class="yellow"> &#9733;</span> <br />
            10 musiques par thème
            <br />
            <span class="yellow"> &#9733;</span>
            <br />
            Le score varie en fonction des réponses trouvées.
            <br />
            <span class="yellow"> &#9733;</span>
            <br />
            Good luck ! <br />
          </div>
          <div>
            <button onClick={props.parentMethod2} className="Rule-button">
              OK
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="divnull"></div>;
  }
};

export default Rules;
