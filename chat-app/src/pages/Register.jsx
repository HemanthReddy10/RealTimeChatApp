import React from 'react'

export const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Co-op Connect</span>
            <span className="title">Register</span>
            <form >
                <input type="text"placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="file" />
                <button>Sign up</button>
            </form>
            <p>You do have an account ? Login</p>
        </div>
    </div>
  )
}



///rafc -shortcut for react functional component