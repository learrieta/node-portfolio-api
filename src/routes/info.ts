import express from 'express';

import { getFunInfo, getInfo } from '../controllers/info';

const router = express.Router();

router.get('/', getInfo)

router.get('/applicant', getFunInfo)



export default router;