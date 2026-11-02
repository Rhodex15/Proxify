import express from 'express';
import response from '../controllers/healthController.js';

const router = express.Router();

router.get('/health', response);

export default router;