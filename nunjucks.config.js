const path = require('path');
const nunjucks = require('nunjucks');
const fs = require('fs');
const pretty = require('pretty');
const config = require('./project.config.json');

const paternsDir = path.join(__dirname, 'test/_patterns/');
const patternsDir = path.join(__dirname, 'patterns/');
const scriptsDir = path.join(__dirname, 'scripts/');
const stylesDir = path.join(__dirname, 'styles/');
const pagesDir = path.join(__dirname, 'test/_patterns/pages/');
const distDir = path.join(__dirname, '_site/');
const dataDir = path.join(__dirname, 'test/_assets/data/');

const data = {};

data.project = config;

fs.readdirSync(dataDir).forEach(file => {
  data[file.replace(/\.json$/, '')] = require(dataDir + file);
});

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader([paternsDir, patternsDir, scriptsDir, stylesDir]), {
  autoescape: false
});

fs.readdirSync(pagesDir).forEach(file => {
  const codeHTML = env.render(pagesDir + file, data);
  const fileHTML = file.slice(0, -3) + 'html';
  const finalHTML = pretty(codeHTML, { ocd: true });
  fs.writeFile(distDir + fileHTML, finalHTML, err => {
    if (err) console.error('\x1b[31m%s\x1b[0m', err);
  });
});
