import React from "react"
import { connect } from "react-redux"
import { logout } from '../../actions/currentUser.js'


const Logout = ({logout}) => {

  const handleOnSubmit= event => {
    event.preventDefault()
    logout()
  }


  return (
    <form onSubmit={handleOnSubmit} >
      <button type="submit" className="btn-outline">Log Out</button>
    </form>
  )
}



export default connect(null, {logout})(Logout)
