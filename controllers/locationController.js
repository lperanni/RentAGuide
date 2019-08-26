import models from '../models';

export default class LocationController {
  
  static async getAllLocations(req, res){
    models.Location.findAll({
      attributes: ['id','location_name']
    }).then(data => res.json(data))
      .catch(err => res.status(404).send(err));
  }

  static async getLocationById(req, res){
    models.Location.findAll({
      attributes: ['id','location_name'],
      where: {
        id: req.params.id
      }
    }).then(data => res.json(data))
      .catch(err => res.status(404).send(err));
  }
}