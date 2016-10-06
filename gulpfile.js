var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
//var moduleImporter = require('sass-module-importer');

// Gotta start somewhere...
// TODO: plumber (or similar) errors to
// keep things moving
gulp.task('sass', function() {
    gulp.src('ui-assets/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            includePaths: [
                require('bourbon').includePaths[0],
                './node_modules/susy/sass',
                './node_modules/normalize.css/normalize.css'
            ]
            //importer: moduleImporter()
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
})

gulp.task('watch', ['sass'], function () {
    gulp.watch('ui-assets/scss/**/*.scss', ['sass'])
});
