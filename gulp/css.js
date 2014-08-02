var gulp       = require('gulp')
var less       = require('gulp-less')
var sourcemaps = require('gulp-sourcemaps')
var plumber    = require('gulp-plumber')

gulp.task('css', function () {
  return gulp.src('css/app.less')
    .pipe(sourcemaps.init())
      .pipe(plumber()) // prevents compilation errors from killing gulp
      .pipe(less({
        paths: ['assets']
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
})

gulp.task('css:watch', ['css'], function () {
  gulp.watch('css/**/*.less', ['css'])
})
