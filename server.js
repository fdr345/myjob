const http = require('http')
const url = require('url')

function startServer(rou, han) {
	function onRequest(req,res) {
		let pathname = url.parse(req.url).pathname

		rou(han, pathname, res, req)
	}

	http.createServer(onRequest).listen(3001)
	console.log('Server has started on 3001')
}

module.exports.startServer = startServer
