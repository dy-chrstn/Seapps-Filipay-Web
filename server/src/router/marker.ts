import express from 'express';

import { getMarkers, registerMarker } from '../controller/marker';

export default (router: express.Router) => {
    router.get('/getMarkers', getMarkers);
    router.post('/registerMarker', registerMarker);

    return router;
}