const gulp = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

const styles = () => gulp.src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest("./dist/css"));

const jsMin = () => gulp.src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/scripts"));


const images = () => gulp.src("./src/images")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));


exports.default = gulp.parallel(styles, images, jsMin)
exports.watch = () => {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
    gulp.watch("./src/scripts/*.js", gulp.parallel(uglify))
}