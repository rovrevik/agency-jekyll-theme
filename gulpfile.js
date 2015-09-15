var gulp = require('gulp');
var rename = require("gulp-rename");

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task("bower-files", function() {
  // startbootstrap-agency
  gulp.src('bower_components/startbootstrap-agency/css/agency.css').pipe(gulp.dest('deps/startbootstrap-agency'));
  gulp.src('bower_components/startbootstrap-agency/js/agency.js').pipe(gulp.dest('deps/startbootstrap-agency'));
  gulp.src('bower_components/startbootstrap-agency/js/contact_me.js').pipe(gulp.dest('deps/startbootstrap-agency'));

  // Bootstrap
  gulp.src('bower_components/bootstrap/dist/css/bootstrap.css').pipe(gulp.dest('deps/bootstrap/css'));
  gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('deps/bootstrap/css'));
  gulp.src('bower_components/bootstrap/dist/fonts/*').pipe(gulp.dest('deps/bootstrap/fonts'));
  gulp.src('bower_components/bootstrap/dist/js/bootstrap.js').pipe(gulp.dest('deps/bootstrap/js'));
  gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest('deps/bootstrap/js'));

  // Font Awesome
  gulp.src('bower_components/font-awesome/css/*').pipe(gulp.dest('deps/font-awesome/css'));
  gulp.src('bower_components/font-awesome/fonts/*').pipe(gulp.dest('deps/font-awesome/fonts'));

  // AnimatedHeader
  gulp.src('bower_components/AnimatedHeader/js/cbpAnimatedHeader*.js').pipe(gulp.dest('deps/AnimatedHeader'));
  gulp.src('bower_components/AnimatedHeader/js/classie.js').pipe(gulp.dest('deps/AnimatedHeader'));

  gulp.src('bower_components/jquery-easing-original/jquery.easing.1.3.js').pipe(
    rename('jquery.easing.js')).pipe(gulp.dest('deps/jquery-easing-original'));
  gulp.src('bower_components/jquery-easing-original/jquery.easing.1.3.min.js').pipe(
    rename('jquery.easing.min.js')).pipe(gulp.dest('deps/jquery-easing-original'));

  gulp.src('bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.js').pipe(
    rename('jqBootstrapValidation.js')).pipe(gulp.dest('deps/jqBootstrapValidation'));
  gulp.src('bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.min.js').pipe(
    rename('jqBootstrapValidation.min.js')).pipe(gulp.dest('deps/jqBootstrapValidation'));

  // jquery
  gulp.src('bower_components/jquery/dist/jquery*.js').pipe(gulp.dest('deps/jquery'));
});
