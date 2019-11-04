import React, { Component } from 'react';
import {removeBird} from '../../actions/birdActions.js'
import { connect } from "react-redux"


class CurrentBird extends Component {

  handleClick = (event) => {
    this.props.removeBird(this.props.bird.id)
  }

  render() {
    const { bird } = this.props;
    return (
          <tr>
            <th scope="row">{bird.id}</th>
            <td>{bird.attributes.band_number}</td>
            <td>{bird.attributes.species}</td>
            <td>{bird.attributes.ex}</td>
            <td>{bird.attributes.year}</td>
            <td>{bird.attributes.fat}</td>
            <td>{bird.attributes.wingspan}</td>
            <td>{bird.attributes.weight}</td>
            <td><button onClick={this.handleClick}> Delete </button></td>
          </tr>

    );
  }
};

export default connect(null, {removeBird}) (CurrentBird);
