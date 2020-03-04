require('dotenv').config()
const express = require('express'),
      redis = require('redis'),
      app = express(),
      redisClient = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST),
      publishClient = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST)

redisClient.on('message', (channel, message) =>{
    console.log(`message emited : ${message}`)
})

redisClient.subscribe('REQUESTS')

app.get('/', (req, res) => {
    publishClient.publish('REQUESTS', `requests on ${process.env.REDIS_PORT} 
                                            for ${process.env.REDIS_HOST}`)
    console.log(`local log for ${process.env.SERVER_PORT}`)
})

app.listen(process.env.SERVER_PORT)