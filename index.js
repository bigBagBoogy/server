///////////////////////////////////////////
///   THIS IS THE SERVER //////////////////
/// ANYTHING IN HERE WILL NEVER ///////////
/// BE VISIBLE ON THE CLIENT SIDE /////////
/// start it by typing: nodemon index.js //
///////////////////////////////////////////
const Datastore = require('nedb')
const express = require('express')

const app = express()
app.listen(3000, () => console.log('listening at 3000'))
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))

const database = new Datastore('database.db')
database.loadDatabase()

app.post('/api', (request, response) => {
    console.log('I got a request!')
    const data = request.body
    const timeStamp = Date.now()
    const date = new Date(timeStamp)
    dateFormat = date.getHours() + ':' + date.getMinutes() + ', ' + date.toDateString()
    data.dateFormat = dateFormat
    database.insert(data)
    // console.log(request.body)
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    })
})

// below alternative express server setup***
// const express = require("express")
// const app = express()
// const port = 3000

// app.get("/", (req, res) => {
//     res.send("public")
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
