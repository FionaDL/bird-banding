import React, { Component } from 'react';
import BirdForm from '../components/birdComponents/BirdForm.js';
import CurrentUserBirds from '../components/birdComponents/CurrentUserBirds.js';
import AllBirds from '../components/birdComponents/AllBirds.js';


class BirdContainer extends Component {

  render() {
     return (
       <div className="container">
         <div className="row">
           <div className="col">
             <h5>Banding Station - {this.props.currentUser.location}</h5>
             <BirdForm/>
             <CurrentUserBirds/>
           </div>
           <div className="col">
             <h5>Banding Stations Everywhere</h5>
             <AllBirds/>
           </div>
        </div>
       </div>
     )
  }
}

export default BirdContainer
