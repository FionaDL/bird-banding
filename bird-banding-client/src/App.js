import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import { getCurrentUser } from "./actions/currentUser.js"
import { getAllBirds, } from "./actions/birdActions.js"
import Welcome from "./components/Welcome.js"
import Navbar from "./components/Navbar.js"
import Login from "./components/userComponents/Login.js"
import SignUp from "./components/userComponents/SignUp.js"
import BirdContainer from "./containers/BirdContainer.js"
import LandingContainer from "./containers/LandingContainer.js"
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom'

class App extends Component  {

  componentDidMount(){
    this.props.getCurrentUser()
  }

render(){
  return (
    <div className="container-full">
      <Navbar/>
      <Welcome/>
      <hr></hr>
          <div>
            <Route exact path='/' render={()=> this.props.currentUser ? <BirdContainer currentUser={this.props.currentUser}/> : <LandingContainer/>}/>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signUp' component={SignUp}></Route>
          </div>
    </div>
  );
}

}

const mapStatetoProps = state => {
  return {
    currentUser: state.currentUserReducer,
  }
}

export default withRouter(connect(mapStatetoProps, {getAllBirds, getCurrentUser})(App))
