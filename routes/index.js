const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Bienvenido a DOG API'))

router.post('/dogapi', controllers.createUser);
router.get('/dogapi', controllers.getAllUsers);

module.exports = router;
