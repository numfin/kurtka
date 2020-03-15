import { Tags } from "~/client/Tags";
import { Attrs } from "~/client/Attrs";
export declare function createNode<T extends Attrs>(tag: Tags | (new (p: T) => Kurtka.Component), attrs: T, ...children: Kurtka.Node[]): Kurtka.Node;
