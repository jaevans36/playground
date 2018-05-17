var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('start', function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});