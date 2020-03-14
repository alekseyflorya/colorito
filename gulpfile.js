const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

function css_style(done) {

    gulp.src('./scss/**/*.scss')
        .pipe( sourcemaps.init() )
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe( rename({suffix: '.min'}) )
        .pipe( sourcemaps.write('./') )
        .pipe( gulp.dest('./css/') )
        .pipe( browserSync.stream() );
    done()
}

function animateCss(done) {
    gulp.src('./node_modules/animate.css/animate.min.css')
        .pipe(gulp.dest('./css/'));
    done()
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

function browserReload(done){
    browserSync.reload();
    done()
}

function print(done){
    console.log("Hi!");
    done();
}

function watchSass(){
    gulp.watch("./scss/**/*", css_style);
}
function watchFiles(){
    gulp.watch("./scss/**/*", css_style);
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./**/*.php", browserReload);
    gulp.watch("./**/*.js", browserReload);
}
//gulp.task(css_style);

gulp.task('default', gulp.parallel(sync, watchFiles, animateCss));