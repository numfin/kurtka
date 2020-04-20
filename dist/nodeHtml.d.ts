import { Tags } from "./Tags";
import { Attrs } from "./Attrs";
declare type NodeHTML = Kurtka.Node | string | number;
declare type Children = NodeHTML | (() => Kurtka.Node[]);
export declare function createNodeHtml(tag: Tags, attrs: Attrs, childrens: Children[]): Kurtka.Node;
export {};
