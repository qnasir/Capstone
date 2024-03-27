import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Login.css'

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {

      const data = { username,password }
      
      try {
        const response = await axios.post(import.meta.env.VITE_SIGNUP_KEY,data)
        alert("User added successfully")
      } catch (err) {
        console.error(err)
      }

    }

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>SignUp</button>
      </div>
    </div>
  )
}

export default Signup