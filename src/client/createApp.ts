export function createApp(app: Kurtka.NodeComponent, parent: Element) {
  parent?.replaceWith(app.el);
  return app;
}
