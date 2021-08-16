const router = require('router')
const categories = require('./categories')

const appRouter = router()

//localhost:5000/api
appRouter.use('/categories', categories)

module.exports = appRouter
