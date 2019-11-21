
import React, { Component } from 'react';





class BandSearch extends Component {
 state = {
   band: ''
 }

 handleChange = () => {
   this.setState({
     band: this.state.value
   })
 }

 handleSubmit = (event) => {
   event.preventDefault()

 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <input placeholder="Enter band number..." onChange={this.handleChange} value={this.state.query}/>
       <input type="submit" value="Search"/>
     </form>
   )
 }
}

export default BandSearch
