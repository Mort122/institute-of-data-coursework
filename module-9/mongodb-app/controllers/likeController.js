const PostModel = require("../models/posts");

const addLike = async (req, res) => {
    const postId = req.params.postId;
    const userId = req.body.userId;  // Get the userId from the request body

    if (!userId) {
        return res.status(400).send({result: 400, message: "UserId is required in the request body."});
    }

    try {
        const post = await PostModel.findById(postId);
        if (!post.likes.includes(userId)) {
            post.likes.push(userId);
            await post.save();
            res.send({result: 200, message: "Liked successfully!"});
        } else {
            res.send({result: 400, message: "User has already liked this post!"});
        }
    } catch (err) {
        console.log(err);
        res.send({result: 500, error: err.message});
    }
};

const removeLike = async (req, res) => {
    const postId = req.params.postId;
    const userId = req.body.userId;  // Get the userId from the request body

    if (!userId) {
        return res.status(400).send({result: 400, message: "UserId is required in the request body."});
    }

    try {
        const post = await PostModel.findById(postId);
        const index = post.likes.indexOf(userId);
        if (index !== -1) {
            post.likes.splice(index, 1);
            await post.save();
            res.send({result: 200, message: "Removed like successfully!"});
        } else {
            res.send({result: 400, message: "User hasn't liked this post!"});
        }
    } catch (err) {
        console.log(err);
        res.send({result: 500, error: err.message});
    }
};

module.exports = {
    addLike,
    removeLike
};
