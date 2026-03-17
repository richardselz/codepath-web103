import express from 'express'
import EventsController from '../controllers/events.js';

const router = express.Router()

router.get('/', EventsController.getEvents);
// change below to use getEventById shortly
router.get('/:eventId', GiftsController.getEvents); 
export default router