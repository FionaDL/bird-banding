import React, { Component} from "react"
import { connect } from "react-redux"
import Bird from './Bird.js'
import Search from './Search.js'
import { getAllBirds } from '../../actions/birdActions.js'

class AllBirds extends Component {

  componentDidMount() {
    this.props.getAllBirds()
  }


  render() {
    const birds = this.props.allBirds
    if (birds.length > 0) {
      const birdList = birds.map((bird) =>
        <Bird key={bird.id} bird={bird}/>
    )
    return(
      <div>
        <Search/>
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
    </div>

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
    allBirds: state.allBirdsReducer
  }
}

export default connect(mapStateToProps, {getAllBirds})(AllBirds)
