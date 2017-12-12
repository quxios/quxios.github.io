import gulp from 'gulp'
import gUtil from 'gulp-util'

import less from 'gulp-less'
import lessWatch from 'gulp-watch-less'
import lessAutoprefix from 'less-plugin-autoprefix'

import browserify from 'browserify'
import watchify from 'watchify'
import uglifyify from 'uglifyify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'

const customOpts = {
  entries: ['./es6/main.jsx'],
  extensions: ['.jsx'],
  debug: true
}
const bundler = watchify(browserify({
  ...watchify.args,
  ...customOpts
}))
  .transform('babelify')
  .on('update', bundle)
  .on('log', gUtil.log)

function bundle() {
  return bundler.bundle()
    .on('error', gUtil.log.bind(gUtil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./js'));
}

const autoPrefix = new lessAutoprefix({
  browsers: ['last 2 versions']
})

function buildLess() {
  return gulp.src('./css/style.less')
    .pipe(less({
      plugins: [autoPrefix]
    }))
    .pipe(gulp.dest('./css'))
}

function watchLess() {
  return lessWatch('./css/style.less', buildLess);
}

gulp.task('default', () => {
  console.log('Tasks:\ngulp dev\ngulp production');
})

gulp.task('dev', () => {
  buildLess();
  watchLess();
  return bundle();
})

gulp.task('production', () => {
  process.env.NODE_ENV = 'production';
  const bundler = browserify({
    ...watchify.args,
    ...customOpts,
    debug: false
  })
    .transform('babelify', { sourceMaps: false })
    .transform('uglifyify', { global: true })

  return bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./js'));
})