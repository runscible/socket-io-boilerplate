const express = require('express'),
      redis = require('redis')

require('dotenv').config()


const app = express(),
      redisClient = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST)
redisClient.set('REDIS_KEY', '0')

app.get('/', (req, res) => {
    redisClient.incr('REDIS_KEY')
    redisClient.get('REDIS_KEY', (err, reply) => {
        res.send(`valor del counter de redis ${reply}`)
        // res.end()
    })
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server listening on ${process.env.SERVER_PORT}`)
})