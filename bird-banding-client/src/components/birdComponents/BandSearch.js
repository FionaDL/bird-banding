import React, { Component } from 'react';
import {connect} from "react-redux"
import {bandSearch, resetBandForm} from "../../actions/search.js"
import {getAllBirds} from "../../actions/birdActions"
import Results from "./Results.js"


class BandSearch extends Component {
  state = {
    band: " ",
    foundBird: " ",
    isSubmitted: false
  }

  componentDidMount(){
    this.props.getAllBirds()
  }

  handleChange = (event) => {
   this.setState({
     band: event.target.value
   })
 }

  handleSubmit = (event) => {
   event.preventDefault()
   const allBirds = this.props.birds
   const bird = allBirds.find((bird) => {
     return bird.attributes.band_number
   })
   return bird ? this.setState({foundBird: bird, isSubmitted: true}) : "Band"
    this.props.resetBandForm()
 }

 render() {
   return (
     <div>
     <form onSubmit={this.handleSubmit}>
       <input placeholder="Enter band number..." onChange={this.handleChange} value={this.state.band}/>
       <input type="submit" value="Search"/>
     </form>
      {this.state.isSubmitted && <Results bird={this.state.foundBird}/>}
   </div>
   )
 }
}

const mapStateToProps = state => {
  return {
    birds: state.allBirdsReducer
  }
}


export default connect(mapStateToProps, {bandSearch, resetBandForm, getAllBirds}) (BandSearch)
