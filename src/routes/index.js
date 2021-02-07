const { Router} = require ('express');
const router = Router ();


const {getUsers} = require('../controllers/index.controllers')
router.get('/users',getUsers);
/*
router.get('/users',(req, res)=> {
    res.send('users');
})
*/

module.exports = router;

