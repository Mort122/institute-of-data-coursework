const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

let usersOnline = [];


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    io.emit('message', 'a user connected');

    socket.on('disconnect', () => {
        io.emit('message', 'a user disconnected');
        io.emit('users online', usersOnline);
    });

    socket.on('chat message', (data) => {
        const badWords = ['shit', 'fuck', 'damn'];

        const censorMessage = (message) => {
            badWords.forEach(badWord => {
                const regex = new RegExp(badWord.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'ig');
                message = message.replace(regex, '****');
            });
            return message;
        }

        data.message = censorMessage(data.message);
        socket.broadcast.emit('message', `${data.name}: ${data.message}`); // Moved inside the 'chat message' listener
    });

    socket.on('typing', (name) => {
        socket.broadcast.emit('typing', { name });
    });

    socket.on('online', (name) => {
        socket.name = name;
        if (!usersOnline.includes(name)) {
            usersOnline.push(name);
        }
        io.emit('users online', usersOnline);
    });
});




server.listen(7000, () => {
    console.log('listening on *:7000');
});


