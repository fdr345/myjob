const fs = require('fs')
const path = require('path')
const mime = require('mime-types')

function route(handle, pathna, resp, requ) {
	let contentType = mime.contentType(path.extname(pathna))

	if (typeof handle[pathna] === 'function') {
		handle[pathna](resp, requ)
	} else {
		resp.writeHead(200, {'Content-Type': contentType})
		fs.readFile('./public/' + pathna, function(err,data) {
			if (err) {
				console.log('fn route: Ooops 404!')
				fs.createReadStream('./public/404.html').pipe(resp)
				return
			}
			resp.end(data)
		})
	}
}

exports.route = route
