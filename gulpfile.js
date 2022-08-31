import gulp from 'gulp'
import minify from 'gulp-minify'
import rename from 'gulp-rename'
import replace from 'gulp-replace'
import browsersync from 'browser-sync'
import { deleteAsync } from 'del'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import cleanCss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import webpack from 'webpack-stream'

/**
 * Настройки: откуда куда что класть
 */
const path = {
    html: {
        src: 'src/index.html',
        watch: 'src/index.html',
        build: 'dist/',
    },
    js: {
        src: 'src/js/app.js',
        watch: 'src/js/**/*.js',
        build: 'dist/js/',
    },
    css: {
        src: 'src/scss/style.scss',
        watch: 'src/scss/**/*.scss',
        build: 'dist/css/'
    },
    clean: 'dist/',
    buildFolder: 'dist/',
}

/**
 * Функции: как что и где обрабатывать
 */
function reset() {
    return deleteAsync(path.clean)
}

function html() {
    return gulp.src(path.html.src)
        .pipe(replace(/style.css/g, 'style-min.css'))
        .pipe(replace(/app.js/g, 'app-min.js'))
        .pipe(gulp.dest(path.html.build))
        .pipe(browsersync.stream())
}

const sass = gulpSass(dartSass)
function css() {
    return gulp.src(path.css.src, { sourcemaps: true })
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(groupCssMediaQueries())
        .pipe(cleanCss())
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
        }))
        .pipe(minify())
        .pipe(rename({extname: '-min.css'}))
        .pipe(gulp.dest(path.css.build))
        .pipe(browsersync.stream())
}

function js() {
    return gulp.src(path.js.src, { sourcemaps: true })
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'app.js'
            }
        }))
        .pipe(minify())
        .pipe(gulp.dest(path.js.build))
        .pipe(browsersync.stream())
}

/**
 * Запуск: как что когда запускать на чём
 */
function server(done) {
    browsersync.init({
        server: {
            baseDir: path.html.build
        },
        notify: false,
        port: 3000
    })
}

function watcher() {
    gulp.watch(path.html.watch, html)
    gulp.watch(path.css.watch, css)
    gulp.watch(path.js.watch, js)
}

const defaultSeries = gulp.series(
    reset,
    gulp.parallel(html, css, js),
    gulp.parallel(watcher, server)
)

gulp.task('default', defaultSeries)