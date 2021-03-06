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
    },
    plain: true
  }).then(result => result.get()),
  id => models.User.findAll({
    limit: 1,
    attributes: ['id', 'first_name', 'last_name', 'email', 'password'],
    where: {
      id: id
    },
    plain: true,
  }).then(result => result.get())
);

export default class AuthController{
  
  static async registerUser(req, res){

    const { first_name, last_name, email, password, admin} = req.body;
      
      const hash = await bcrypt.hash(password, 10)
      models.User.create({
        first_name: first_name, 
        last_name: last_name, 
        email: email,
        admin: admin, 
        password: hash
      }).then((data) => res.send(data))
        .catch(err => res.status(404).send(err))
  }

  static async signOut(req,res){
    req.logOut();
    res.status(200).send("Logout successfull");
  }

  static async returnUserInfo(req,res){
    models.User.findAll({
      attributes: ['id', 'first_name', 'last_name', 'email', 'password', 'admin'],
      where: {
        email: req.body.email
      }
    }).then(data => res.send(data)) 
      .catch(err => console.log(err));
  }
}
