declare namespace Kurtka {
  type Attrs = null | dom.BaseAttributes;

  class Component {
    key: Symbol;
    props?: Record<string, unknown>;
    state?: Record<string, unknown>;

    constructor(props: { key: Symbol } & Record<string, unknown>);
    render(): NodeHtml;
  }

  function createNode(): Node;

  enum NodeType {
    html,
    component
  }

  interface NodeHtml {
    type: NodeType;
    el: HTMLElement;
    children: Node[];
  }

  interface NodeComponent {
    type: NodeType;
    el: HTMLElement;
    component: Component;
    children: Node[];
  }

  type Node = NodeHtml | NodeComponent | string | number;
}
