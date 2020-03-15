import { Attrs } from "./Attrs";
export declare function createNodeComponent<T extends Attrs>(C: new (attrs: T) => Kurtka.Component, attrs: T): Kurtka.NodeComponent;
