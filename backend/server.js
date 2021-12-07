const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express()

//DB connetion
mongoose.connect(
  "mongodb+srv://Carmine:%24vetere02468T%21%3F@cluster0.md02r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser:true,
    useUnifiedTopology: true
  },
  ()=>{
    console.log("Mongoose is connected")
  }
)


// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
  origin:'http://localhost:3000', // url where the react app connect to
  credentials:true
}))

app.use(session({
  secret:"secretcode",
  resave: true,
  saveUninitialized: true
}))

app.use(cookieParser("secretcode"))

// Routers
app.post("/login",(req, res) =>{
  console.log(req.body)
})

app.post("/register",(req, res) =>{
  console.log(req.body)
})

app.get("/getUser",(req, res) =>{

})



app.listen(4000,() =>{
  console.log('Server has started')
})