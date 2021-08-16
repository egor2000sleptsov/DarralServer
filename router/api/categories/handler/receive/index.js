const all = require('./all')

module.exports = function (req, res){
	const {body} = req

	if (body.subMethod === 'all'){
		all(req, res)
		return null
	}

	res.send(global.listOfStatus.InvalidSubMethod(body.subMethod))
}
