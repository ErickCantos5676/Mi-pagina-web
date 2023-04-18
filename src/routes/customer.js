const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', (req, res) => {
    res.render('pages/index');
});
router.get('/contacto', (req, res) => {
    res.render('pages/contacto');
});
router.get('/about', (req, res) => {
    res.render('pages/about');
});
router.get('/calculadorajs', (req, res) => {
    res.render('pages/calculadorajs');
});
router.get('/blogLongboard', (req, res) => {
    res.render('pages/blogLongboard');
});
router.get('/carousel', (req, res) => {
    res.render('pages/carousel');
});
router.get('/leds', (req, res) => {
    res.render('pages/leds');
});
router.get('/crud', customerController.list);

router.post('/add', customerController.save);

router.get('/delete/:id', customerController.delete);
module.exports = router;