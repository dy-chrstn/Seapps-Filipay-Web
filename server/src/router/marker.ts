import express from 'express';

import { getMarkers, registerMarker, updateMarkerById, deleteMarker } from '../controller/marker';
import {updateMarkerPos} from '../controller/updateMarkerPos'
export default (router: express.Router) => {
    router.get('/getMarkers', getMarkers);
    router.post('/registerMarker', registerMarker);
    router.delete('/deleteMarker/:id', deleteMarker);
    router.patch('/updateMarkerById/:id', updateMarkerById);
    router.put('/updateMarkerPosition/:id', updateMarkerPos);

    return router;
}