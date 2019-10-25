import React, { Component } from 'react';


class Bird extends Component {

  // handleClick = (event) => {
  //   this.props.deleteRestaurant(this.props.restaurant.id)
  // }

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

export default Bird;
