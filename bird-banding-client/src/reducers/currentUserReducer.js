export default function currentUserReducer(state = null, action)  {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "DELETE_USER":
      return
  default:
    return state
  }
}
