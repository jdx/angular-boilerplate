'use strict';
var gulp  = require('gulp')
var jshint = require('gulp-jshint')
var shell = require('gulp-shell')

gulp.task('jshint', function () {
  return gulp.src(['**/*.js', '!node_modules/**', '!assets/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
})

gulp.task('test', ['jshint'], shell.task([
  'node_modules/karma/bin/karma start --single-run',
  'protractor'
]))

