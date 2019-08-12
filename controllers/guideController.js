import models from "../models";
import bcrypt from 'bcrypt';
import passport from 'passport';

import { initializePassport } from '../services/passport-config';

initializePassport(
  passport,
  email => models.Guide.findAll({
    limit: 1,
    attributes: ['id', 'first_name', 'last_name', 'email', 'password', 'phone_number'],
    where: {
      email: email
    },
    plain: true
  }).then(result => result.get()),
  id => models.Guide.findAll({
    limit: 1,
    attributes: ['id', 'first_name', 'last_name', 'email', 'password', 'phone_number'],
    where: {
      id: id
    },
    plain: true,
  }).then(result => result.get())
);

export default class GuideController {
  
  static async getGuides(req,res){

    models.Guide.findAll({
      attributes: ['id','first_name','last_name','joined','email','phone_number']
    })
    .then(data => res.json(data))
    .catch(err => res.status(404).send("No users found\n" + err));
  }

  static async registerGuide(req, res){

    const { firstName, lastName, email, password, phoneNumber} = req.body;
      
      const hash = await bcrypt.hash(password, 10)
      models.Guide.create({
        first_name: firstName, 
        last_name: lastName, 
        email: email, 
        phone_number: phoneNumber,
        joined: new Date(), 
        password: hash
      }).then(() => res.sendStatus(204))
        .catch(err => res.status(404).send(err))
  }

  static async getGuideById(req, res){
    console.log(req.params.id); 
    models.Guide.findAll({
      attributes: ['id','first_name','last_name','joined','email','phone_number'],
      where: {
        id: Number(req.params.id)
      }
    }).then(user => res.json(user))
      .catch(err => res.status(404).send("User not found"));
  }

  static async updateGuideInfo(req, res){

    const { firstName, lastName, email, phone_number } = req.body;

    models.Guide.update({
      first_name: firstName, 
      last_name: lastName, 
      email: email, 
      phone_number: phone_number
    }, 
    {
      where: {
         id: Number(req.params.id)
      }
    }).then(() => res.sendStatus(204))
      .catch(err => res.status(409).send(err));
  }

  static async changePassword(req, res){
    models.Guide.update({
      password: await bcrypt.hash(req.body.password, 10)
    },
    {
      where: {
        id: Number(req.params.id)
      }
    }).then(() => res.sendStatus(204))
      .catch(err => res.status(409).send(err));
  }

  static async deleteGuide(req,res){
    models.Guide.destroy({
      where: {
        id: Number(req.params.id)
      }
    }).then(() => res.sendStatus(204))
      .catch(err => res.status(404).send(err));
  }

  static async signOut(req, res){
    req.logOut();
    res.status(200).send("Logout successfull");
  }
  
}