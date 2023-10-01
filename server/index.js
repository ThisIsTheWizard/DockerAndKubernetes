const express = require('express')

const app = express()

const port = process.env.PORT || 8080

app.get('/users', (req, res) => {
    res.status(200).json([{id: 1, name: 'Elias Shekh'}, {id: 2, name: 'Shekh Elias'}])
})

app.use((req, res) => {
    res.status(200).json({message: 'Welcome to the world!'})
})


app.listen(port, () => console.log(`====> Listening on http://localhost:${port} <====`))