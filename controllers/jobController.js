import models from '../models';

export default class JobController {
  
  static async getJobs(res) {
    
    models.Job.findAll({
      include: [
        {
          model: models.Service,
          where: ["id: = serviceID"],
          attributes: ['service_name'] 
        },
        {
          model: models.User,
          where: ["id: = userID"],
          attributes: ['first_name', 'last_name'] 
        },
        {
          model: models.Language,
          where: ["id: = languageID"],
          attributes: ['language_name'] 
        },
        {
          model: models.Guide,
          where: ["id: = guideID"],
          attributes: ['first_name', 'last_name'] 
        }
    ],
      attributes: ['id','date','start_time','end_time','location'],
    }).then(data => res.json(data))
      .catch(err => res.status(404).send("No jobs found\n" + err));
  }

  static async getJobById(req, res) {
    models.Job.findAll({
      include: [
        {
          model: models.Service,
          where: ["id: = serviceID"],
          attributes: ['service_name'] 
        },
        {
          model: models.User,
          where: ["id: = userID"],
          attributes: ['first_name', 'last_name'] 
        },
        {
          model: models.Language,
          where: ["id: = languageID"],
          attributes: ['language_name'] 
        },
        {
          model: models.Guide,
          where: ["id: = guideID"],
          attributes: ['first_name', 'last_name'] 
        }
    ],
      attributes: ['date','start_time','end_time','location'],
      where: {
        id: req.params.id
      }
    }).then(data => res.json(data))
      .catch(err => res.status(404).send("No job with that ID found\n" + err));
  }

  static async postJob(req, res) {

    const { date, end_time, guideID, languageID, location, serviceID, start_time, userID } = req.body;

    models.Job.create({
      date: date,
      end_time: end_time,
      guideID: guideID,
      languageID: languageID,
      location: location,
      serviceID: serviceID,
      start_time: start_time,
      userID: userID
    }).then(() => res.sendStatus(204))
      .catch(err => res.status(404).send(err))
  }

  static async cancelJob(req, res) {
    models.Job.destroy({
      
      where: {
        id: req.params.id
      }
    }).then(() => res.sendStatus(204))
      .catch(err => res.status(404).send(err));
  }

  static async updateJobInfo(req, res) {

    const { date, end_time, guideID, languageID, location, serviceID, start_time, userID } = req.body;

    models.Job.update({
      date: date,
      end_time: end_time,
      guideID: guideID,
      languageID: languageID,
      location: location,
      serviceID: serviceID,
      start_time: start_time,
      userID: userID
    },
    {
      where: {
        id: req.params.id
      }
    }).then(() => res.sendStatus(204))
      .catch(err => res.status(404).send(err));
  }

  static async getJobsByGuide(req, res) {

    const { id } = req.params;

    models.Job.findAll({
      where: {
        guideID: id
      }
    }).then(data => res.json(data))
      .catch(err => res.status(404).send("No jobs with that guide found\n" + err));
  }

  static async getSingleJobByGuide(req, res) {
    
    const { id, jobId } = req.params;

    models.Job.findAll({
      where: {
        guideID: id,
        id: jobId
      }
    }).then(data => res.json(data))
      .catch(err => res.status(404).send("No jobs with that guide found\n" + err));
  }

  static async checkGuideAvailability(req, res) {
    
  }

}