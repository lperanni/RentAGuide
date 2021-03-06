import models from '../models';



export default class GuideController {
  
  static async getGuides(req,res){

    models.Guide.findAll({
      attributes: ['id','first_name','last_name','joined','email','phone_number']
    })
    .then(data => res.json(data))
    .catch(err => res.status(404).send("No users found\n" + err));
  }

  static async registerGuide(req, res){

    const { first_name, last_name, email, phone_number, languages, services } = req.body;

      models.Guide.create({
        first_name: first_name, 
        last_name: last_name, 
        email: email, 
        phone_number: phone_number,
        joined: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())
      }).then(result => {

        for (let i = 0; i < languages.length; i++) {

          let lang = languages[i];

          models.Guide_Known_Language.create({
            guideID: result.dataValues.id,
            languageID: lang.id
          })
        }

        for (let j = 0; j < services.length; j++) {

          let service = services[j];
          models.Guide_Service.create({
            guideID: result.dataValues.id,
            serviceID: service.id,
            price: 500
          })
        }
        res.sendStatus(204);
      })
      .catch(err => console.log(err));
  }

  static async getGuideById(req, res){
    console.log(req.params.id); 
    models.Guide.findAll({
      attributes: ['id','first_name','last_name','joined','email','phone_number'],
      where: {
        id: Number(req.params.id)
      }
    }).then(user => res.json(user))
      .catch(() => res.status(404).send("User not found"));
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
        id: req.params.id
      }
    }).then(() => res.sendStatus(204))
      .catch(err => res.status(404).send(err));
  }

  static async signOut(req, res){
    req.logOut();
    res.status(200).send("Logout successfull");
  }

  static async getAllRatings(req, res){
    models.Rating.findAll({
      attributes: ['userID', 'rating'],
      where: {
        guideID: req.params.id
      }
    }).then(data => res.status(200).json(data))
      .catch(err => res.send(err));
  }

  static async getTotalRating(req, res){
    models.Rating.findAll({
      attributes: ['rating'],
      where: {
        guideID: req.params.id
      }
    }).then(results => res.json({ 
        total: results.reduce(function(prev, cur) {
          return prev + cur.rating;
        }, 0) / results.length
      }))
      .catch(err => res.send(err));
  }

  static async postService(req, res){
    
    const { serviceID, price } = req.body;

    models.Guide_Service.create({
      guideID: req.params.id,
      serviceID: serviceID,
      price: price
    }).then(data => res.json(data))
      .catch(err => res.send(err));
  }

  static async getAllServicesByGuide(req, res){

    models.Guide_Service.findAll({
      attributes: ['guideID','serviceID','price'],
      include: [{
        model: models.Service,
        attributes: ['service_name'],
      }],
      where: {
        guideID: req.params.id
      }
    }).then(data => res.json(data))
      .catch(err => res.send(err));

  }

  static async addKnownLanguage(req, res){

    const { languageID } = req.body;


    models.Guide_Known_Language.create({
      guideID: req.params.id,
      languageID: languageID
    })
    .then(data => res.json(data))
    .catch(err => res.send(err));
  }

  static async getAllKnownLanguages(req, res){

    models.Guide_Known_Language.findAll({
      attributes: ['languageID'],
      include: [{
        model: models.Language,
        attributes: ['language_name','id'],
      }],
      where: {
        guideID: req.params.id
      }

    }).then(data => res.json(data))
      .catch(err => res.send(err));
  }
  
}