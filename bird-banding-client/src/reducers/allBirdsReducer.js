
export default function allBirdsReducer(state = {birds: []}, action) {
  switch (action.type) {
    case "ADD_BIRD":
      const bird = {
          bird: action.bird
        }
        return { birds: state.birds.concat(bird) };
      case "SHOW_BIRDS":
        return action.birds;
      case 'DELETE_BIRD':
        return {birds: state.birds.filter(bird => bird.id !== bird.id)}
  default:
    return state
  }
}
