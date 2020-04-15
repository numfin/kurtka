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

    type NodeHtml = () => HTMLElement;
    type NodeComponent = () => HTMLElement;

    type Node = NodeHtml | NodeComponent | string | number;
}
