import express from 'express';

import DoctorAuthController from '@/controllers/doctorAuthController';

const router = express.Router();

router.get('auth/login', (req, res) => {
  res.send('Doctor login');
});

router.post('/auth/signup', (req, res, next) => DoctorAuthController.signupUsingEmailAndPassword(req, res, next));

router.post('/auth/forgot-password', (req, res) => {
  res.send('Doctor forgot password');
});

router.get('/auth/login-with-google', (req, res) => {
  res.send('Doctor login with Google');
});

router.get('/auth/logout', (req, res) => {
  res.send('Doctor logout');
});

router.get('/dashboard/home-page/details', (req, res) => {
  res.send('Doctor dashboard home page details');
});

router.get('/dashboard/qr-page/details', (req, res) => {
    res.send('Doctor dashboard home page details');
});

router.get('/dashboard/settings-page/details', (req, res) => {
    res.send('Doctor dashboard home page details');
});

export default router;