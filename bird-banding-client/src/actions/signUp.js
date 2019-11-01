import {setCurrentUser} from "./currentUser.js"

export const updateSignUpForm = formData => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData: formData
  }
}

export const resetSignUpForm = () => {
  return {type: "RESET_SIGNUP_FORM"}
}


export const signUp = credentials => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/signUp", {
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
          dispatch(resetSignUpForm())
        }
        })
      .catch(console.log())
  }
}
