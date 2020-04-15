import { Attrs } from "./Attrs";
import { makeReactive } from "./makeReactive";

export function createNodeComponent<T extends Attrs>(
    C: new (attrs: T) => Kurtka.Component,
    attrs: T
): Kurtka.NodeComponent {
    const component = new C(attrs);

    const node = component.render();

    if (component.state) {
        component.state = makeReactive(component.state, node);
    }

    return function renderComponent() {
        return node();
    };
}
