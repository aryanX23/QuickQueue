import express from 'express';

import doctorRoutes from '@/routes/doctorRoutes';
import patientRoutes from '@/routes/patientRoutes';

const router = express.Router();

router.use('/doctor', doctorRoutes);
router.use('/patient', patientRoutes);

export default router;