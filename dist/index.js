function createNodeHtml(tag, attrs, children) {
    const fragments = document.createDocumentFragment();
    children.forEach(child => {
        if (["string", "number"].includes(typeof child)) {
            fragments.appendChild(document.createTextNode(String(child)));
        }
        else if (typeof child === "object") {
            fragments.appendChild(child.el);
        }
        else {
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
//# sourceMappingURL=nodeHtml.js.map

const cache = new Map();
function createNodeComponent(C, attrs) {
    // cache component with key
    const cached = cache.get(attrs === null || attrs === void 0 ? void 0 : attrs.key);
    const component = cached !== null && cached !== void 0 ? cached : new C(attrs);
    if (!cached && (attrs === null || attrs === void 0 ? void 0 : attrs.key)) {
        cache.set(attrs === null || attrs === void 0 ? void 0 : attrs.key, component);
    }
    const { state } = component;
    const node = component.render();
    // proxy render function
    component.render = new Proxy(component.render, {
        apply(target, ctx, args) {
            const updatedEl = target.apply(ctx, args);
            node.el.replaceWith(updatedEl.el);
            node.el = updatedEl.el;
            return updatedEl;
        }
    });
    // call render when state updates
    if (state) {
        component.state = new Proxy(state, {
            set(target, prop, value) {
                target[prop] = value;
                component.render();
                return true;
            }
        });
    }
    return {
        type: Kurtka.NodeType.component,
        component,
        el: node.el,
        children: []
    };
}

function createNode(tag, attrs, ...children) {
    if (typeof tag === "function") {
        return createNodeComponent(tag, attrs);
    }
    return createNodeHtml(tag, attrs, children);
}

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

const Kurtka$1 = {
    createNode,
    Component,
    NodeType
};
//# sourceMappingURL=Kurtka.js.map

function createApp(app, parent) {
    parent === null || parent === void 0 ? void 0 : parent.replaceWith(app.el);
    return app;
}
//# sourceMappingURL=createApp.js.map

export { Kurtka$1 as Kurtka, createApp };
//# sourceMappingURL=index.js.map
