function createNodeHtml(tag, attrs, children) {
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
        function replaceNodes(root, childs) {
            childs.forEach((child, i) => {
                let node;
                if (typeof child === "function") {
                    const c = child();
                    if (Array.isArray(c)) {
                        return replaceNodes(el, c);
                    }
                    else {
                        node = c;
                    }
                }
                else {
                    node = document.createTextNode(String(child));
                }
                const cached = root.childNodes[i];
                if (cached) {
                    if (!cached.isEqualNode(node)) {
                        root.replaceChild(node, cached);
                    }
                }
                else {
                    root.appendChild(node);
                }
            });
        }
        replaceNodes(el, children);
        return el;
    };
}
//# sourceMappingURL=nodeHtml.js.map

function makeReactive(item, reactFn) {
    if (Array.isArray(item)) {
        return new Proxy(item.map((v) => makeReactive(v, reactFn)), {
            set(target, key, value) {
                if (key !== "length") {
                    target[key] = makeReactive(value, reactFn);
                    reactFn();
                }
                return true;
            },
        });
    }
    else if (typeof item === "object") {
        Object.entries(item).forEach(([k, v]) => {
            item[k] = makeReactive(v, reactFn);
        });
        return new Proxy(item, {
            set(target, key, value) {
                target[key] = makeReactive(value, reactFn);
                reactFn();
                return true;
            },
        });
    }
    else {
        return item;
    }
}

function createNodeComponent(C, attrs) {
    const component = new C(attrs);
    const node = component.render();
    if (component.state) {
        component.state = makeReactive(component.state, node);
    }
    return function renderComponent() {
        return node();
    };
}

function createNode(tag, attrs, ...children) {
    if (typeof tag === "function") {
        return createNodeComponent(tag, attrs);
    }
    return createNodeHtml(tag, attrs, children);
}
//# sourceMappingURL=createNode.js.map

class Component {
    constructor() {
        this.key = Symbol();
        this.props = {};
    }
    render() {
        return null;
    }
}
const NodeType = {
    html: "html",
    component: "component"
};
//# sourceMappingURL=Component.js.map

const Kurtka = {
    createNode,
    Component,
    NodeType
};
//# sourceMappingURL=Kurtka.js.map

function createApp(app, parent) {
    parent === null || parent === void 0 ? void 0 : parent.replaceWith(app());
    return app;
}
//# sourceMappingURL=createApp.js.map

export { Kurtka, createApp };
//# sourceMappingURL=index.js.map
