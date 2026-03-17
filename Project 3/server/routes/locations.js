import express from 'express'
import LocationsController from '../controllers/locations.js';

const router = express.Router()

router.get('/', LocationsController.getLocations);
// change below to use getLocationById shortly
router.get('/:locationId', LocationsController.getLocations); 
export default router