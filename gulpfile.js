let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");
let browserSync = require("browser-sync").create();

//compile scss to css
function style() {
  //1. where is the sass file
  return (
    gulp
      .src("./app/scss/**/*.scss")
      //2. pass through sass compiler
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer())
      //3. where to save the complied css
      .pipe(gulp.dest("./app/css"))
      //4. stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
  gulp.watch("./app/scss/**/*.scss", style);
  gulp.watch("./app/**/*.html").on("change", browserSync.reload);
  gulp.watch("./app/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
