var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('start', function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch("app/js/*.js", ['js-watch']);
});

gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(bs.reload({stream: true})); // prompts reload after compilation
});

gulp.task('js', function() {
  return gulp.src('app/js/*js')
    .pipe(browserify())
    .pipe(gulp.dest('dist/js'));
})

gulp.task('js-watch', ['js'], function(done) {
  bs.reload();
  done();
});

gulp.task('watch', ['start'], function() {
  gulp.watch("app/scss/*.scss", ['sass']);
  gulp.watch("*.html").on('change', bs.reload);
});