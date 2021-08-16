const router = require('router')
const handler = require('./handler')
const appRouter = router()

//localhost:5000/api/categories
appRouter.use('/', handler)

module.exports = appRouter
