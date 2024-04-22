import express from 'express';
import marker from './marker';
import token from './token';
import coop from './coop';
import transaction from './transaction';

const router = express.Router();

export default (): express.Router => {
    marker(router);
    token(router);
    coop(router);
    transaction(router);

    return router;
};

