'use strict';
var gulp = require('gulp')
var rev  = require('gulp-rev')

var files = [
  'assets/app.css',
  'assets/app.js',
  'assets/angular/angular.min.js',
  'assets/angular-route/angular-route.min.js'
]

gulp.task('rev', ['js', 'css'], function () {
  gulp.src(files)
    .pipe(rev())
    .pipe(gulp.dest('assets'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('assets'))
})
