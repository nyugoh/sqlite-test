module.exports = {
	entry: './index.js',
	output: {
		filename: './bundle.js'
	},
	watch: true,
	module: {
		loaders: [
			{
				test: '/\.js$/',
				exclude: '/node_modules/',
				loader: 'babel',
				query: {
					preset: ['es2015']
				}
			}
		]
	}
}