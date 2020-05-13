/**
 * Compiles sass to css and minify it.
 */


const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

module.exports = () => {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false,
      grid: true
    }))
    .pipe(gulp.dest('./build/css'));
};
