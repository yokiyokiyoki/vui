// 使用gulp构建
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const path = require('path');

// 编译全部less
gulp.task('allCss', () => {
  gulp
    .src(path.resolve(__dirname, '../src/styles/index.less'))
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions', 'ie > 8']
      })
    )
    .pipe(cleanCSS())
    .pipe(rename('dsui.css'))
    .pipe(gulp.dest(path.resolve(__dirname, '../lib/styles')));
});

// 按需编译组件less
gulp.task('css', () => {
  gulp
    .src(path.resolve(__dirname, '../src/styles/components/*.less'))
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions', 'ie > 8']
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.resolve(__dirname, '../lib/styles/components')));
});
gulp.task('default', ['allCss', 'css']);
