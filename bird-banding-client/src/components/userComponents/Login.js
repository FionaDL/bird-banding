import React from "react"
import { connect } from "react-redux"
import { updateLoginForm } from '../../actions/login.js'
import { login } from '../../actions/currentUser.js'


const Login = ({loginFormData, updateLoginForm, login}) => {

  const handleOnChange = event => {
    const {name, value} = event.target
      const updatedForm = {
        ...loginFormData, [name] :value
      }
    updateLoginForm(updatedForm)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={loginFormData.username} name="username" onChange={handleOnChange}/>
      <input type="text" value={loginFormData.password} name="password" onChange={handleOnChange}/>
      <input type="submit" value="Log In"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginFormReducer
  }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)
