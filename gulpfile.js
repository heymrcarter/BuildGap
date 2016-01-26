var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');
    
gulp.task('default', ['connect', 'open']);

gulp.task('connect', function () {
    connect.server({
        root: ['./'],
        port: 3000,
        base: 'http://localhost/',
        livereload: true 
    });
});

gulp.task('open', function () {
    gulp
        .src('index.html')
        .pipe(open({uri: 'http://localhost:3000/'})); 
});

gulp.task('sass', function () {
    gulp
        .src('sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('buildgap.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));   
});