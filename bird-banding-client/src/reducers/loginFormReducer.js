initialState = {
  username: "",
  password: ""
}

export default function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return action.user
  
  default:
    return state
  }
}
