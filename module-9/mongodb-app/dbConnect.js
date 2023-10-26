'use strict';
const Mongoose = require('mongoose');
const uri = process.env.DB_URI ||
"mongodb://127.0.0.1:27017/testDatabase";
console.log('env uri: ', process.env.DB_URI);

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};


//connect to mongodb
Mongoose.connect(uri, mongooseOptions)
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log('MongoDB Error: '+error.message));


//Get the default connection
const db = Mongoose.connection;


//Bing connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error"));


exports.Mongoose = Mongoose;