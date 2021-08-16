const express = require('express')
const db = require('./db')
const router = require('./router')
const listOfStatus = require('./listOfStatus')

const port = process.env.PORT || 5000
const app = express()

app.use(express.urlencoded())
app.use(express.json())

//Router
app.use(router)

global.db = db
global.listOfStatus = listOfStatus

app.listen(port, err => {
	if (err)
		return console.log(`Error: ${err}`)

	console.log(`Server has been started on ${port} port`)
})
