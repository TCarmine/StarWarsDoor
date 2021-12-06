const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require(cookie-parser)
const bcrypt = require('bcryptjs')
const expressSession = require('express-session')
const bodyParser = require('body-parser')

const App = express()

// Middleware
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: true}))

App.listen(4000, ()=>{
  console.log('Server has started')
})