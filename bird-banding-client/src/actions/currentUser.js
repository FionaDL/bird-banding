export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user: user
    }
  }

export const clearCurrentUser = () => {
  return {
    type: "DELETE_USER"
  }
}

const resetLoginForm = () => {
  return {
    type: "RESET_LOGIN_FORM"
  }
}




//asynchronous action creators
export const login = (credentials, history) => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({credentials})
      })
      .then(r => r.json())
      .then(user => {
        if(user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
          dispatch(resetLoginForm())
          history.push('/')
        }
        })
      .catch(console.log())
  }
}



export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
        }
      })
      .then(r => r.json())
      .then(user => {
        if(user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
        }
        })
      .catch(console.log())
  }
}


export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}
