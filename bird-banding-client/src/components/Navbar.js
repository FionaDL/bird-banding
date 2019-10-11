import React from "react"
import { connect } from "react-redux"
import Login from "./userComponents/Login.js"
import Logout from "./userComponents/Logout.js"


const Navbar = ({currentUser}) => {



  return (
    <div>
      {currentUser ? <Logout/> : <Login/>}
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    currentUser: state.currentUserReducer
  }
}



export default connect(mapStatetoProps)(Navbar)
