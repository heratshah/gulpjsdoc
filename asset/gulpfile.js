var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('copy', function() {
    return gulp.src('static/js/*.js')
        .pipe(gulp.dest('des/js'));
});
gulp.task('sass', function() {
    return gulp.src('./static/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('des/css'));
});

gulp.task('minify', async function() {
    return gulp.src('./static/**/app.js')
        .pipe(uglify().on('error', sass.logError))
        .pipe(gulp.dest('des/js'));
});