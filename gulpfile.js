var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var inject = require('gulp-inject');
var series = require('stream-series');
 
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});

gulp.task('deploy', function(){
	return gulp.src("./dist/**/*")
		.pipe(ghPages());
});



gulp.task('index', function(){
	var target = gulp.src("./src/index.html");
	var vendorStream = gulp.src(['./src/assets/*.js'], {read: false});
	var appStream = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});

	 return target.pipe(inject(series(vendorStream, appStream)))
	 	.pipe(gulp.dest('./src'))
});