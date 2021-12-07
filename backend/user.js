const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10

const user = new mongoose.Schema({
  username:String,
  password:String
})

module.exports = mongoose.model('User', user)