const {src, dest, series} = require('gulp');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

var sass = require("gulp-sass")(require('sass'));

function streamHtml(){
    return src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest('dest'));
}
function streamSass(){
    return src('css/style.sass')
    .pipe(
        sass({
            outputStyle: "compressed"
        }).on('error', sass.logError)
    )
    .pipe(dest('dest/css'));
}
function copyImages(){
    return src('images/*.png')
    .pipe(dest('dest/images'));
}
exports.groupMethod = series(streamHtml,streamSass,copyImages);