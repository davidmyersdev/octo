const codeRegex = /```([^\n\s]*)(?:\s([\w-]+\.[\w]+))?\n(.*?)```/gs;
const imageTagRegex = /\!\[(.*?)\]\((.+?)\)/g;
const tagsRegex = /````.*?````|```.*?```|``.*?``|`.*?`|\w+:\/?\/?\S*|#([\w-]+)/gs;
const tasksRegex = /````.*?````|```.*?```|``.*?``|`.*?`|\-\ \[\ \] ([^\n]+)/gs;

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

export const parseImages = (text) => {
  let matches = parse(imageTagRegex, text);
  let results = [];

  matches.forEach((match) => {
    if (match[2]) {
      results.push({
        alt: match[1],
        url: match[2],
      });
    }
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

export const parseTasks = (text) => {
  let matches = parse(tasksRegex, text);
  let results = [];

  matches.forEach((match) => {
    if (match[1]) {
      results.push(match[1]);
    }
  });

  return results;
};

export default {
  parse,
  parseCodeblocks,
  parseImages,
  parseTags,
};
