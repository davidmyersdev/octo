const regex = /````.*?````|```.*?```|``.*?``|`.*?`|\w+:\/?\/?\S*|#(\w+)/gs;

export const parse = (text) => {
  let tags = new Set();
  let match = [];

  while (match = regex.exec(text)) {
    if (match[1]) tags.add(match[1].toLowerCase());
  }

  return Array.from(tags).sort();
};

export default {
  parse,
};
