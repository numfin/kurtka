export class Component implements Kurtka.Component {
  key = Symbol();
  props?: Record<string, unknown> = {};
  state?: Record<string, unknown>;

  constructor() {}
  render(): Kurtka.NodeHtml {
    return null!;
  }
}

export const NodeType: Record<keyof typeof Kurtka.NodeType, string> = {
  html: "html",
  component: "component"
};
