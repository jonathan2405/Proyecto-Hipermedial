const {Router}= require ('express');
const router = Router();

const { getUsers, createUsers, createContac}= require ('../controllers/index.comtroler');
const { createUser } = require('../routes');

router.get('/users', getUsers);
router.post('/users', createUser);
router.post('/users', createContac);

module.exports = router;