module.exports = function (req, res) {
	try {
		const {data} = req.body
		if (data.name) {
			const stmt = global.db.prepare(`insert into categories (name) values (?)`)
			const info = stmt.run(data.name)
			if (info.changes === 1){
				res.send(global.listOfStatus.success())
				return null
			}
			res.send(global.listOfStatus.notSuccess(data))
			return null
		}

		res.send(global.listOfStatus.notSuccess(data))
	}catch (e) {
		console.log(e)
	}
}
