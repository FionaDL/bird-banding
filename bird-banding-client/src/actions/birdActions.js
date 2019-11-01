export const updateBirdForm = formData => {
  return {
    type: "UPDATE_BIRD_FORM",
    formData: formData
  }
}

const addBird = bird => {
  return {
    type: "ADD_BIRD",
    bird
  }
}

const showBirds = birds => {
  return {
    type: "SHOW_BIRDS",
    birds
  }
}

 const deleteBird = birdId => {
  return {
    type: "DELETE_BIRD",
    birdId
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

export const getAllBirds = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/birds", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
       },
      })
      .then(r => r.json())
      .then(birds => {
        if(birds.error) {
          alert(birds.error)
        } else {
          dispatch(showBirds(birds))
        }
        })
      .catch(console.log())
  }
}

export const removeBird = birdId => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/birds/${birdId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteBird(birdId))
        }
      })
      .catch(console.log)

  }
}
