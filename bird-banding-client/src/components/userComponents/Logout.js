import React from "react"
import { connect } from "react-redux"
import { updateLoginForm } from '../../actions/login.js'
import { login } from '../../actions/currentUser.js'


const Logout = ({logout}) => {


  return (
    <form onSubmit={logout}>
      <input type="submit" value="Log Out"/>
    </form>
  )
}



export default connect(null, {logout})(Login)
