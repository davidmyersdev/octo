var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { a as syntaxTree } from "./index-9e94dbc0.js";
import { S as StateField, R as RangeSet } from "./index-73136136.js";
import { E as EditorView, D as Decoration, W as WidgetType } from "./index-f4eaee3d.js";
class ImageWidget extends WidgetType {
  constructor({ url }) {
    super();
    __publicField(this, "url");
    this.url = url;
  }
  eq(imageWidget) {
    return imageWidget.url === this.url;
  }
  toDOM() {
    const container = document.createElement("div");
    const backdrop = container.appendChild(document.createElement("div"));
    const figure = backdrop.appendChild(document.createElement("figure"));
    const image = figure.appendChild(document.createElement("img"));
    container.setAttribute("aria-hidden", "true");
    container.className = "cm-image-container";
    backdrop.className = "cm-image-backdrop";
    figure.className = "cm-image-figure";
    image.className = "cm-image-img";
    image.src = this.url;
    container.style.paddingBottom = "0.5rem";
    container.style.paddingTop = "0.5rem";
    backdrop.classList.add("cm-image-backdrop");
    backdrop.style.borderRadius = "var(--ink-internal-border-radius)";
    backdrop.style.display = "flex";
    backdrop.style.alignItems = "center";
    backdrop.style.justifyContent = "center";
    backdrop.style.overflow = "hidden";
    backdrop.style.maxWidth = "100%";
    figure.style.margin = "0";
    image.style.display = "block";
    image.style.maxHeight = "var(--ink-internal-block-max-height)";
    image.style.maxWidth = "100%";
    image.style.width = "100%";
    return container;
  }
}
const images = () => {
  const imageRegex = /!\[.*?\]\((?<url>.*?)\)/;
  const imageDecoration = (imageWidgetParams) => Decoration.widget({
    widget: new ImageWidget(imageWidgetParams),
    side: -1,
    block: true
  });
  const decorate = (state) => {
    const widgets = [];
    syntaxTree(state).iterate({
      enter: ({ type, from, to }) => {
        if (type.name === "Image") {
          const result = imageRegex.exec(state.doc.sliceString(from, to));
          if (result && result.groups && result.groups.url)
            widgets.push(imageDecoration({ url: result.groups.url }).range(state.doc.lineAt(from).from));
        }
      }
    });
    return widgets.length > 0 ? RangeSet.of(widgets) : Decoration.none;
  };
  const imagesField = StateField.define({
    create(state) {
      return decorate(state);
    },
    update(images2, transaction) {
      if (transaction.docChanged)
        return decorate(transaction.state);
      return images2.map(transaction.changes);
    },
    provide(field) {
      return EditorView.decorations.from(field);
    }
  });
  return [
    imagesField
  ];
};
export {
  images
};
//# sourceMappingURL=images.0bde9a43-743b7270.js.map
