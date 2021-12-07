const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const User = require('./user')

//DB connetion
const mongoUri = "mongodb+srv://Carmine:%24vetere02468T%21%3F@cluster0.md02r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri, { 
  useNewUrlParser: true,     
  useUnifiedTopology: true 
})

mongoose.connection.on("connected", ()=>{
  console.log("Connected to mongo instace")
} )

mongoose.connection.on("Error", (err)=>{
  console.log("There was some error", err)
} )

mongoose.connection.on("Error", (err)=>{
  console.log("There was some error", err)
} )

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
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
require('./passportConfig')(passport)



//----End Middleware

// Routes
app.post("/login", (req, res, next) => {
  passport.authenticate("local",{session : false},
  async (err, user, info) => {
    try{
      if (err) {
        return res.json({
            message: "Internal Server Error!",
        })
      }
      else if (!user) {
        return res.json({
            message: "No Such User!"
        })
      }
      else {
        await req.logIn(user, (err) => {
          if (err) {
            return res.json({
                message: "Login Failure!"
            })
          }
          return res.json({
            message: "Login Success!"
        })
        })
      }
    }catch(err){
      console.log("this is the error: ", err)
    }
  })(req, res, next)
})

app.post("/register",(req, res) =>{
  User.findOne({username:req.body.username}, async (err, doc)=>{
    try { 
      if(doc) res.send("User already exist") // need to be routed appropiate FE page
      if(!doc){
        try{
            const newUser = new User({
            username: req.body.username,
            passport: req.body.passport
          })
          await newUser.save()
          res.send("User Created") // need to be routed appropiate FE page
        }catch(err){
          console.log("this is the error: ", err)
        }
      }
    }catch(err){
      console.log("this is the error: ", err)
    }  
  })
})

app.get("/user",(req, res) =>{
  res.send(req.user)

})

// End of Routes

// Start Server
app.listen(4000,() =>{
  console.log('Server has started')
})