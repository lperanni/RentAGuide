import bcrypt from 'bcrypt';
import passport from 'passport';
import models from "../models";

import { initializePassport } from '../services/passport-config';

initializePassport(
  passport,
  email => models.User.findAll({
    limit: 1,
    attributes: ['id', 'first_name', 'last_name', 'email', 'password'],
    where: {
      email: email
    }
  }),
  id => models.User.findAll({
    limit: 1,
    attributes: ['id', 'first_name', 'last_name', 'email', 'password'],
    where: {
      id: id
    }
  })
);

export default class AuthController{
  
  static async registerUser(req, res){

    const { firstName, lastName, email, password} = req.body;
      
      const hash = await bcrypt.hash(password, 10)
      models.User.create({
        first_name: firstName, 
        last_name: lastName, 
        email: email, 
        password: hash
      }).then(() => res.sendStatus(204))
        .catch(err => res.status(404).send(err))
  }

}