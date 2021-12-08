import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'
import axios from 'axios'

const initialState = {accountName:"", password:""}

const LoggedButton = (isRegistered) =>{
  
  const classes = useStyles()
  return(
    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
      {isRegistered ?   "Login" :  "Register" }
    </Button>
  )
}
 
const UserButton = (data) => {
  
  return(
    <Button> {data.username}</Button>
  ) 
}

const Auth = () => {
  const classes = useStyles()

  const[showPassword, setShowPassword] = useState(false)
  const[isRegistered, setIsRegistered ] = useState(true)
  const[isLoggedIn, setIsLoggedIn ] = useState(false)
  //const [registerUsername, setRegisterUsername] = useState("")
  //const [registerPassword, setRegisterPassword] = useState("")
  const [formData, setFormData] = useState(initialState)
  const [data, setData] = useState(null)

  const handleShowPassword = () => setShowPassword(prevShowPassword =>!prevShowPassword)


  const handleSubmit = (e) => {

    if(isRegistered){
      axios({
          method:"POST",
          data: {
            username: formData.accountName,
            password: formData.password,
          },
          withCredentials: true,
          url:"http://localhost:4000/login",
        }).then( res => {
          
          setIsLoggedIn(true) 
          return (
            
            <UserButton />

          )  
        })   // set variable to load resources 
    } else {
      console.log(formData)
        axios({
          method:"POST",
          data: {
            username: formData.accountName,
            password: formData.password,
          },
          withCredentials: true,
          url:"http://localhost:4000/register",
        }).then( res => setIsRegistered(true))
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const switchMode = () =>{
    setIsRegistered((prevIsRegistered) => !prevIsRegistered)
    handleShowPassword(false)
  }


 const showResources = () =>{
  
  const getUser = () => {
    axios({
      method:"GET",
      withCredentials: true,
      url:"http://localhost:4000/user",
    }).then(res => {
        setData(res.data)
        console.log(res.data)
    }) 
  }
 }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevantion={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isRegistered ? "Login" : "Register"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* <Input name="email" label="Email Address" handleChange={handleChange} type="email" onChange={e =>setRegisterUsername(e.target.value)}l" /> */}
           <Input name="accountName" label="Account name" autofocus handleChange={handleChange}/>
           <Input name="password" label="Password" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword} /> 
            {/* {isRegistered && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}*/}
          </Grid>

          {
            (isRegistered && isLoggedIn) ? <UserButton /> : <LoggedButton isRegistered={isRegistered} onClick={switchMode}></LoggedButton>
          }
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isRegistered ? "Login" : "Don't have an account? Register!"  }
              </Button>
            </Grid>  
          </Grid>
         </form>
      </Paper>
    </Container>
  )
}

export default Auth