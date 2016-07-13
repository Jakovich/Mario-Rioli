var gulp = require("gulp");

var server = require("browser-sync");

var uglify = require("gulp-uglify");

var rename = require("gulp-rename");

var copy = require("gulp-contrib-copy");

var clean = require("gulp-contrib-clean");

var csso = require("gulp-csso");

gulp.task("minjs", function() {
  gulp.src("./js/main.js")
    .pipe(gulp.dest("build/js/"))
    .pipe(rename("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build/js/"))
});

gulp.task("style", function(){
  gulp.src("css/style.css")
  .pipe(gulp.dest("build/css"))
  .pipe(rename("style.min.css"))
  .pipe(csso())
  .pipe(gulp.dest("build/css"))
  .pipe(server.reload({stream: true}));
});

gulp.task("copyHtml", function() {
  gulp.src("*.html")
  .pipe(copy())
  .pipe(gulp.dest("build"))
  gulp.src("./img/**")
  .pipe(copy())
  .pipe(gulp.dest("build/img"))
});

gulp.task("clean", function () {
  return gulp.src("build", {read: false})
    .pipe(clean());
});

gulp.task("show", function(){
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });
  
  
  gulp.watch("*.html").on("change", server.reload);
  gulp.watch("js/*.js").on("change", server.reload);
  gulp.watch("css/*.css").on("change", server.reload);
  
});

gulp.task("build", ["clean", "copyHtml", "minjs", "style"]);


