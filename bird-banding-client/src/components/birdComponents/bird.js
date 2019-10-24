import React, { Component } from 'react';


class Bird extends Component {

  // handleClick = (event) => {
  //   this.props.deleteRestaurant(this.props.restaurant.id)
  // }

  render() {
    const { bird } = this.props;
    console.log(bird)
    return (
          <tr>
            <th scope="row">{bird.bird.id}</th>
            <td>{bird.bird.band_number}</td>
            <td>{bird.bird.species}</td>

            <td>{bird.bird.sex}</td>

            <td>{bird.bird.year}</td>

            <td>{bird.bird.fat}</td>

            <td>{bird.bird.wingspan}</td>

            <td>{bird.bird.weight}</td>
            <td><button onClick={this.handleClick}> Delete </button></td>
          </tr>

    );
  }
};

export default Bird;
