'use strict';
var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('test', shell.task([
  'karma start --single-run',
  'protractor'
]))

