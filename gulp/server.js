var gulp = require('gulp')

gulp.task('server', function () {
  require(__dirname + '/../boot')
})

gulp.task('server:test', function () {
  process.env.PORT = 3001
  require(__dirname + '/../boot')
})
