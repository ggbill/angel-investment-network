import { Request, Response } from 'express';
import { EmailController } from '../controllers/email.controller';

const router = require('express').Router();

router.post('/', async (request: Request, response: Response) => {
    try {
        const result = await EmailController.SendEmail(request.body);
        response.json(result);
        response.end();
    }catch (err){
        response.status(500);
        response.end;
        console.error("Error: ", err)
    }
});

export default router;