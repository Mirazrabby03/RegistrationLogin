const express = require("express");
const router = express.Router();

//All Controller Path
const userController = require("../controller/user");

//Api

router.post('/registers', userController.RegistrationPostController);
router.get('/registers', userController.RegistrationGetController);
router.get('/login', userController.LoginPostController);

module.exports = router;