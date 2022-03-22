'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

// Load plugins
var $ = require('gulp-load-plugins')();

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        style: 'build/css/',
        cssmin: 'build/css/min/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        video: 'build/video/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        style: 'src/css/*.scss',
        css: 'src/css/**/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        video: 'src/video/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

gulp.task('styles', function() {
    return gulp.src(path.src.style)
        .pipe($.sass({
            paths: ['bower_components']
        }))
        .pipe($.autoprefixer())
        .pipe(gulp.dest(path.build.style))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('views', function(){
    return gulp.src(path.src.html)
        .pipe($.rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('images', function() {
    return gulp.src(path.src.img)
        .pipe($.imagemin({
            svgoPlugins: [{
                convertPathData: false
            }]
        }))
        .pipe(gulp.dest(path.build.img));
});
gulp.task('scripts', function() {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js));
});
gulp.task('css', function() {
    gulp.src(path.src.css)
        .pipe(gulp.dest(path.build.style));
});
gulp.task('video', function () {
    gulp.src(path.src.video)
        .pipe(gulp.dest(path.build.video));
});
gulp.task('fonts', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './build'
        }
    });
});


gulp.task('watch', ['build'], function() {
    gulp.watch(path.watch.style, ['styles']);
    gulp.watch(path.watch.img, ['images']);
    gulp.watch(path.watch.html, ['views']);
    gulp.watch(path.watch.js, ['scripts']);

    gulp.start('browser-sync');
});


gulp.task('clean', function(cb) {
    var del = require('del');
    del(['build'], cb);
});


gulp.task('build', ['styles', 'views', 'images', 'scripts', 'fonts', 'css', 'video']);


gulp.task('default', ['clean'], function() {
    gulp.start('watch');
});
