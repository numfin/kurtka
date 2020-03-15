import { Attrs } from "./Attrs";

const cache = new Map();

export function createNodeComponent<T extends Attrs>(
  C: new (attrs: T) => Kurtka.Component,
  attrs: T
): Kurtka.NodeComponent {
  // cache component with key
  const cached = cache.get(attrs?.key);
  const component = cached ?? new C(attrs);

  if (!cached && attrs?.key) {
    cache.set(attrs?.key, component);
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
      set<T>(target: T, prop: keyof T, value: T[keyof T]) {
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
