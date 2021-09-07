module.exports = function (req, res) {
	try {
		const row = global.db.prepare(`
        select p.id, c.name as 'category', p.name, p.desc, p.price, p.weight
        from positions p
                 inner join categories c on c.id = p.category_id
		`).all()
		if (!row.length) {
			res.send(global.listOfStatus.notExist())
			return null
		}
		res.send(global.listOfStatus.success(row))
	} catch (e) {
		console.log(e)
	}
}
