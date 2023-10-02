const express = require('express')

const app = express()

const userRouter = require('./modules/user/user.router')

app.use('/users', userRouter)

app.use((req, res) => {
    res.status(200).json({message: 'Welcome to the world!'})
})

module.exports = app
