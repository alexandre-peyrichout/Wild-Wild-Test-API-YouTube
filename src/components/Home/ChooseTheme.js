import React, { Component } from 'react';
import './ChooseTheme.css';
class ChooseTheme extends React.Component {
 constructor(props) {
   super(props);
   this.state = { value: 'themes' };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleChange(event) {
   this.setState({ value: event.target.value });
 }
 handleSubmit(event) {
   event.preventDefault();
 }
 render() {
   return (
     <div class="box" onSubmit={this.handleSubmit}>
       <select value={this.state.value} onChange={this.handleChange}>>
         <option hidden selected>
           Choisis ton thème !{' '}
         </option>
         <option>Wild Rock</option>
         <option>Tekno</option>
         <option>Zouk</option>
         <option>Macarena</option>
         <option>Tektonik</option>
       </select>
     </div>
   );
 }
}
export default ChooseTheme;