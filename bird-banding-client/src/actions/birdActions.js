export const updateBirdForm = formData => {
  return {
    type: "UPDATE_BIRD_FORM",
    formData: formData
  }
}

const addBird = formData => {
  return {
    type: "ADD_BIRD",
    formData: formData
  }
}

export const createBird = credentials => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/birds", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({credentials})
      })
      .then(r => r.json())
      .then(bird => {
        if(bird.error) {
          alert(bird.error)
        } else {
          dispatch(addBird(bird))
        }
        })
      .catch(console.log())
  }
}
