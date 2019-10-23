import React, {Component} from "react"
import { connect } from "react-redux"
import { getAllBirds } from '../../actions/birdActions.js'
import Bird from './Bird.js'

class AllBirds extends Component {

  render() {
    const birds = this.props.allBirds
    if (birds.length > 0) {
        const birdList = birds.map(bird => {
          return (
            <Bird key={bird.id} bird={bird}/>
          )
        })
        return {
          birdList
        }}
        else {
        return (
          "No birds have been added.")

        }
  }
};

const mapStateToProps = state => {
  return {
    allBirds: state.allBirdsReducer
  }
}

export default connect(mapStateToProps, {getAllBirds})(AllBirds)
