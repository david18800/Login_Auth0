import { useEffect, useState } from 'react'
import './App.css'
import LoginButton from './components/LoginButton '
import LogoutButton from './components/LogoutButton '
import { useAuth0 } from '@auth0/auth0-react'
import Profile from './components/profile'

function App() {
  const {isAuthenticated, isLoading} = useAuth0()

 if(isLoading) return <h1>Loading...</h1>
  return (
    <div>
      <h1>application</h1>
      {!isAuthenticated ? <LoginButton/> : <LogoutButton/> }
      <Profile/> 
       
    </div>
  )
}

export default App
