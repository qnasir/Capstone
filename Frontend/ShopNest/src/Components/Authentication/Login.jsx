import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ cookie, setCookies ] = useCookies(["access_token"])

    const handleLogin = async () => {

      const data = { username,password }
      
      try {
        const response = await axios.post(import.meta.env.VITE_LOGIN_KEY,data)
            setCookies("access_token", response.data.token);
            setCookies("username", response.data.username)
            window.localStorage.setItem("userId", response.data.userId)
            window.location.href = '../'
          } catch (err) {
            console.log(err)
          }
          
          window.addEventListener('load', ()=> {       
            window.location.reload()
      })

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
        <Link><button onClick={handleLogin}>Login</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Login