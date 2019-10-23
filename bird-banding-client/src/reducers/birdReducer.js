let initialState = {
  band_number: "",
  species: "",
  sex: "",
  year: "",
  fat: "",
  wingspan: "",
  weight: "",
  user_id: "b"
}

export default function birdFormReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_BIRD_FORM":
      return action.formData
  default:
    return state
  }
}
