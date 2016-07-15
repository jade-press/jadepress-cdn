
//local setting
module.exports = {

	port: 8520

	,staticPaths: [

		// "/" root path
		{
			alias: '/'
			,path: __dirname + '/test/root'
		}

		// "/_bc" bower_componenets resource
		,{
			alias: '/_bc'
			,path: __dirname + '/test/bc'
		}

		// "/${theme_static_alias}"
		,{
			alias: '/theme'
			,path: __dirname + '/test/theme-res'
		}

	]


}