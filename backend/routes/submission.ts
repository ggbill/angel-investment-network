import { Request, Response } from 'express';
import { SubmissionController } from '../controllers/submission.controller';

const router = require('express').Router();

router.post('/', async (request: Request, response: Response) => {
    try {
        const result = await SubmissionController.CreateLead(request.body);
        response.json(result);
        response.end();
    }catch (err){
        response.status(500);
        response.end;
        console.error("Error: ", err)
    }
});

export default router;