const { Passport } = require('passport/lib')
const User = require('./user'),
      bcrypt = require('bcryptjs'),
      localStrategy = require('passport-local').Strategy


module.exports = function (passport) {
  
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({username:username},(err, user) => {
        if(err) throw err
        if(!user) return done(null, false)
        bcrypt.compare(password, user.password),(err, result)=>{
          if(err) throw err
          if(result === true){
            return done(null, user)
          } else {
            return done(null, false)
          }
        }
      })
    })
  )
}