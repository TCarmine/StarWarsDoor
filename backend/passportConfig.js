const User = require("./user")
const bcrypt = require("bcryptjs")
const localStrategy = require("passport-local").Strategy

module.exports = function (passport) {
  passport.use(new localStrategy(
    async function(username, password, done) {
      let allUsers = await User.find({});

      for(var i = 0; i < allUsers.length; i++) {
        if (bcrypt.compareSync(username, allUsers[i].username)) {
            username = allUsers[i].username ;
            break;
        }
      }
      
      User.findOne({ username }, function (err, user) {
        if (err) {
          return done(err); 
        }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  })
  
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      }
      cb(err, userInformation)
    })
  })
}


