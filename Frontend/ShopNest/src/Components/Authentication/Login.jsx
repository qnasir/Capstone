import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
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
        <Link to="/signup"><button onClick={handleLogin}>Login</button></Link>
      </div>
    </div>
  )
}

export default Login