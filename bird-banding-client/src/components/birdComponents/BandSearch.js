import React, { Component } from 'react';
import {connect} from "react-redux"
import {bandSearch, resetBandForm} from "../../actions/search.js"
import {getAllBirds} from "../../actions/birdActions"
import Results from "./Results.js"
import NoBird from "./NoBird.js"


class BandSearch extends Component {
  state = { band: " ",
    foundBird: {band_number: "", species: "",
    sex: "",
    year: "",
    fat: "",
    wingspan: "",
    weight: ""},
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
   const bandNumber = this.state.band
   const bird = allBirds.find(function(bird) {
     return bird.attributes.band_number == bandNumber
   })
    if (bird) {
      const thisBird = bird.attributes
      this.setState({foundBird: {...this.state.foundBird, band_number: thisBird.band_number,
        species: thisBird.species,
        sex: thisBird.sex,
        year: thisBird.year,
        fat: thisBird.fat,
        wingspan: thisBird.wingspan,
        weight: thisBird.weight },
        isSubmitted: true})
   }
   else {
     alert("This band number was not found in the database")
   }
   console.log(this.state.foundBird)
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
