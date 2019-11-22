import React from "react"
import { connect } from "react-redux"
import { updateLoginForm } from '../../actions/login.js'
import { login } from '../../actions/currentUser.js'


const Login = ({loginFormData, updateLoginForm, login, history}) => {

  const handleOnChange = event => {
    const {name, value} = event.target
      const updatedForm = {
        ...loginFormData, [name] :value
      }
    updateLoginForm(updatedForm)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="form-group">
      <input type="text" value={loginFormData.username} name="username" onChange={handleOnChange} placeholder="Username"/>
      </div>
      <div className="form-group">
      <input type="text" value={loginFormData.password} name="password" onChange={handleOnChange} placeholder="Password"/>
      </div>
        <button type="submit" className="btn-outline">Log In</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginFormReducer
  }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)
