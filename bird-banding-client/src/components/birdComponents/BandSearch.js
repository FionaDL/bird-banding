import React, { Component } from 'react';
import {connect} from "react-redux"
import {bandSearch} from "../../actions/search.js"
import Results from "./Results.js"


class BandSearch extends Component {
  state = {
    band: " "
  }

  handleChange = (event) => {
   this.setState({
     band: event.target.value,
     isSubmitted: false
   })
 }

  handleSubmit = (event) => {
   event.preventDefault()
   this.setState({
     band:  this.props.bandSearch(this.state.band),
     isSubmitted: true
   })
 }

 render() {
   return (
     <div>
     <form onSubmit={this.handleSubmit}>
       <input placeholder="Enter band number..." onChange={this.handleChange} value={this.state.band}/>
       <input type="submit" value="Search"/>
     </form>
      {this.state.isSubmitted && <Results/>}
   </div>
   )
 }
}

export default connect(null, {bandSearch}) (BandSearch)
