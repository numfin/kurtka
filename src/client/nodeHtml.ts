import { Tags } from "./Tags";
import { Attrs } from "./Attrs";

export function createNodeHtml(
  tag: Tags,
  attrs: Attrs,
  children: Kurtka.Node[]
): Kurtka.Node {
  const fragments = document.createDocumentFragment();

  children.forEach(child => {
    if (["string", "number"].includes(typeof child)) {
      fragments.appendChild(document.createTextNode(String(child)));
    } else if (typeof child === "object") {
      fragments.appendChild(child.el);
    } else {
      console.warn(`idk this element ${el}`);
    }
  });
  const el = document.createElement(tag);
  el.appendChild(fragments);
  if (attrs) {
    const { events, style, ...attributes } = attrs;
    Object.assign(el, attributes);
    Object.assign(el.style, style);
    Object.entries(events || {}).forEach(([event, handler]) => {
      el.addEventListener(event, (...args) => handler(...args));
    });
  }
  return { type: Kurtka.NodeType.html, el, children };
}
