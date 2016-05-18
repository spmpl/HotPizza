'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('process-css', function(){
  gulp.src('css/**/*.css')
          .pipe(uncss({
            html: ['index.html']
        }))
  .pipe(gulp.dest('css/'));
	});





gulp.task('watch', function() {
  gulp.watch('sass/*.scss',['sass']);
});

gulp.task('default', ['process-css', 'sass', 'watch']);


