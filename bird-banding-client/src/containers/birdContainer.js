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
             <BirdForm/>
             <CurrentUserBirds/>
           </div>
           <div className="col">
             <AllBirds/>
           </div>
        </div>
       </div>
     )
  }
}

export default BirdContainer
