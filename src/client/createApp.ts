export function createApp(app: Kurtka.Node, parent: Element) {
  parent?.replaceWith(app() as any);
  return app;
}
