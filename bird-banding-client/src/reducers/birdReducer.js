let initialState = {
  band_number: "",
  species: "",
  sex: "",
  year: "",
  fat: "",
  wingspan: "",
  weight: "",
  user_id: ""
}

export default function birdFormReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_BIRD_FORM":
      return action.formData
    case "RESET_BIRD_FORM":
    return initialState
  default:
    return state
  }
}
