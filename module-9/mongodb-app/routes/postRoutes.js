const express = require('express');
const router = express.Router();
const postController = require('../controllers').postController;
const likesController = require('../controllers').likesController;
const commentsController = require('../controllers').commentsController;

// post routes
router.post('/create', (req, res) => {
    postController.createPosts(req, res);
});

router.get('/posts', (req, res) => {
    postController.getPosts(req, res);
});

// likes routes
router.post('/post/:postId/like', (req, res) => {
    likesController.addLike(req, res);
});

router.post('/post/:postId/unlike', (req, res) => {
    likesController.removeLike(req, res);
});

// comments routes
router.post('/post/:postId/comment', (req, res) => {
    commentsController.addComment(req, res);
});

router.put('/post/:postId/comment/:commentId', (req, res) => {
    commentsController.updateComment(req, res);
});

router.delete('/post/:postId/comment/:commentId', (req, res) => {
    commentsController.deleteComment(req, res);
});

module.exports = router;
