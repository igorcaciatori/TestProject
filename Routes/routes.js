const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/UserController');

router.post('/createUser', UserController.createUser);
router.get('/user/:name', UserController.selectOneUser);
router.get('/users', UserController.selectAllUsers);
router.put('/updateUser/:id', UserController.updateUser);
router.delete('/deleteUser/:id', UserController.deleteUser);

module.exports = router;