require('dotenv').config()      
const express = require('express'),
      app = express()
      
app.get('/hello/name/:name', (req, res) => {
    res.send(`hola ${req.params.name}`)
})      

app.listen(process.env.SERVER_PORT, ()=> {
    console.log(`listening on ${process.env.SERVER_PORT}`)
})