import React, { Component} from "react"
import { connect } from "react-redux"
import CurrentBird from './CurrentBird.js'

class CurrentUserBirds extends Component {

  render() {
     const fullBirds = this.props.allBirds
    if (fullBirds.length > 0) {
      const currentBirds = fullBirds.filter(bird => (bird.attributes.user_id === this.props.currentUser.id))
       const birdList = currentBirds.map((bird) =>
        <CurrentBird key={bird.id} bird={bird}/>
    )
    return(
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope="col">Band Number</th>
            <th scope="col">Species</th>
            <th scope="col">Sex</th>
            <th scope="col">Year</th>
            <th scope="col">Fat</th>
            <th scope="col">Wingspan</th>
            <th scope="col">Weight</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {birdList}
      </tbody>
    </table>

    )
  }
    else {
    return (
      "No birds have been added.")
    }
  }
};

const mapStateToProps = state => {
  return {
    allBirds: state.allBirdsReducer,
    currentUser: state.currentUserReducer
  }
}

export default connect(mapStateToProps)(CurrentUserBirds)
