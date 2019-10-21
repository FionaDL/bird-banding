import React, { Component} from "react"
import { connect } from "react-redux"
import { getAllBirds } from '../../actions/birdActions.js'
import Bird from './Bird.js'

class CurrentUserBirds extends Component {
  render() {
    console.log(this.props.allBirds)
    const birds = this.props.allBirds["birds"]
    const birdList = birds.map(bird => {
      return (
      <Bird key={bird.id} bird={bird}/>
      )
    })
    return(
      <ul>
        {birdList}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    allBirds: state.allBirdsReducer
  }
}

export default connect(mapStateToProps, {getAllBirds})(CurrentUserBirds)
