let initialState = {
  username: "",
  password: ""
}

export default function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.formData
    case "RESET_LOGIN_FORM":
      return initialState
  default:
    return state
  }
}
