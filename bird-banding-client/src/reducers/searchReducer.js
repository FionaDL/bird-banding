let initialState = {
  search: ""
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return action.formData
    case "RESET_SEARCH_FORM":
      return initialState
  default:
    return state
  }
}
