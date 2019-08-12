import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';

export function initializePassport(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);

    if(user === null){
      return done(null, false, { message: 'No user with that email'})
    }
    try {
      console.log("User object: " + user);
      if (await bcrypt.compare(password, user.password)){
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect'});
      }
    } catch (e) {
      return done("error");
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email'}, authenticateUser));
  passport.serializeUser((user, done) => { done(null, user.id) });
  passport.deserializeUser((id, done) => { 
    return done(null, getUserById(id));
  })
}
