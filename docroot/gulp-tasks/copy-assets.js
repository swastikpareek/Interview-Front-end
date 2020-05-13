/**
 * Copy jQuery and other assets.
 */

const gulp = require('gulp');

module.exports = () => {
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./build/vendor'))
    .pipe(gulp.src('./src/assets/fonts/*'))
    .pipe(gulp.dest('./build/assets/fonts'))
    .pipe(gulp.src('./src/assets/images/*'))
    .pipe(gulp.dest('./build/assets/images'));
};
