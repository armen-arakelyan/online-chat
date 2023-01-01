const { createServer } = require('http');
const express = require('express');
const app = express();
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors({ origin: '*' }));

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', socket => {
    socket.on('message', sms => io.emit('newMsg', sms))
})

server.listen(8080);
