import React, { Component } from 'react';
import './NickName.css';
class NickName extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     username: ''
   };
   this.handleChange = this.handleChange.bind(this);
 }
 handleChange(event) {
   this.setState({ username: event.target.value });
 }
 handleSubmit(event) {
   event.preventDefault();
 }
 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <p className="pickUpNickname">Choisis un pseudo :</p>
       <input type="text" name="username" onChange={this.handleChange} />
     </form>
   );
 }
}
export default NickName;