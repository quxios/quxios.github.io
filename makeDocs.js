const fs = require('fs');

const fileName = process.argv[2];
if (!fileName) return;

const docsPath = `./data/docs/`
const filePath  = `${docsPath}${fileName}/doc.md`

fs.readFile(filePath, 'utf8', (err, data) => {
  if (!err) {
    main(data);
  } else {
    console.error(err);
  }
})

function main(data) {
  console.log('Started task');
  console.time('Task ended');
  let output = {
    title: '',
    body: '',
    sections: []
  }
  output.title = getTitle(data);
  output.body  = fixLinks(data.replace(`# ${output.title}`, ''));
  output.sections = getSections(output.body);
  fs.writeFileSync(`${docsPath}${fileName}.json`, JSON.stringify(output));
  console.timeEnd('Task ended');
}

function getTitle(data) {
  const match = /# (.*)/.exec(data);
  if (match) {
    return match[1];
  }
  return '';
}

function getSections(body) {
  let sections = [];
  const regex = /^##(.*)/igm;
  while (true) {
    let match = regex.exec(body);
    if (match) {
      sections.push(match[1].trim());
    } else {
      break;
    }
  }
  return sections;
}

function fixLinks(body) {
  const regex = /\(\.\//g;
  return body.replace(regex, `(${docsPath}${fileName}/`);
}
