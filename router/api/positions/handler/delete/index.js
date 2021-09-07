const byID = require('./ByID')

module.exports = function (req, res) {
	const {body} = req
	console.log(body)
	if (body.subMethod === 'byID') {
		byID(req, res)
		return null
	}

	res.send(global.listOfStatus.InvalidSubMethod(body.body))
}
