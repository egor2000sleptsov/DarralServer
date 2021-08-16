module.exports = function (req, res) {
	try {
		const row = global.db.prepare('select name from categories').all()
		if (!row.length){
			res.send(global.listOfStatus.notExist())
			return null
		}
		res.send(global.listOfStatus.success(row))
	} catch (e) {
		console.log(`Error on 'router/api/categories/handler/receive/all'  : ${e}`)
	}
}

