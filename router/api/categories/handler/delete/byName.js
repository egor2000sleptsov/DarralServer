module.exports = function (req, res) {
	try {
		const {body} = req
		if (body.name) {
			const stmt = global.db.prepare('delete from categories where name=?')
			const info = stmt.run(body.name)
			if (info.changes === 1) {
				res.send(global.listOfStatus.success())
			}
			res.send(global.listOfStatus.notExist())
			return null
		}

		res.send(global.listOfStatus.notSuccess(body))
	} catch (e) {
		console.log(e)
	}
}
