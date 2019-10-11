import React, { Component } from 'react';
import './App.css';
import UserContainer from "./containers/UserContainer"
import BirdContainer from "./containers/BirdContainer"
import { connect } from "react-redux"
import {getCurrentUser} from "./actions/currentUser.js"
import Login from "./components/userComponents/Login.js"
import Logout from "./components/userComponents/Logout.js"
import Welcome from "./components/Welcome.js"

class App extends Component  {

  componentDidMount(){
    this.props.getCurrentUser()
  }

render(){
  return (
    <div>
      <div id="welcome">
      <Welcome />
      </div>
      {this.props.currentUser ? <Logout/> : <Login/>}
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
