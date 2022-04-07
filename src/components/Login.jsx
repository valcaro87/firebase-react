import React, { useCallback, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { app1, UserLogin } from "../base.js"
import { AuthContext } from "./Auth.jsx"
import { Form } from "./Form.jsx"

export const Login = ({ history }) => {
  let user = UserLogin.currentUser
  const [currentErrors, setCurrentErrors] = useState(null)

  const history1 = useNavigate()
  const handleLogin = useCallback(
    async (event) => {
      const { email, password } = event
      try {
        await app1.auth().signInWithEmailAndPassword(email, password)
        history1("/")
      } catch (error) {
        setCurrentErrors(error.message)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)

  return (
    <>
      {!currentUser && (
        <Form
          handlesubmission={handleLogin}
          headerButton="Login"
          currentErrors={currentErrors}
        />
      )}
    </>
  )
}
