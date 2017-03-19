const gulp = require('gulp');
const pug = require('gulp-pug');
const moment = require('moment');

gulp.task('default', () => {
  gulp.src('pug/**/*.pug')
  .pipe(pug({
    locals: {moment: moment},
    pretty: true
  }))
  .pipe(gulp.dest('dist'));
});
