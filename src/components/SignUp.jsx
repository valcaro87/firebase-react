import React, { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { app1, UserLogin } from "../base.js"

export const SignUp = ({ history }) => {
  const user = UserLogin.currentUser
  const history1 = useNavigate()

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await app1
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
        history1("/")
      } catch (error) {
        console.log(`error: ${error}`)
      }
    },
    [history]
  )

  return (
    <>
      {!user && (
        <>
          <h1>Sign up</h1>
          <form onSubmit={handleSignUp}>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button type="submit">Sign Up</button>
          </form>
        </>
      )}
    </>
  )
}
