const mongoose = require('mongoose')
const user = neew mongoose.Schema({
  username:String,
  password:String
})

module.exports('User', user)