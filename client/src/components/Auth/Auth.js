import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'

const Auth = () => {
  const classes = useStyles()

  const[showPassword, setShowPassword] = useState(false)
  const[isRegistered, setIsRegistered ] = useState(false)

  const handleShowPassword = () => setShowPassword(prevShowPassword =>!prevShowPassword)

  const handleSubmit = () => {}

  const handleChange = () => {}

  const switchMode = () =>{
    setIsRegistered((prevIsRegistered) => !prevIsRegistered)
    handleShowPassword(false)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevantion={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isRegistered? "Register" : "Login"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isRegistered && (
                <>
                  <Input name="firstName" label="Account name" handleChange={handleChange} autofocus half />
                  <Input name="Password" label="Password" handleChange={handleChange} half />
                </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isRegistered && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="conatiner" color="primary" className={classes.submit}>
            {isRegistered ? "Register" : "Login"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isRegistered ? "Already have an account? Login" : " Don't have an account? Register!"}
              </Button>
            </Grid>  
          </Grid>
         </form>
      </Paper>
    </Container>
  )
}

export default Auth