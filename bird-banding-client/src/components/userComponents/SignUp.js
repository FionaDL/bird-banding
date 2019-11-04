import React from "react"
import { connect } from "react-redux"
import { updateSignUpForm, signUp } from '../../actions/signUp.js'


const SignUp = ({signUpFormData, updateSignUpForm, signUp, history}) => {

  const handleOnChange = event => {
    const {name, value} = event.target
      const updatedForm = {
        ...signUpFormData, [name] :value
      }
    updateSignUpForm(updatedForm)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signUp(signUpFormData, history)
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="form-group">
      <input type="text" value={signUpFormData.username} name="username" onChange={handleOnChange} placeholder="Username"/>
      </div>
       <div className="form-group">
      <input type="text" value={signUpFormData.password} name="password" onChange={handleOnChange} placeholder="Password"/>
      </div>
      <div className="form-group">
      <input type="text" value={signUpFormData.location} name="location" onChange={handleOnChange} placeholder="Location"/>
      </div>
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
