

export default function allBirdsReducer(state = {birds: []}, action) {
  switch (action.type) {
    case "ADD_BIRD":
    const bird = {
        bandNumber: "",
        species: "",
        sex: "",
        year: "",
        fat: "",
        wingspan: "",
        weight: "",
      }
      return { birds: state.birds.concat(bird) };
  default:
    return state
  }
}
