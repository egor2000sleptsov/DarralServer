module.exports = function (req, res) {
	const {id} = req.body
	console.log('byID')
	const stmt = global.db.prepare('delete from positions where id=?')
	const info = stmt.run(id)
	if (info.changes === 1) {
		res.send(global.listOfStatus.success(id))
		return null
	}

	res.send(global.listOfStatus.notSuccess(id))
}
