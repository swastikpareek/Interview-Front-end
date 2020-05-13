/**
 * Contains watches for JS and SASS files.
 */

const gulp = require('gulp');

module.exports = () => {
  gulp.watch('./src/js/*.js', gulp.series('uglify'));
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
};
