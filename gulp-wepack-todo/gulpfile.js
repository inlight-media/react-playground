var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var	webpackConfig = require('./webpack.config.js');
var WebpackDevServerConfig = {
		hot: true, // enables live reload
    contentBase: 'dist',
		// Set this as true if you want to access dev server from arbitrary url.
		// This is handy if you are using a html5 router.
		historyApiFallback: false
};
var host = 'localhost';
var port = 5000;

gulp.task('default', [], function() {
	gulp.start(['webpack-dev-server']);
});

gulp.task('webpack-dev-server', function() {
  new WebpackDevServer(
		webpack(webpackConfig),
		WebpackDevServerConfig
	).listen(port, host, function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }

    gutil.log('[webpack-dev-server]', 'http://localhost:5000/webpack-dev-server/');
  });
});
