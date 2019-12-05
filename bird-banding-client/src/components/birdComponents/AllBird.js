import React, { Component } from 'react';
import { connect } from "react-redux"


class AllBird extends Component {


  render() {
    const { bird } = this.props;
    return (
          <tr>
            <th scope="row">{bird.id}</th>
            <td>{bird.attributes.band_number}</td>
            <td>{bird.attributes.species}</td>
            <td>{bird.attributes.sex}</td>
            <td>{bird.attributes.year}</td>
            <td>{bird.attributes.fat}</td>
            <td>{bird.attributes.wingspan}</td>
            <td>{bird.attributes.weight}</td>
            <td>{bird.attributes.user.location}</td>
        </tr>
    );
  }
};

export default AllBird;
