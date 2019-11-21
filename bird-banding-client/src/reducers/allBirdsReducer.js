
export default function allBirdsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BIRD":
        return state.concat(action.bird);
      case "SHOW_BIRDS":
        return action.birds;
      case 'DELETE_BIRD':
         return state.filter(bird => bird.id === action.birdId ? false : true)
         case "CALL_SEARCH"
            return state.filter(bird => bird.id === action.birdId ? bird : "Band Number does not exisit")
  default:
    return state
  }
}
