// Pick a random port between 3001-4000
var port = Math.floor(Math.random() * 1000) + 3001
browser.params.baseUrl = 'http://localhost:' + port
process.env.PORT = port
process.env.LOG_LEVEL = 'warn'
require('../../server')
