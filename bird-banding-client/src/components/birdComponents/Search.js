import React, { Component } from 'react';
import {callSearch} from '../../actions/search.js'
import {connect} from 'react-redux'



class Search extends Component {
 state = {
   query: '',
 }

 handleChange = () => {
   this.setState({
     query: this.state.value
   })
 }

 handleSubmit = (event) => {
   event.preventDefault()
   callSearch(this.state)
 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <input placeholder="Search by species..." onChange={this.handleChange} value={this.state.query}/>
       <input type="submit" value="Search"/>
     </form>
   )
 }
}

export default connect(null, {callSearch})(Search)
