/*!
 * TEST SERVER
**/


var
koa = require('koa')
,serve = require('koa-static')
,compress = require('koa-compress')
,oneYear = 1000 * 60 * 60 * 24 * 365
,config = require('./config')
,port = config.port
,mount = require('koa-mount')
,app = koa()

//static files
app.use(function*(next) {
	this.set('Access-Control-Allow-Origin', '*')
	yield next
})

app.use(compress({
	threshold: 2048
	,flush: require('zlib').Z_SYNC_FLUSH
}))

for(let i = 0, len = config.staticPaths.length;i < len;i ++) {
	let obj = config.staticPaths[i]
	app.use(mount(obj.alias, serve(obj.path, {
		maxAge: oneYear
	})))
}

//start
app.listen(port, function() {
	console.log(new Date() + '', 'jadepress-cdn runs on port', port)
})


