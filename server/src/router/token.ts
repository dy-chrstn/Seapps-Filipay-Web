import express from 'express';
import { getToken } from '../controller/token';
import { isAuthorized } from '../middleware/middleware';

export default (router: express.Router) => {
    router.get("/getToken", isAuthorized, getToken);
}