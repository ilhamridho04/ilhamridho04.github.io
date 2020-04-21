const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass'); 
 
gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});
// compile sass file into css
gulp.task('sass', () => { 
    return gulp.public(['node_modules/bootstrap/scss/bootstrap.scss','public/lib/bootstrap/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('public/lib/bootstrap/scss'))
    .pipe(browserSync.stream());
})

gulp.task('js', () => { 
     return gulp.public(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/@popperjs/core/dist/umd/popper.min.js'])
     .pipe(gulp.dest('public/js'))
     .pipe(gulp.dest('public/lib/bootstrap/dist/js/bootstrap.min.js'))
     .pipe(gulp.dest('public/lib/jquery/dist/jquery.min.js'))
     .pipe(gulp.dest('public/lib/popper/popper.min.js'))
     .pipe(browserSync.stream());
})

// create server and wathcing file 
gulp.task('serve', gulp.series('sass', () => {
    browserSync.init({
        server: './public',
    });
    gulp.watch('public/lib/**/*.scss', gulp.series('sass')); 
    gulp.watch('public/*.html').on('change', browserSync.reload);
    gulp.watch('blog/*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve')); 