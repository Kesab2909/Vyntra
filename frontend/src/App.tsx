import { Button } from "@/components/ui/button"
import { Show, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthCallbackPage from "./pages/autho-callback/AuthCallbackPage"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/auth-callback' element={<AuthCallbackPage/>}/>
      </Routes>
    </>
  )
}

export default App