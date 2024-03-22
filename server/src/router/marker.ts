import express from 'express';

import { getMarkers, registerMarker, deleteMarker } from '../controller/marker';

export default (router: express.Router) => {
    router.get('/getMarkers', getMarkers);
    router.post('/registerMarker', registerMarker);
    router.delete('/deleteMarker/:id', deleteMarker);

    return router;
}