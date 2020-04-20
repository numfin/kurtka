import { Tags } from "./Tags";
import { Attrs } from "./Attrs";

type NodeHTML = Kurtka.Node | string | number;
type Children = NodeHTML | (() => Kurtka.Node[]);

export function createNodeHtml(
  tag: Tags,
  attrs: Attrs,
  childrens: Children[]
): Kurtka.Node {
  const rootEl = document.createElement(tag);
  if (attrs) {
    const { events, style, class: classList, ...attributes } = attrs;
    Object.assign(rootEl, attributes);
    Object.assign((rootEl as HTMLElement).style, style);
    if (classList) {
      rootEl.classList.add(classList);
    }
    Object.entries(events || {}).forEach(([event, handler]) => {
      rootEl.addEventListener(event, (...args) => handler(...args));
    });
  }
  return function renderHtml(): HTMLElement {
    const nodeIndexes: Map<Node | string, number> = new Map();
    const nodeValues: (Node | string)[] = [];
    function addNode(node: Node | string) {
      nodeIndexes.set(node, nodeIndexes.size);
      nodeValues.push(node);
    }

    childrens.forEach((nodeFn) => {
      if (typeof nodeFn !== "function") {
        return addNode(String(nodeFn));
      }
      const node = nodeFn();
      if (node instanceof HTMLElement) {
        addNode(node);
      } else if (Array.isArray(node)) {
        for (let item of node) {
          addNode(item());
        }
      } else {
        addNode(String(node));
      }
    });

    const buffer: Set<Node> = new Set();

    let length = rootEl.childNodes.length;
    for (let rootIndex = 0; rootIndex < length; rootIndex++) {
      const rootItem = rootEl.childNodes.item(rootIndex);
      const isText = rootItem.nodeType === document.TEXT_NODE;
      const rootValue = isText ? rootItem.textContent : rootItem;
      if (isText && !rootValue) {
        rootItem.remove();
        continue;
      }
      if (nodeIndexes.has(rootValue!)) {
        if (!buffer.has(rootItem)) {
          const index = nodeValues.indexOf(rootValue!);
          if (index > rootIndex) {
            const max = index - rootIndex;
            for (let i = rootIndex; i < max; i++) {
              const value = nodeValues[i];
              const node =
                typeof value === "string"
                  ? document.createTextNode(value)
                  : value;
              rootEl.insertBefore(node, rootItem);
              length += 1;
            }
            rootIndex += max;
          }
        }
        buffer.add(rootItem!);
      } else {
        rootItem.remove();
        rootIndex -= 1;
        length -= 1;
      }
    }
    for (let item of nodeValues.slice(buffer.size)) {
      const node =
        typeof item === "string" ? document.createTextNode(item) : item;
      rootEl.appendChild(node);
    }
    return rootEl;
  };
}
