import { V as ViewPlugin, S as StateField, b as EditorView, s as syntaxTree, R as RangeSet, D as Decoration } from "./Editor.5b58e607.js";
import "./index.36c6bdda.js";
import "./account.1d085f45.js";
const dotWidget = () => {
  return {
    compare: (_other) => {
      return false;
    },
    destroy: () => {
    },
    eq: (_other) => {
      return false;
    },
    estimatedHeight: -1,
    ignoreEvent: () => true,
    toDOM: () => {
      const span = document.createElement("span");
      span.innerHTML = "&#x2022;";
      span.setAttribute("aria-hidden", "true");
      return span;
    },
    updateDOM: () => false
  };
};
const taskWidget = (isChecked) => {
  return {
    compare: (other) => {
      return other.isChecked === isChecked;
    },
    destroy: () => {
    },
    eq: (other) => {
      return other.isChecked === isChecked;
    },
    estimatedHeight: -1,
    ignoreEvent: () => false,
    isChecked,
    toDOM: () => {
      const input = document.createElement("input");
      input.setAttribute("aria-hidden", "true");
      input.className = "ink-mde-task-toggle";
      input.type = "checkbox";
      input.checked = isChecked;
      return input;
    },
    updateDOM: () => false
  };
};
const hasOverlap = (x1, x2, y1, y2) => {
  return Math.max(x1, y1) <= Math.min(x2, y2);
};
const isCursorInRange = (state, from, to) => {
  return state.selection.ranges.some((range) => {
    return hasOverlap(from, to, range.from, range.to);
  });
};
const toggleTask = (view, position) => {
  const before = view.state.sliceDoc(position + 2, position + 5);
  view.dispatch({
    changes: {
      from: position + 2,
      to: position + 5,
      insert: before === "[ ]" ? "[x]" : "[ ]"
    }
  });
  return true;
};
const lists = () => {
  const dotDecoration = () => Decoration.replace({
    widget: dotWidget()
  });
  const taskDecoration = (isChecked) => Decoration.replace({
    widget: taskWidget(isChecked)
  });
  const decorate = (state) => {
    const widgets = [];
    syntaxTree(state).iterate({
      enter: ({ type, from, to }) => {
        if (type.name === "ListMark" && !isCursorInRange(state, from, to)) {
          const task = state.sliceDoc(to + 1, to + 4);
          if (!["[ ]", "[x]"].includes(task)) {
            const marker = state.sliceDoc(from, to);
            if (["-", "*"].includes(marker)) {
              widgets.push(dotDecoration().range(from, to));
            }
          }
        }
        if (type.name === "TaskMarker" && !isCursorInRange(state, from - 2, to)) {
          const task = state.sliceDoc(from, to);
          widgets.push(taskDecoration(task === "[x]").range(from - 2, to));
        }
      }
    });
    return widgets.length > 0 ? RangeSet.of(widgets) : Decoration.none;
  };
  const viewPlugin = ViewPlugin.define(() => ({}), {
    eventHandlers: {
      mousedown: (event, view) => {
        const target = event.target;
        if ((target == null ? void 0 : target.nodeName) === "INPUT" && target.classList.contains("ink-mde-task-toggle")) {
          return toggleTask(view, view.posAtDOM(target));
        }
      }
    }
  });
  const stateField = StateField.define({
    create(state) {
      return decorate(state);
    },
    update(_references, { state }) {
      return decorate(state);
    },
    provide(field) {
      return EditorView.decorations.from(field);
    }
  });
  return [
    viewPlugin,
    stateField
  ];
};
export {
  lists
};
//# sourceMappingURL=lists.b465ff74.76ea6971.js.map
