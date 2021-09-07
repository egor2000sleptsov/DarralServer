const byName = require('./byName')

module.exports = function (req, res) {
	const {body} = req
	if (body.subMethod === 'byName') {
		byName(req, res)
		return null
	}

	res.send(global.listOfStatus.InvalidSubMethod(body.subMethod))
}
