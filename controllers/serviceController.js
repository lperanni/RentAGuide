import models from '../models';


export default class ServiceController {

  static async postService(req, res){

    const { serviceName, description } = req.body;

    console.log("Desc:" + description);

    models.Service.create({
      service_name: serviceName,
      description: description
    }).then(() => res.sendStatus(204))
      .catch(err => res.status(404).send(err))
  }

  static async getAllServices(req, res){
    models.Service.findAll({
      attributes: ['id','service_name', 'description']
    }).then(data => res.json(data))
      .catch(err => res.status(404).send("No services found\n" + err));
  }

  static async getServiceById(req,res){
    models.Service.findAll({
      attributes: ['id','service_name','description'],
      where: {
        id: req.params.id
      }
    }).then(data => res.json(data))
      .catch(err => res.status(404).send("No services found\n" + err));
  }

  static async deleteService(req, res){
    models.Service.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.sendStatus(204))
      .catch(err => res.status(404).send(err));
  }

}