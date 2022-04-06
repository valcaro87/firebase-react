import { useNavigate } from "react-router-dom"
import { app1 } from "../base.js"

export const Logout = () => {
  const history1 = useNavigate()

  const SignOut = () => {
    app1.auth().signOut()
    history1("/")
  }

  return <button onClick={SignOut}> Sign out</button>
}
