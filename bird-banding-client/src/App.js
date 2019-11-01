import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import { getCurrentUser } from "./actions/currentUser.js"
import { getAllBirds, } from "./actions/birdActions.js"
import Welcome from "./components/Welcome.js"
import Navbar from "./components/Navbar.js"
import BirdContainer from "./containers/BirdContainer.js"
import Login from "./components/userComponents/Login.js"
import SignUp from "./components/userComponents/SignUp.js"
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component  {

  componentDidMount(){
    this.props.getCurrentUser()
  }

render(){
  return (
    <div className="container-full">
      <Navbar/>
      <Welcome/>
      <Router>
        <div>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signUp' component={SignUp}/>
          <BirdContainer currentUser={this.props.currentUser}/>
        </div>
      </Router>
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
