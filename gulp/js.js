'use strict';
var gulp       = require('gulp')
var concat     = require('gulp-concat')
var ngAnnotate = require('gulp-ng-annotate')
var plumber    = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')
var uglify     = require('gulp-uglify')

gulp.task('js', function () {
  return gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
})

gulp.task('js:watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js'])
})
