const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user: user
  }
}




//asynchronous action creators
export const login = credentials => {
  return dispatch => {
    return fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: "banderKim", passsword: "password"})
      }
    })
  }
}
