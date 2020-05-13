/**
 * Copy jQuery and other assets.
 */

const gulp = require('gulp');
const merge = require('merge-stream');

module.exports = () => {
  const copyAssets = gulp.src([
    './src/assets/*/**'
  ], {
    'base': './src'
  })
    .pipe(gulp.dest('build'));
  const copyjQuery = gulp.src([
    './node_modules/jquery/dist/jquery.min.js'
  ])
    .pipe(gulp.dest('build/js/vendor'));

  return merge(copyAssets, copyjQuery);
};
