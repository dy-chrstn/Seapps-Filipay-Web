import express from 'express';
import marker from './marker';

const router = express.Router();

export default (): express.Router => {
    marker(router);

    return router;
};

