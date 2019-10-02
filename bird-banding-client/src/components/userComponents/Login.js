import React from "react"

const Login = () => {
  return (
    <form onSubmit={this.handleOnSubmit}>
      <input type="text" value={} name="username" onChange={this.handleOnChange}/>
      <input type="text" value={} name="password" onChange={this.handleOnChange}/>
      <input type="submit" value="Log In"/>
    </form>
  )
}
