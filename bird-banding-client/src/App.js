import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <userContainer />
      <birdContainer />
    </div>
  );
}

}

export default App;
