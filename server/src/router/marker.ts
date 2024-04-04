import express from 'express';

import { getMarkers, registerMarker, updateMarkerById, deleteMarker } from '../controller/marker';
import { tokenAuth } from '../middleware/middleware';

export default (router: express.Router) => {
    router.get('/getMarkers/:id', tokenAuth, getMarkers);
    router.post('/registerMarker', tokenAuth, registerMarker);
    router.delete('/deleteMarker/:id', tokenAuth, deleteMarker);
    router.patch('/updateMarkerById/:id', tokenAuth, updateMarkerById);
}