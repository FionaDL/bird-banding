export const updateBirdForm = formData => {
  return {
    type: "UPDATE_BIRD_FORM",
    formData: formData
  }
}

const addBird = formData => {
  console.log(formData)
  return {
    type: "ADD_BIRD",
    band_number: formData.band_number,
    species: formData.species
  }
}

const showBirds = data => {
  return {
    type: "SHOW_BIRDS",
    data: data
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
        console.log(bird)
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
        }
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
