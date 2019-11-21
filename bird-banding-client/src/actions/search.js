export const bandSearch = number => {
  return {
    type: "CALL_SEARCH",
    number
  }
}


export const getBandedBird = () => {
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
          dispatch(showBirds(birds.data))
        }
        })
      .catch(console.log())
  }
}
