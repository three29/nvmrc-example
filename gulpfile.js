const gulp = require('gulp');
gulp.task('js', () => {
  return gulp.src('./src/index.js')
    .pipe(gulp.dest('./dest/index.js'));
});

gulp.task('default', function(callback) {
    gulp.watch('**/skin/js/custom.js', ['js']);
});

