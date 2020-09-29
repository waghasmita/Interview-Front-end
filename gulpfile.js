/**
 * @file
 * Gulp file to call all the gulp related task.
 */
// Available tasks:
// `gulp`
// `gulp watch`

var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('clean', () => {
    return del([
        'css/style.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['styles']));

