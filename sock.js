require('dotenv').config()
const express = require('express'),
      socketio = require('socket.io'),  
      app = express(),
      server = app.listen(process.env.SERVER_PORT), 
      io = socketio(server)

io.on('connection', socket => {
    socket.on('socketping', () =>{
        console.log('recived ping ')
        socket.emit('socketpong')
    })
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

