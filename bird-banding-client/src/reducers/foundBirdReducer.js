let initialState = {
  band_number: "",
  species: "",
  sex: "",
  year: "",
  fat: "",
  wingspan: "",
  weight: "",
  user_name: "",
  location: ""
}

export default function foundBirdReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_BIRD":
      return action.formData
  default:
    return state
  }
}
