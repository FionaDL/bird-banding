import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import { getCurrentUser } from "./actions/currentUser.js"
import { getAllBirds, } from "./actions/birdActions.js"
import Welcome from "./components/Welcome.js"
import Navbar from "./components/Navbar.js"
import BirdContainer from "./containers/BirdContainer.js"

class App extends Component  {

  componentDidMount(){
    this.props.getCurrentUser()
  }

render(){
  return (
    <div className="container-full">
      <Navbar/>
      <Welcome/>
      <BirdContainer currentUser={this.props.currentUser}/>
    </div>
  );
}

}

const mapStatetoProps = state => {
  return {
    currentUser: state.currentUserReducer,
  }
}

export default connect(mapStatetoProps, {getAllBirds, getCurrentUser})(App)
