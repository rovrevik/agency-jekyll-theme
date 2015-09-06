var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task("bower-files", function() {
  gulp.src('bower_components/startbootstrap-agency/css/agency.css').pipe(gulp.dest('_includes/css'));
  gulp.src('bower_components/bootswatch/darkly/bootstrap.min.css').pipe(gulp.dest('_includes/css'));
  gulp.src('bower_components/font-awesome/css').pipe(gulp.dest('css/font-awesome/css'));
  gulp.src('bower_components/font-awesome/fonts').pipe(gulp.dest('css/font-awesome/fonts'));
  gulp.src('bower_components/startbootstrap-agency/js/agency.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/bootstrap/js/bootstrap.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/bootstrap/js/bootstrap.min.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/AnimatedHeader/js/cbpAnimatedHeader.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/AnimatedHeader/js/cbpAnimatedHeader.min.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/AnimatedHeader/js/classie.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/jqBootstrapValidation/jqBootstrapValidation.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/jquery-easing-original/jquery.easing.min.js').pipe(gulp.dest('js'));
  gulp.src('bower_components/jquery/dist/jquery.min.js').pipe(gulp.dest('js'));
});
