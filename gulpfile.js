//Automation for devs
//Uses Gulp

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
var uglifyjs = require('gulp-uglify');
var rjs = require('requirejs')


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Uglify CSS
gulp.task('uglifycss', function () {
    return gulp.src(
        [
            'src/css/styles.css',
            'src/css/bootstrap.css'
        ])
        .pipe(concat('styles.min.css'))
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
})


// Move the javascript files into our /src/js folder - Not used at the moment
gulp.task('js', function () {
    return gulp.src(
        [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'src/js/libs/papaparse.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglifyjs())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', 'uglifycss', function () {
    browserSync.init({
        server: "./",
        notify: false
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.series('sass'));
    gulp.watch(['src/css/*.css'], gulp.series('uglifycss'));
    gulp.watch("/*.html").on('change', browserSync.reload);
}));


gulp.task('default', gulp.series('js', 'serve'));
