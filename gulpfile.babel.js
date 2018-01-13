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

require('./tutorials/task.js');

const URL = 'https://quxios.github.io/';

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

gulp.task('sitemap', () => {
  let txt = '<?xml version="1.0" encoding="UTF-8"?>\n';
  txt += '<urlset xmlns = "http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  let urls = [];
  urls.push({
    loc: ''
  })
  urls.push({
    loc: 'plugins'
  })
  var plugins = require('./data/plugins.json');
  for (const key in plugins) {
    const plugin = plugins[key];
    urls.push({
      loc: `plugins/${plugin.name}`
    })
  }
  urls.push({
    loc: 'tutorials'
  })
  var tutorials = require('./data/tutorials.json');
  for (const key in tutorials) {
    const tutorial = tutorials[key];
    urls.push({
      loc: `tutorials/${tutorial.name}`
    })
  }
  urls.forEach((url) => {
    txt += '  <url>\n';
    txt += `    <loc>${URL}${url.loc ? '?path=' : ''}${url.loc}</loc>\n`
    txt += '  </url>\n';
  })
  txt += '</urlset>';
  require('fs').writeFileSync('sitemap.xml', txt);
})