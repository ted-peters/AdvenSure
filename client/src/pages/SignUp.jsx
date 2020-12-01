import React from 'react'
import UserSignUp from "../comp/UserSignUp"
import "./SignUp.css";

export default function SignUp() {
    return (
        <div className="signup">
        <div className ="signupHeader">
            Sign-Up:
        </div>    
            <UserSignUp />
        </div>
    )
}
