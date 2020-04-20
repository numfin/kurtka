export declare class Component implements Kurtka.Component {
    key: symbol;
    props?: Record<string, unknown>;
    state?: Record<string, unknown>;
    node: Kurtka.Node;
    constructor();
    render(): Kurtka.Node;
    update(): HTMLElement;
}
