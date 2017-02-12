/**
 * Created by Jonathan on 2/10/2017.
 */
var gulp = require('gulp');
var watch = require('./semantic/tasks/watch');
var build = require('./semantic/tasks/build');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.task('watch ui', watch);
	gulp.task('build ui', build);
	gulp.watch(['*.html', '*.css', '*.js']).on('change', reload);
});