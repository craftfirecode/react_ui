import fs from 'fs';
import { glob } from 'glob';
import cheerio from 'cheerio';
import css from 'css';

async function generateCustomCSS() {
  let styles = [];

  const files = glob.sync('./src/**/*.tsx');
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /className="([^"]+)"/g;
    let match;

    while (match = regex.exec(content)) {
      const classNames = match[1];
      classNames.split(/\s+/).forEach(cl => {
        // Erkennung verschiedener CSS-Klassen
        const marginMatch = cl.match(/m([trblxy]?)-\[(\d+px)\]/);
        const paddingMatch = cl.match(/p([trblxy]?)-\[(\d+px)\]/);
        const fontSizeMatch = cl.match(/text-\[([\d.]+(px|rem))\]/);
        const textColorMatch = cl.match(/text-\[(#\w{3,6})\]/);
        const backgroundMatch = cl.match(/bg-\[(#\w{3,6})\]/);

        if (marginMatch) {
          const property = marginMatch[1] ? `margin-${marginMatch[1]}` : 'margin';
          addStyle(cl, property, marginMatch[2]);
        }
        if (paddingMatch) {
          const property = paddingMatch[1] ? `padding-${paddingMatch[1]}` : 'padding';
          addStyle(cl, property, paddingMatch[2]);
        }
        if (fontSizeMatch) {
          addStyle(cl, 'font-size', fontSizeMatch[1]);
        }
        if (textColorMatch) {
          addStyle(cl, 'color', textColorMatch[1]);
        }
        if (backgroundMatch) {
          addStyle(cl, 'background-color', backgroundMatch[1]);
        }
      });
    }
  }

  // Hilfsfunktion zum Hinzufügen von Styles
  function addStyle(className, property, value) {
    const safeClassName = className.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
    styles.push({
      selector: `.${safeClassName}`,
      declaration: { [property]: value }
    });
  }

  const stylesheet = {
    type: 'stylesheet',
    stylesheet: {
      rules: styles.map(style => ({
        type: 'rule',
        selectors: [style.selector],
        declarations: [{
          type: 'declaration',
          property: Object.keys(style.declaration)[0],
          value: style.declaration[Object.keys(style.declaration)[0]]
        }]
      }))
    }
  };

  return css.stringify(stylesheet);
}

const cssOutput = await generateCustomCSS();
fs.writeFileSync('./src/generatedStyles.css', cssOutput);
console.log('CSS generated successfully.');
