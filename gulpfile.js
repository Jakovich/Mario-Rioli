var gulp = require("gulp");

var server = require("browser-sync");

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


