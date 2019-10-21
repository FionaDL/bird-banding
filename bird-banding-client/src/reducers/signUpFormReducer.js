let initialState = {
  username: "",
  password: "",
  location: ""

}

export default function signUpFormReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData
  default:
    return state
  }
}
