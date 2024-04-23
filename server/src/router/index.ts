import express from 'express';
import marker from './marker';
import token from './token';
import coop from './coop';
import transaction from './transaction';
import routes from './routes';

const router = express.Router();

export default (): express.Router => {
    marker(router);
    token(router);
    coop(router);
    transaction(router);
    routes(router);

    return router;
};

