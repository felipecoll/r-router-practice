import React from 'react'
import { AuthRoute, useAuth } from '../auth/auth'


const Profile = () => {
    const auth = useAuth()
    return (
        <>
        <h1>Mi perfil</h1>
        <p>Welcome, {auth.user?.username}</p>
    </>
  )
}

export default Profile