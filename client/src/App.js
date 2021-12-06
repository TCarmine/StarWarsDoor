import React, { useState } from 'react'
import './App.css';

function App() {
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const registerUser = () =>{} 
  const loginUser = () =>{}
  const getUser = () =>{}   

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
