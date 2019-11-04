import React from "react"
import { connect } from "react-redux"
import Login from "./userComponents/Login.js"
import Logout from "./userComponents/Logout.js"


const Navbar = ({currentUser}) => {

  return (
    <div className="navbar-default">
      {currentUser ? <div className="navbar-brand mb-0 h1">Welcome {currentUser.username}</div> : ""}{currentUser ? <Logout/> : "I wish we had all been born birds. -Kurt Vonnegut"}
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    currentUser: state.currentUserReducer
  }
}



export default connect(mapStatetoProps)(Navbar)
