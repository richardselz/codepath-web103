import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import businessesData from '../data/businesses.js';
import BusinessesController from '../controllers/businesses.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', BusinessesController.getBusinesses );

router.get('/:businessId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/business.html'))
});

export default router;