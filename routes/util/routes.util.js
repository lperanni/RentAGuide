import { Router } from 'express';
import mailSender from '../../services/mail-sending-service';

const router = Router();

//ROUTE = '/util'


router.post('/send', (req, res) => mailSender(req.body, res));


export default router;
