import express from 'express';
import marker from './marker';
import user from './user';
import token from './token';

const router = express.Router();

export default (): express.Router => {
    marker(router);
    user(router);
    token(router);

    return router;
};

