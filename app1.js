const fs = require('fs')
const path = require('path')

const server = require('./server')
const router = require('./router')
const reqHandlers = require('./reqHandlers')

const handle = {}

handle['/'] = reqHandlers.goApp1

fs.readdir('./pubb/', function(err, list) {
	if (err) {throw err}

	list.map(function(item) {
		let name = path.basename(item, '.html')
		let pathname = '/' + name

		handle[pathname] = reqHandlers.toPage
	})
})

server.startServer(router.route, handle)