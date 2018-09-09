const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const ejs = require('ejs')
const url = require('url')

function goApp2(res) {
	console.log('goApp2 lanch\n')

	fs.readdir('./pubb/', function(err,list) {
		if (err) {throw err};

		let obj = list.map(book)
		let ret = rend('bd4.ejs', {obj})

		res.writeHead(200, {'Content-Type': 'text/html'})
		res.end(ret)
	})
}

function toPage(res,req) {
	console.log('Go5 began')

	let coord = url.parse(req.url).pathname
	let pathname = coord + '.html'

	let obj = book(pathname)
	let ret = rend('endd.ejs', {obj})

	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end(ret)
}

function rend(pt,dt) {
	let path1 = path.join('views', pt)

	let ret1 = ejs.compile(fs.readFileSync(path1, 'utf8'), {
		filename: path1
	})(dt)

	return ret1
}

function book(file) {
	let pathname = '/' + path.basename(file,'.html')
	
	let obj = {}
	obj.path = pathname

	let text = fs.readFileSync('./pubb/' + file)
	let $ = cheerio.load(text, { decodeEntities: false })

	let body = $('body').html()
	fs.writeFileSync('./views/onvi.ejs', body)

	obj.title1 = $('h1').first().text() || $('._zz1').text()
	obj.author1 = $('h2').first().text() || $('._zz2').text()

	return obj
}

exports.goApp1 = goApp2
exports.toPage = toPage