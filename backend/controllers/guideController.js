import models from "../models";

export default class GuideController {
  
  static async getGuides(req,res){

    models.Guide.findAll({
      attributes: ['id','first_name','last_name','joined','email','phone_number']
    })
    .then(data => res.json(data))
    .catch(err => res.status(404).send("No users found\n" + err));
  }

  static async postGuide(req, res){

    const { firstName, lastName, email, phone_number, password } = req.body;

    models.Guide.create({ 
        first_name: firstName, 
        last_name: lastName, 
        email: email, 
        phone_number: phone_number, 
        password: password,
        joined: new Date()}
    ).then(data => res.send(data)).catch(err => res.send(err));
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



  
}