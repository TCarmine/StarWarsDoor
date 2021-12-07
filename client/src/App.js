import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const registerUser = () =>{
    axios({
      method:"POST",
      data: {
        username: registerUsername,
        password: setRegisterPassword,
      },
      withCredentials: true,
      url:"http://localhost:4000/register",
    }).then( res => console.log(res))
  } 
  const loginUser = () =>{
    axios({
      method:"POST",
      data: {
        username: loginUsername,
        password: setLoginPassword,
      },
      withCredentials: true,
      url:"http://localhost:4000/login",
    }).then( res => console.log(res))
  }
  const getUser = () =>{
    axios({
      method:"GET",
      withCredentials: true,
      url:"http://localhost:4000/getUser",
    }).then( res => console.log(res))
  }   

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input type="text" placeholder="username" onChange={e =>setRegisterUsername(e.target.value)} />
        <input type="text" placeholder="password" onChange={e =>setRegisterPassword(e.target.value)} />
        <button onClick={registerUser}>Submit</button>
      </div> 
      
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="username" onChange={e =>setLoginUsername(e.target.value)} />
        <input type="text" placeholder="password" onChange={e =>setLoginPassword(e.target.value)} />
        <button onClick={loginUser}>Submit</button>
      </div> 

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
      </div>
    </div>
  );
}

export default App;
