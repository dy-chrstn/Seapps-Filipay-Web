import express from 'express';
import marker from './marker';
import user from './user';

const router = express.Router();

export default (): express.Router => {
    marker(router);
    user(router);

    return router;
};

