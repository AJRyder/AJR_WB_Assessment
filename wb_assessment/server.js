const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const json_data = require('./mockData.json');

const PORT = process.env.PORT || 8000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())


app.get('/api', (req, res) => {
    res.json(json_data)
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})