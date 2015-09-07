var gulp = require('gulp');
var rename = require("gulp-rename");

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task("bower-files", function() {
  // startbootstrap-agency
  gulp.src('bower_components/startbootstrap-agency/css/agency.css').pipe(gulp.dest('css'));
  gulp.src('bower_components/startbootstrap-agency/js/agency.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/startbootstrap-agency/js/contact_me.js').pipe(gulp.dest('js'));

  // Bootstrap
  gulp.src('bower_components/bootstrap/dist/css/bootstrap.css').pipe(gulp.dest('css'));
  gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('css'));
  gulp.src('bower_components/bootstrap/dist/js/bootstrap.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest('js'));

  // Font Awesome
  gulp.src('bower_components/font-awesome/css/*').pipe(gulp.dest('css/font-awesome/css'));
  gulp.src('bower_components/font-awesome/fonts/*').pipe(gulp.dest('css/font-awesome/fonts'));

  // AnimatedHeader
  gulp.src('bower_components/AnimatedHeader/js/cbpAnimatedHeader*.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/AnimatedHeader/js/classie.js').pipe(gulp.dest('js'));

  gulp.src('bower_components/jquery-easing-original/jquery.easing.1.3.js').pipe(
    rename('jquery.easing.js')).pipe(gulp.dest('js'));
  gulp.src('bower_components/jquery-easing-original/jquery.easing.1.3.min.js').pipe(
    rename('jquery.easing.min.js')).pipe(gulp.dest('js'));

  gulp.src('bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.js').pipe(
    rename('jqBootstrapValidation.js')).pipe(gulp.dest('js'));
  gulp.src('bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.min.js').pipe(
    rename('jqBootstrapValidation.min.js')).pipe(gulp.dest('js'));

  // jquery
  gulp.src('bower_components/jquery/dist/jquery*.js').pipe(gulp.dest('js'));
});
