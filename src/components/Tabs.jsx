import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { AuthProvider } from "./Auth"
import { Home } from "./Home"
import { Login } from "./Login"
import { SignUp } from "./SignUp"
import { app1 } from "../base.js"
import { Logout } from "./Logout"

export const Tabs = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    app1.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    })
  }, [])

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavLink exact to="/">
          Home
        </NavLink>
        {!currentUser && <NavLink to="/login"> | Login </NavLink>}
        {!currentUser && <NavLink to="/signup"> | Sign Up </NavLink>}
        {currentUser && <span> | {currentUser.email} | </span>}
        {currentUser && <Logout />}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
