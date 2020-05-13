/**
 * @file
 * Contains gulp tasks for the app.
 *
 * Available Taskss
 * - default
 * - sass
 * - uglify
 * - copy:assets
 * - watch
 */

'use strict';

const gulp = require('gulp');
const sassTask = require('./gulp-tasks/sass.js');
const jsUglifyTask = require('./gulp-tasks/uglify.js');
const copyAssetsTask = require('./gulp-tasks/copy-assets.js');
const watchTask = require('./gulp-tasks/watch.js');

/**
 * Compiles sass
 */
gulp.task('sass', sassTask);

/**
 * Uglify js files
 */
gulp.task('uglify', jsUglifyTask);

/**
 * Copy jQuery source files and other assets
 */
gulp.task('copy:assets', copyAssetsTask);


/**
 * Watches for scss changes and run sass task
 */
gulp.task('watch', watchTask);

/**
 * Runs sass
 */
gulp.task('default', gulp.series('sass', 'uglify', 'copy:assets'));
