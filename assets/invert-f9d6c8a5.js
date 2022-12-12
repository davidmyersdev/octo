import { C as Color, _, a as ChannelsReusable } from "./darken-fdc59d89.js";
const change = (color, channels) => {
  const ch = Color.parse(color);
  for (const c in channels) {
    ch[c] = _.channel.clamp[c](channels[c]);
  }
  return Color.stringify(ch);
};
const change$1 = change;
const rgba = (r, g, b = 0, a = 1) => {
  if (typeof r !== "number")
    return change$1(r, { a: g });
  const channels = ChannelsReusable.set({
    r: _.channel.clamp.r(r),
    g: _.channel.clamp.g(g),
    b: _.channel.clamp.b(b),
    a: _.channel.clamp.a(a)
  });
  return Color.stringify(channels);
};
const rgba$1 = rgba;
const adjust = (color, channels) => {
  const ch = Color.parse(color);
  const changes = {};
  for (const c in channels) {
    if (!channels[c])
      continue;
    changes[c] = ch[c] + channels[c];
  }
  return change$1(color, changes);
};
const adjust$1 = adjust;
const mix = (color1, color2, weight = 50) => {
  const { r: r1, g: g1, b: b1, a: a1 } = Color.parse(color1);
  const { r: r2, g: g2, b: b2, a: a2 } = Color.parse(color2);
  const weightScale = weight / 100;
  const weightNormalized = weightScale * 2 - 1;
  const alphaDelta = a1 - a2;
  const weight1combined = weightNormalized * alphaDelta === -1 ? weightNormalized : (weightNormalized + alphaDelta) / (1 + weightNormalized * alphaDelta);
  const weight1 = (weight1combined + 1) / 2;
  const weight2 = 1 - weight1;
  const r = r1 * weight1 + r2 * weight2;
  const g = g1 * weight1 + g2 * weight2;
  const b = b1 * weight1 + b2 * weight2;
  const a = a1 * weightScale + a2 * (1 - weightScale);
  return rgba$1(r, g, b, a);
};
const mix$1 = mix;
const invert = (color, weight = 100) => {
  const inverse = Color.parse(color);
  inverse.r = 255 - inverse.r;
  inverse.g = 255 - inverse.g;
  inverse.b = 255 - inverse.b;
  return mix$1(inverse, color, weight);
};
const invert$1 = invert;
export {
  adjust$1 as a,
  invert$1 as i,
  rgba$1 as r
};
//# sourceMappingURL=invert-f9d6c8a5.js.map
