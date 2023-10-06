"use strict";

const Models = require("../models");


const createPosts = async (req, res) => {
    new Models.Post(req.body).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message});
    })
};

const getPosts = async (req, res) => {
    try {
        const post = await Post.find().populate('Likes comment.user');
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



module.exports = {
    createPosts,
    getPosts
};
