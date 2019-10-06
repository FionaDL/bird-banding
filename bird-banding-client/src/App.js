import React, { Component } from 'react';
import './App.css';
import UserContainer from "./containers/UserContainer"
import BirdContainer from "./containers/BirdContainer"
import { connect } from "react-redux"
import {getCurrentUser} from "./actions/currentUser.js"

class App extends Component  {

  componentDidMount(){
    this.props.getCurrentUser()
  }

render(){
  return (
    <div>
      <UserContainer />
      <BirdContainer />
    </div>
  );
}

}

export default connect(null, {getCurrentUser})(App)
