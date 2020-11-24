const express = require('express')
const app = express()
const port = 3002
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyparser.json())
app.use('/api', (req, res) => {
    res.json({username : "minhoo"})
})

app.listen(port, () => {
    console.log(`Open Server! -> http://localhost:3002`)
})