import { Router } from 'express';
import serviceController from '../../controllers/serviceController';

const router = Router();

// ROUTE = "/service"

router.get('/', (req,res) => serviceController.getAllServices(req,res));

router.post('/', (req, res) => serviceController.postService(req,res));

router.get('/:id', (req, res) => serviceController.getServiceById(req,res));

router.delete('/:id', (req, res) => serviceController.deleteService(req,res));

export default router;