import { C as Color, _ } from "./darken-fdc59d89.js";
const luminance = (color) => {
  const { r, g, b } = Color.parse(color);
  const luminance2 = 0.2126 * _.channel.toLinear(r) + 0.7152 * _.channel.toLinear(g) + 0.0722 * _.channel.toLinear(b);
  return _.lang.round(luminance2);
};
const luminance$1 = luminance;
export {
  luminance$1 as l
};
//# sourceMappingURL=luminance-d8ea28d2.js.map
