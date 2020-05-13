/**
 * Copy custom js files and uglify it.
 */


const gulp = require('gulp');
const uglify = require('gulp-uglify');
const { pipeline } = require('readable-stream');

module.exports = () => {
  return pipeline(
    gulp.src('./src/js/*.js'),
    uglify(),
    gulp.dest('./build/js')
  );
};
