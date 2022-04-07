import React, { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { app1, UserLogin } from "../base.js"
import { Form } from "./Form.jsx"

export const SignUp = ({ history }) => {
  const user = UserLogin.currentUser
  const history1 = useNavigate()
  const [currentErrors, setCurrentErrors] = useState(null)

  const handleSignUp = useCallback(
    async (event) => {
      const { email, password } = event
      try {
        await app1.auth().createUserWithEmailAndPassword(email, password)
        history1("/")
      } catch (error) {
        setCurrentErrors(error.message)
      }
    },
    [history]
  )

  return (
    <>
      {!user && (
        <Form
          handlesubmission={handleSignUp}
          headerButton="Sign Up"
          currentErrors={currentErrors}
        />
      )}
    </>
  )
}
