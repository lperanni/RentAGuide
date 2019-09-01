import { Router } from 'express';
import models from '../../models';

const router = Router();

//ROUTE = "/language"

router.get("/", (req, res) => {
    models.Language.findAll({
        attributes: ['id', 'language_name']
    }).then(data => res.json(data))
      .catch(err => res.send(err));
})

export default router;