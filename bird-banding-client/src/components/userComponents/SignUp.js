import React from "react"
import { connect } from "react-redux"
import { updateSignUpForm, signUp } from '../../actions/signUp.js'



const SignUp = ({signUpFormData, updateSignUpForm, signUp}) => {

  const handleOnChange = event => {
    const {name, value} = event.target
      const updatedForm = {
        ...signUpFormData, [name] :value
      }
    updateSignUpForm(updatedForm)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signUp(signUpFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={signUpFormData.username} name="username" onChange={handleOnChange} placeholder="Username"/>
      <input type="text" value={signUpFormData.password} name="password" onChange={handleOnChange} placeholder="Password"/>
      <input type="text" value={signUpFormData.location} name="location" onChange={handleOnChange} placeholder="Location"/>
      <button type="submit" className="btn-outline">Sign Up</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signUpFormData: state.signUpFormReducer
  }
}

export default connect(mapStateToProps, {updateSignUpForm, signUp})(SignUp)
