import express from 'express';

const router = express.Router();

router.get('auth/login', (req, res) => {
  res.send('Patient login');
});

router.post('auth/signup', (req, res) => {
  res.send('Patient signup');
});

router.post('/auth/forgot-password', (req, res) => {
  res.send('Patient forgot password');
});

router.get('/auth/login-with-google', (req, res) => {
  res.send('Patient login with Google');
});

router.get('/auth/logout', (req, res) => {
  res.send('Patient logout');
});

router.get('/dashboard/home-page/details', (req, res) => {
  res.send('Patient dashboard home page details');
});

router.get('/dashboard/settings-page/details', (req, res) => {
    res.send('Patient dashboard home page details');
});

export default router;