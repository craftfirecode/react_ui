import fs from 'fs';
import { glob } from 'glob';
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

        if (marginMatch) {
          const properties = getMarginProperties(marginMatch[1]);
          properties.forEach(property => addStyle(cl, property, marginMatch[2]));
        }
        if (paddingMatch) {
          const properties = getPaddingProperties(paddingMatch[1]);
          properties.forEach(property => addStyle(cl, property, paddingMatch[2]));
        }
        if (fontSizeMatch) {
          addStyle(cl, 'font-size', fontSizeMatch[1]);
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

  // Hilfsfunktion zur Erkennung von Margin-Properties
  function getMarginProperties(marginAbbreviation) {
    switch (marginAbbreviation) {
      case 't': return ['margin-top'];
      case 'r': return ['margin-right'];
      case 'b': return ['margin-bottom'];
      case 'l': return ['margin-left'];
      case 'x': return ['margin-left', 'margin-right'];
      case 'y': return ['margin-top', 'margin-bottom'];
      default: return ['margin'];
    }
  }

  // Hilfsfunktion zur Erkennung von Padding-Properties
  function getPaddingProperties(paddingAbbreviation) {
    switch (paddingAbbreviation) {
      case 't': return ['padding-top'];
      case 'r': return ['padding-right'];
      case 'b': return ['padding-bottom'];
      case 'l': return ['padding-left'];
      case 'x': return ['padding-left', 'padding-right'];
      case 'y': return ['padding-top', 'padding-bottom'];
      default: return ['padding'];
    }
  }

  const stylesheet = {
    type: 'stylesheet',
    stylesheet: {
      rules: styles.map(style => ({
        type: 'rule',
        selectors: [style.selector],
        declarations: Object.keys(style.declaration).map(property => ({
          type: 'declaration',
          property,
          value: style.declaration[property]
        }))
      }))
    }
  };

  return css.stringify(stylesheet);
}

const cssOutput = await generateCustomCSS();
fs.writeFileSync('./src/generatedStyles.css', cssOutput);
console.log('CSS generated successfully.');
