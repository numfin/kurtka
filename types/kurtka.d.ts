declare namespace Kurtka {
  type Attrs = null | dom.BaseAttributes;

  class Component {
    key: Symbol;
    props?: Record<string, unknown>;
    state?: Record<string, unknown>;
    node: Node;

    constructor(props: Record<string, unknown>);
    render(): Node;
    update(): HTMLElement;
  }

  function createNode(): Node;

  type Node = () => HTMLElement;
}
