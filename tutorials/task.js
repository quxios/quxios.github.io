import gulp from 'gulp'

import fs from 'fs'
import path from 'path'

const tutorials = [
  'rmmv-dev-intro.md'
]

const tutorialsPath = tutorials.map((p) => {
  return 'tutorials/tutorials/' + p;
})

gulp.task('tutorials', ['missingTutorials'], () => {
  let output = {};
  tutorialsPath.forEach((filePath) => {
    const file = fs.readFileSync(filePath, 'utf8');
    const stat = fs.statSync(filePath);
    let match = /^#(.*)$([\s\S]*?)#/gm.exec(file);
    if (match) {
      const name = path.basename(filePath, '.md');
      output[name] = {
        name,
        title: match[1].trim(),
        desc: (match[2] || '').trim(),
        date: stat.mtime
      }
    }
  })
  fs.writeFileSync('data/tutorials.json', JSON.stringify(output));
})

gulp.task('missingTutorials', function() {
  console.log(`Tutorials that aren't listed are:`);
  var files = fs.readdirSync('./tutorials/tutorials').filter(function(fileName) {
    if (tutorials.indexOf(fileName) === -1) {
      console.log(`- ${fileName}`);
    }
  })
})