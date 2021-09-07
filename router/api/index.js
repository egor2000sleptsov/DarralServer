const router = require('router')
const categories = require('./categories')
const positions = require('./positions')

const appRouter = router()

//localhost:5000/api
appRouter.use('/categories', categories)
appRouter.use('/positions', positions)

module.exports = appRouter
