import models from '../models';
import bcrypt from 'bcrypt';

export default class UserController {
  
  static async getAllUsers(res) {

    models.User.findAll({
      attributes: ['id','first_name','last_name','email','password']
    }).then(result => res.status(200).json(result)) 
      .catch(() => res.status(404).send("No users found"))
  }

  static async getUser(req, res) {
    models.User.findAll({
      attributes: ['id','first_name','last_name','email', 'password'],
      where: {
        id: req.params.id
      }
    }).then(result => res.status(200).json(result)) 
      .catch(() => res.status(404).send("No users found"))
  }

  static async deleteUser(req, res) {

    const { id } = req.params;

    models.User.destroy({
      where: {
        id: id
      }
    }).then(result => res.status(204).send("User deleted"))
      .catch(() => res.sendStatus(404));
  }

  static async changePassword(req, res) {
    models.User.update({
      password: await bcrypt.hash(req.body.password, 10)
    },
    {
      where: {
        id: Number(req.params.id)
      }
    }).then(() => res.sendStatus(204))
      .catch(err => res.status(409).send(err));
  }
}