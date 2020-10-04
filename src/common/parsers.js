const codeRegex = /```([^\n\s]*)(?:\s([\w-]+\.[\w]+))?\n(.*?)```/gs;
const tagsRegex = /````.*?````|```.*?```|``.*?``|`.*?`|\w+:\/?\/?\S*|#([\w-]+)/gs;

export const parse = (regex, text) => {
  let matches = [];
  let results = [];

  while (matches = regex.exec(text)) {
    results.push(matches);
  }

  return results;
};

export const parseCodeblocks = (text) => {
  let matches = parse(codeRegex, text);
  let results = [];

  matches.forEach((match) => {
    results.push({
      filename: match[2],
      language: match[1],
      code: match[3],
    });
  });

  return results;
};

export const parseTags = (text) => {
  let matches = parse(tagsRegex, text);
  let tags = new Set();

  matches.forEach((match) => {
    if (match[1]) {
      tags.add(match[1].toLowerCase());
    }
  });

  return Array.from(tags).sort();
};

export default {
  parse,
  parseCodeblocks,
  parseTags,
};
