module.exports = function (req, res) {
	try {
		let row = global.db.prepare('select name from categories').all()
		if (!row.length){
			res.send(global.listOfStatus.notExist())
			return null
		}
		row = row.map(el => el.name)
		console.log(row)
		res.send(global.listOfStatus.success(row))
	} catch (e) {
		console.log(`Error on 'router/api/categories/handler/receive/all'  : ${e}`)
	}
}

