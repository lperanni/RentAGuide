import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';

export function initializePassport(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email);

    if(user === null){
      return done(null, false, { message: 'No user with that email'})
    }
    try {
  
      if (await bcrypt.compare(password, user.password)){
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect'});
      }
    } catch (e) {
      return done("error from if: " + e);
    }
  }

  passport.use('user-local', new LocalStrategy({ usernameField: 'email'}, authenticateUser));

  passport.use('guide-local', new LocalStrategy({ usernameField: 'email'}, authenticateUser));
  
  passport.serializeUser((user, done) => { done(null, user.id) });
  passport.deserializeUser((id, done) => { 
    return done(null, getUserById(id));
  })
}
