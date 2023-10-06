const Models = require("../models");


module.exports = {
    userController: require('./userController'),
    postController: require('./postController'),
    likesController: require('./likeController'),
    commentsController: require('./commentsController')
};