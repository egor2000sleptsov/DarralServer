module.exports = function (req, res) {
	try {
		let row = global.db.prepare('select * from categories').all()
		if (!row.length){
			res.send(global.listOfStatus.notExist())
			return null
		}
		console.log(row)
		res.send(global.listOfStatus.success(row))
	} catch (e) {
		console.log(`Error on 'router/api/categories/handler/receive/all'  : ${e}`)
	}
}

