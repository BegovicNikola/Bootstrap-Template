const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
gulp.task('scss', () => {
    gulp.src('scss/style.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            outFile: 'style.min.css'
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('fonts', () => {
    gulp.src('node_modules/font-awesome/fonts/*').pipe(gulp.dest('dist/fonts/'));
});
gulp.task('js-concat', () => {
    gulp.src([  'node_modules/popper.js/dist/umd/popper.js',
                'node_modules/jquery/dist/jquery.js', 
                'node_modules/bootstrap/dist/js/bootstrap.js',
                'node_modules/scrollreveal/dist/scrollreveal.js',
                'js/effect.js'
            ])
        
        .pipe(concat('concated.js'))
        .pipe(minify({
            ext:{
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest('dist/js'));
});
gulp.task('default', () => {
    gulp.watch('scss/*.scss', ['scss']);
    gulp.watch('js/*.js', ['js-concat']);
});