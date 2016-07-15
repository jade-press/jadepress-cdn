
//local setting
module.exports = {

	port: 8520

	,staticPaths: [

		// "/" root path
		{
			alias: '/'
			,path: 'path/to/jade-press/public'
		}

		// "/_bc" bower_componenets resource
		,{
			alias: '/_bc'
			,path: 'path/to/bower_componenets'
		}

		// "/${theme_static_alias}"
		,{
			alias: '/your-theme_static_alias'
			,path: 'path/to/your-theme-path/pubic'
		}

	]


}