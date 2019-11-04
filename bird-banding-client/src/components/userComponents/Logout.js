import React from "react"
import { connect } from "react-redux"
import { logout } from '../../actions/currentUser.js'


const Logout = ({logout, history}) => {

  const handleOnSubmit= event => {
    event.preventDefault()
    logout(history)
  }


  return (
    <form onSubmit={handleOnSubmit} >
      <button type="submit">Log Out</button>
    </form>
  )
}



export default connect(null, {logout})(Logout)
