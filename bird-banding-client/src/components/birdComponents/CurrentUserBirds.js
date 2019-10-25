import React, { Component} from "react"
import { connect } from "react-redux"
import Bird from './Bird.js'

class CurrentUserBirds extends Component {
  render() {
    console.log(this.props)
    const currentBirds = this.props.allBirds.filter(bird=> bird.user_id === this.props.currentUser.id)
    if (currentBirds.length > 0) {
      const birdList = currentBirds.map((bird) =>
        <Bird key={bird.id} bird={bird}/>
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
