export declare class Component implements Kurtka.Component {
    key: symbol;
    props?: Record<string, unknown>;
    state?: Record<string, unknown>;
    constructor();
    render(): Kurtka.NodeHtml;
}
export declare const NodeType: Record<keyof typeof Kurtka.NodeType, string>;
