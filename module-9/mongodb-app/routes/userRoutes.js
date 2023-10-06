let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); 

// get all users
router.get('/', (req, res) => {
    Controllers.userController.getUsers(req, res);
})

// create a new user
router.post('/create', (req, res) => {
    Controllers.userController.createUser(req, res);
})

module.exports = router;
