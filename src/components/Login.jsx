import React, { useCallback, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { app1, UserLogin } from "../base.js"
import { AuthContext } from "./Auth.jsx"

export const Login = ({ history }) => {
  let user = UserLogin.currentUser

  const history1 = useNavigate()
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await app1
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
        history1("/")
      } catch (error) {
        console.log(`error: ${error}`)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)

  return (
    <>
      {!currentUser && (
        <>
          <h1>Log in</h1>
          <form onSubmit={handleLogin}>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button type="submit">Log in</button>
          </form>
        </>
      )}
    </>
  )
}
