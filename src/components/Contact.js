import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" className="lname" name="lastname" />
          <input type="text" className="write" name="write" />
          <div>
            <button></button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
