import React, { Component } from 'react';
import './App.css';
import UserContainer from "./containers/UserContainer"
import BirdContainer from "./containers/BirdContainer"
import { connect } from "react-redux"
import { getCurrentUser } from "./actions/currentUser.js"
import Welcome from "./components/Welcome.js"
import Navbar from "./components/Navbar.js"

class App extends Component  {

  componentDidMount(){
    this.props.getCurrentUser()
  }

render(){
  return (
    <div>
      <Welcome/>
      <Navbar/>
    
    </div>
  );
}

}

const mapStatetoProps = state => {
  return {
    currentUser: state.currentUserReducer
  }
}

export default connect(mapStatetoProps, {getCurrentUser})(App)
