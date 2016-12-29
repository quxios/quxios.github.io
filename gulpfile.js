var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: './es6/main.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);
