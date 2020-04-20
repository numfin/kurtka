export class Component implements Kurtka.Component {
  key = Symbol();
  props?: Record<string, unknown> = {};
  state?: Record<string, unknown>;
  node: Kurtka.Node = () => null!;

  constructor() {}
  render(): Kurtka.Node {
    return null!;
  }
  update(): HTMLElement {
    return this.node() as any;
  }
}
