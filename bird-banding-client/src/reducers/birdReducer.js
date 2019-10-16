let initialState = {
  bandNumber: "",
  species: "",
  sex: "",
  year: "",
  fat: "",
  wingspan: "",
  weight: ""
}

export default function birdFormReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_BIRD_FORM":
      return action.formData
  default:
    return state
  }
}
