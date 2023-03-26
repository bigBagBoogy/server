///////////////////////////////////////////
///   THIS IS THE SERVER //////////////////
/// ANYTHING IN HERE WILL NEVER ///////////
/// BE VISIBLE ON THE CLIENT SIDE /////////
/// start it by typing: nodemon index.js //
///////////////////////////////////////////

const express = require('express')

const app = express()
app.listen(3000, () => console.log('listening at 3000'))
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))

app.post('/api', (request, response) => {
    console.log('I got a request!')
    console.log(request.body)
    const data = request.body
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
