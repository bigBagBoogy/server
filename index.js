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
