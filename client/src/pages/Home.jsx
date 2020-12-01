import React from 'react'
import Login from './Login'
import SignUp from './SignUp'



export default function Home() {
    return (
        <div className = "homeBody">
            <Login></Login>
            <SignUp></SignUp>
        </div>
    )
}
