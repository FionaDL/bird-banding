import React, { Component } from 'react';
import {removeBird} from '../../actions/birdActions.js'
import { connect } from "react-redux"


class Bird extends Component {

  handleClick = (event) => {
    this.props.removeBird(this.props.bird.id)
  }

  render() {
    const { bird } = this.props;
    return (
          <tr>
            <th scope="row">{bird.id}</th>
            <td>{bird.band_number}</td>
            <td>{bird.species}</td>
            <td>{bird.sex}</td>
            <td>{bird.year}</td>
            <td>{bird.fat}</td>
            <td>{bird.wingspan}</td>
            <td>{bird.weight}</td>
            <td><button onClick={this.handleClick}> Delete </button></td>
          </tr>

    );
  }
};

export default connect(null, {removeBird}) (Bird);
