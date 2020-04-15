import { Tags } from "./Tags";
import { Attrs } from "./Attrs";

export function createNodeHtml(
    tag: Tags,
    attrs: Attrs,
    children: Kurtka.Node[]
): Kurtka.Node {
    const el = document.createElement(tag);
    if (attrs) {
        const { events, style, ...attributes } = attrs;
        Object.assign(el, attributes);
        Object.assign(el.style, style);
        Object.entries(events || {}).forEach(([event, handler]) => {
            el.addEventListener(event, (...args) => handler(...args));
        });
    }

    return function renderHtml() {
        function replaceNodes(
            root: HTMLElement | DocumentFragment,
            childs: Kurtka.Node[]
        ) {
            childs.forEach((child, i) => {
                let node;
                if (typeof child === "function") {
                    const c = child();
                    if (Array.isArray(c)) {
                        return replaceNodes(el, c);
                    } else {
                        node = c;
                    }
                } else {
                    node = document.createTextNode(String(child));
                }
                const cached = root.childNodes[i];
                if (cached) {
                    if (!cached.isEqualNode(node)) {
                        root.replaceChild(node, cached);
                    }
                } else {
                    root.appendChild(node);
                }
            });
        }
        replaceNodes(el, children);
        return el;
    };
}
