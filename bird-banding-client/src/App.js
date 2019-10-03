import React, { Component } from 'react';
import './App.css';
import UserContainer from "./containers/UserContainer"
import BirdContainer from "./containers/BirdContainer"

class App extends Component  {

//Checking to see if connected to api
  // componentDidMount(){
  //   fetch("http://localhost:3000/api/v1/users/1")
  //     .then(r=>r.json())
  //     .then(console.log)
  // }

render(){
  return (
    <div>
      <UserContainer />
      <BirdContainer />
    </div>
  );
}

}

export default App;
