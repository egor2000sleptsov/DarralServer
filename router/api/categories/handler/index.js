const receive = require('./receive')

module.exports = function (req, res) {
	// res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept")
	// res.setHeader("Access-Control-Allow-Origin", "*")
	const {body} = req

	if (body.method ==='receive'){
		receive(req, res)
		return null
	}

	res.send(global.listOfStatus.InvalidMethod(body.method))
}
