
export default function allBirdsReducer(state = {birds: []}, action) {
  switch (action.type) {
    case "ADD_BIRD":
      const bird = {
          band_number: action.band_number,
          species: action.species,
          sex: "",
          year: "",
          fat: "",
          wingspan: "",
          weight: "",
        }
        return { birds: state.birds.concat(bird) };
      case "SHOW_BIRDS":
        return {
          birds: state.birds
        }
  default:
    return state
  }
}
