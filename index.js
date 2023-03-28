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

app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end()
            return
        }
        response.send(data)
    })
})

app.post('/api', (request, response) => {
    const data = request.body
    const timestamp = Date.now()
    data.timestamp = timestamp
    database.insert(data)
    response.json(data)
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
