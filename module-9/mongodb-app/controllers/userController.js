"use strict";
const Models = require("../models"); 

const getUsers = (res) => {
    //finds all users
    Models.User.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message});
        })
}

const createUser = (req, res) => {
    const data = req.body;
    new Models.User(data).save()
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message});
        })
}

const updateUser = (req, res) => {
    const data = req.body; 

    console.log(data)
    Models.User.findByIdAndUpdate(data.id, data, { new: true }) 
        .then(updatedUser => res.send({result: 200, data: updatedUser}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message});
        })
}

module.exports = {
    getUsers, 
    createUser,
    updateUser
}
