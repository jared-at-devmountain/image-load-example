const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')

const app = express()

app.use(express.json())
app.use(fileUpload())
app.use('/client', express.static(path.join(__dirname, '../client')))

app.post('/submit', (req, res) => {
    let file = req.files
    console.log(file)
    res.send('looks good')
})

app.listen(4000)