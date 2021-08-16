const Database = require('better-sqlite3')

const db = new Database('database.sqlite')

module.exports = db
// const row = db.prepare('select * from test where age = ?').all(20)
// console.log(row)

