import { Router } from 'express';
import locationController from '../../controllers/locationController';

const router = Router();

//Route = '/location'

router.get("/", (req, res) => locationController.getAllLocations(req, res));
router.get("/:id", (req, res) => locationController.getLocationById(req,res));


export default router;