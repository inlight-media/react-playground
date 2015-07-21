var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var vars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var autoprefixer = require('autoprefixer');
var _ = require('lodash');

// React Hot Reloading
// ===================
// To enable live reloading, we're using React Hot Loader
// along with webpacks hot loading. The key requirements
// are the two lines above the entry script, the
// HotModuleReplacementPlugin and the 'hot' option in the
// webpack dev server. Also the react-hot loader needs to
// be applied in the 'loaders' config.

module.exports = {
	// cache: true,
	entry: [
		'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	output: {
		filename: 'index.js',
		path: path.resolve('./dist')
	},
	module: {
		// Loaders are transformations that can be applied to
		// certain files using a regex pattern. It replaces
		// the need for gulp task. Here we're using ones for
		// jsx compilation (see React docs) and to faciliate
		// are react-hot-loader for live reloading
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
				)
			},
			{
				include: path.join(__dirname, 'src'),
				test: /\.js$/,
				loader: 'react-hot!babel'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader?name=img/[name].[ext]'
			},
			{
				test: /\.(eot|svg|ttf|woff)$/,
				loader: 'file-loader?name=font/[name].[ext]'
			}
		]
	},
	postcss: [
		vars({
			variables: function () {
				var colors = require('./src/config/colors');
				var theme = require('./src/config/theme');
				var nav = require('./src/config/nav');

				return _.assign(colors, theme, nav);
			}
		}),
		nested(),
		autoprefixer()
	],
	resolve: {
		modulesDirectories: ['node_modules', 'components', 'views']
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'App Foundation'
		}),
		new ExtractTextPlugin('style.css', { allChunks: true }),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
