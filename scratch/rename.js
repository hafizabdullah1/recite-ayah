const fs = require('fs');
const path = require('path');

const directory = './src';
const searchWords = [
  { from: /Quran Expert/g, to: 'Recite Ayah' },
  { from: /quranexpert/g, to: 'reciteayah' },
];

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      searchWords.forEach(sw => {
        newContent = newContent.replace(sw.from, sw.to);
      });
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated ${fullPath}`);
      }
    }
  });
}

walkDir(directory);
walkDir('./docs');
