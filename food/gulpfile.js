var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');

// var colorRgbaFallback = require('postcss-color-rgba-fallback');
// var colorFunction = require('postcss-color-function');

// var shortColor = require('postcss-short-color');
// var shortcss = require('postcss-short');
var cssnext = require('postcss-cssnext');


var atImport = require('postcss-import');
var mixins = require('postcss-mixins');
var for_loop = require('postcss-for');
var simple_vars = require('postcss-simple-vars');
var css_vars = require('postcss-css-variables');
var each_loop = require('postcss-each');
var conditionals = require('postcss-conditionals');
var calc = require('postcss-calc');
var nested = require('postcss-nested');
var extend = require('postcss-sass-extend');

var lost = require('lost');
var pxtorem = require('postcss-pxtorem');
var styleGuide = require('postcss-style-guide');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function () {
	var processors = [
		atImport,
		mixins,
		for_loop,
		simple_vars({silent: true}),
		css_vars,
		each_loop,
		conditionals,
		calc,
		// colorfunction,
  		// colorRgbaFallback,
		// shortColor,
		// shortcss,
		lost,
	    pxtorem,
	    nested,
		extend,
    	cssnext,
    	cssnano({
			calc: {precision: 2}
		}),
		styleGuide
	];
	return gulp.src('./src/main.css')
		.pipe(sourcemaps.init())
		.pipe(postcss(processors))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css'));
});



// Watch
gulp.task('watch', function() {

	// Watch .scss files
	gulp.watch('./src/*.css', ['css']);


});

gulp.task('default', ['css', 'watch']);