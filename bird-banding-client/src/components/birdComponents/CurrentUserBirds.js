import React, { Component} from "react"
import { connect } from "react-redux"
import { getAllBirds } from '../../actions/birdActions.js'
import Bird from './Bird.js'

class CurrentUserBirds extends Component {
  render() {
    console.log(this.props.allBirds)
    const birds = this.props.allBirds.birds
    if (birds.length > 0) {
      const birdList = birds.map(bird => {
      return (
        <div>
          <Bird bird={bird}/>
      </div>
      )
    })
    return {birdList}
  }
    else {
    return (
      "No birds have been added.")

    }
  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    allBirds: state.allBirdsReducer
  }
}

export default connect(mapStateToProps, {getAllBirds})(CurrentUserBirds)
