import React, { Component } from 'react';
import {removeBird} from '../../actions/birdActions.js'
import { connect } from "react-redux"


class AllBird extends Component {

  handleClick = (event) => {
    this.props.removeBird(this.props.bird.id)
  }

  render() {
    console.log(this.props)
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
            <td>{bird.attributes.user.location}</td>
          </tr>

    );
  }
};

export default connect(null, {removeBird}) (AllBird);
