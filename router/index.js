const router = require('router')
const api = require('./api')

const appRouter = router()

appRouter.use('/api', api)

module.exports = appRouter
