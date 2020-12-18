import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import requestLoggerMiddleware from './request.logger.middleware';

const path = require('path');
const shrinkRay = require('shrink-ray-current');

import submissionRouter from './routes/submission';

const app = express();

// compress responses
app.use(shrinkRay());

app.use(cors());
app.use(bodyparser.json());
app.use(requestLoggerMiddleware);

app.use('/submissions', submissionRouter);

if (process.env.NODE_ENV === 'production') {

    // Declare the path to frontend's static assets
    app.use(express.static(path.resolve("..", "frontend", "build")));

    // Intercept requests to return the frontend's static entry point
    app.get("*", (_, response) => {
        response.sendFile(path.resolve("..", "frontend", "build", "index.html"));
    });
}

export default app; 