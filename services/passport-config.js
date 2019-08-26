import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import models from '../models';

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

  passport.use('guide-local', new LocalStrategy({ usernameField: 'email'}, authenticateUser));
  passport.use('user-local', new LocalStrategy({ usernameField: 'email'}, authenticateUser));

  
  passport.serializeUser((user, done) => { done(null, user.id) });
  passport.deserializeUser((id, done) => { 

    models.User.findById(id, function (err, user) {
      if(err)
          done(err);
      if(user) {
          done(null, user);
      }
      else {
          models.Guide.findById(id, function (err, user) {
              if(err)
                  done(err);
              done(null, user);
          });
        }
      });
    }
  );
}

