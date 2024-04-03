import express from 'express';

import { getMarkers, registerMarker, updateMarkerById, deleteMarker } from '../controller/marker';
export default (router: express.Router) => {
    router.get('/getMarkers/:id', getMarkers);
    router.post('/registerMarker', registerMarker);
    router.delete('/deleteMarker/:id', deleteMarker);
    router.patch('/updateMarkerById/:id', updateMarkerById);
}