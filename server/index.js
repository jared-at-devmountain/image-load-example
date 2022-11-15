const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload())
app.use('/client', express.static(path.join(__dirname, '../client')))

app.post('/submit', (req, res) => {
    let file = req.files.imageFile

    //save file to db here:
    console.log(file)

    res.send('image processed')
})

app.listen(4000, () => {console.log('running on 4000')})