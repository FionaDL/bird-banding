import React, { Component } from 'react';
import BirdForm from '../components/birdComponents/BirdForm.js';
import CurrentUserBirds from '../components/birdComponents/CurrentUserBirds.js';
import AllBirds from '../components/birdComponents/CurrentUserBirds.js';



class BirdContainer extends Component {

  render() {
     return (
       <div>
         <BirdForm/>
         <CurrentUserBirds/>
         <AllBirds/>
       </div>
     )
  }
}

export default BirdContainer
