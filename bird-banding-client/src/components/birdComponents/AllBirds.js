import React from "react"
import { connect } from "react-redux"
import { getAllBirds } from '../../actions/birdActions.js'

class AllBirds extends Component {
  render() {
    const birds = this.props.allBirds
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

mapStateToProps = state => {
  return {
    allBirds: state.allBirdsReducer
  }
}

export default connect(mapStateToProps, {getAllBirds})(AllBirds)
