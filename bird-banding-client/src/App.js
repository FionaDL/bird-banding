import React, { Component } from 'react';
import './App.css';
import UserContainer from "./containers/UserContainer"
import BirdContainer from "./containers/BirdContainer"
import { connect } from "react-redux"
import {getCurrentUser} from "./actions/currentUser.js"
import Login from "./components/userComponents/Login.js"
import Logout from "./components/userComponents/Logout.js"

class App extends Component  {

  componentDidMount(){
    this.props.getCurrentUser()
  }

render(){
  return (
    this.props.currentUser ? <Logout/> : <Login/>
  );
}

}

const mapStatetoProps = state => {
  return {
    currentUser: state.currentUserReducer
  }
}

export default connect(mapStatetoProps, {getCurrentUser})(App)
