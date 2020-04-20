import { Attrs } from "./Attrs";
import { makeReactive } from "./makeReactive";

export function createNodeComponent<T extends Attrs>(
  C: new (attrs: T) => Kurtka.Component,
  attrs: T
): Kurtka.Node {
  const component = new C(attrs);
  if (component.state) {
    component.state = makeReactive(component.state, () => component.update());
  }

  component.node = component.render();
  return component.node;
}
