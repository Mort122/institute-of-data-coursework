const PostModel = require("../models/posts"); 

const addComment = async (req, res) => {
    const postId = req.params.postId;
    const userId = req.body.userId; // Take user ID from the request body
    const commentText = req.body.commentText; // Assuming you have a comment text in the request body

    if (!userId || !commentText) {
        return res.status(400).send({result: 400, message: "UserId and commentText are required in the request body."});
    }

    try {
        const post = await PostModel.findById(postId);
        
        if (!post) {
            return res.status(404).send({result: 404, message: "Post not found."});
        }

        const newComment = {
            userId: userId,
            text: commentText,
            // ... any other comment-related fields
        };

        post.comments.push(newComment); // Assuming `comments` is an array in your PostModel
        await post.save();
        res.send({result: 200, message: "Comment added successfully!"});

    } catch (err) {
        console.log(err);
        res.send({result: 500, error: err.message});
    }
};


const updateComment = async (req, res) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const { text } = req.body;

    try {
        const post = await PostModel.findById(postId);
        const comment = post.comments.id(commentId);
        if(comment && comment.user.toString() === req.user._id.toString()) {
            comment.text = text;
            await post.save();
            res.send({result: 200, message: "Comment updated successfully!"});
        } else {
            res.send({result: 400, message: "Comment not found or unauthorized!"});
        }
    } catch (err) {
        console.log(err);
        res.send({result: 500, error: err.message});
    }
};

const deleteComment = async (req, res) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;

    try {
        const post = await PostModel.findById(postId);
        const comment = post.comments.id(commentId);
        if(comment && comment.user.toString() === req.user._id.toString()) {
            comment.remove();
            await post.save();
            res.send({result: 200, message: "Comment deleted successfully!"});
        } else {
            res.send({result: 400, message: "Comment not found or unauthorized!"});
        }
    } catch (err) {
        console.log(err);
        res.send({result: 500, error: err.message});
    }
};

module.exports = {
    addComment,
    updateComment,
    deleteComment
};
