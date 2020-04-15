import { createNodeHtml } from "~/client/nodeHtml";
import { createNodeComponent } from "~/client/nodeComponent";
import { Tags } from "~/client/Tags";
import { Attrs } from "~/client/Attrs";

export function createNode<T extends Attrs>(
    tag: Tags | (new (p: T) => Kurtka.Component),
    attrs: T,
    ...children: Kurtka.Node[]
): Kurtka.Node {
    if (typeof tag === "function") {
        return createNodeComponent(tag, attrs);
    }
    return createNodeHtml(tag, attrs, children);
}
