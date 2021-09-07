const receive = require('./receive')
const create = require('./create')
const Delete = require('./delete')

module.exports = function (req, res) {
	res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept")
	res.setHeader("Access-Control-Allow-Origin", "*")
	const {body} = req
	console.log(`Есть запрос по позициям ${body.method} ${body.subMethod}`)
	if (body.method === 'receive') {
		receive(req, res)
		return null
	} else if (body.method === 'create') {
		create(req, res)
		return null
	} else if (body.method === 'delete') {
		Delete(req, res)
		return null
	}

	res.send(global.listOfStatus.InvalidMethod(body.method))
}
